<template>
    <div class="page-wrapper">
        <div class="list-template" v-if="!warnings.length">
            <component
                v-for="n in news"
                :key="n.id"
                v-bind:is="currentComponent(n)"
                :data="propsData(n)"
            ></component>
        </div>
        <div v-else class="warning">{{ this.warnings[0] }}</div>

        <Button v-if="!isLastPage && !warnings.length" @click="btnHandler">
            Загрузить еще
        </Button>
    </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
import PopualarCard from '@/components/PopularCard'
import Button from '@/components/ui/UI-Button'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: 'list',
    data () {
        return { news: [], warnings: [] }
    },

    components: {
        NewsCard,
        PopualarCard,
        Button
    },
    methods: {
        ...mapActions('news', { updateNews: 'getNews' }),
        ...mapMutations('news', ['increasePage']),
        btnHandler () {
            this.addNews()
        },
        async addNews () {
            await this.updateNews()
            this.news = this.getNews
            this.warnings = this.getWarnings
        },
        currentComponent (n) {
            return n.spotlight ? PopualarCard : NewsCard
        },
        propsData (n) {
            return {
                date: n.date,
                image: n.image,
                title: n.title,
                themes: n.theme,
                url: n.url
            }
        }
    },
    computed: {
        ...mapState('news', { getNews: 'news' }),
        ...mapState('news', { getWarnings: 'warnings' }),
        ...mapState('news', { isLastPage: 'allFetched' })
    },
    mounted () {
        this.addNews()
    }
}
</script>

<style lang="scss">
.list-template {
    display: flex;
    row-gap: 24px;
    column-gap: 23px;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;
    @media screen and (max-width: $breakpoint-mobile) {
        flex-direction: column;
        row-gap: 0;
    }
}

.warning {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    color: $error-text-color;
}
</style>
