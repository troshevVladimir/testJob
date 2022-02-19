<template>
    <div class="page-wrtaper">
        <div class="list-template">
            <PopualarCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <Button>Загрузить еще</Button>
    </div>
</template>

<script>
import NewsCard from '@/components/NewsCard'
import PopualarCard from '@/components/PopularCard'
import Button from '@/components/ui/UI-Button'
export default {
    name: 'list',
    components: {
        NewsCard,
        PopualarCard,
        Button
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
}
</style>
