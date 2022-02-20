<template>
    <div class="page-wrtaper">
        <div class="list-template">
            <component
                v-for="n in news"
                :key="n.id"
                v-bind:is="currentComponent(n)"
                :data="propsData(n)"
            ></component>
        </div>
        <Button v-if="!isLastPage" @click="btnHandler">Загрузить еще</Button>
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
        return { news: [] }
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
        ...mapState('news', { isLastPage: 'allFetched' })
    },
    whatch: {
        isLastPage (value) {
            console.log(value)
        }
    },
    async mounted () {
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
</style>
