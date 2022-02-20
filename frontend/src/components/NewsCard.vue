<template>
    <div class="news-card">
        <div class="news-card__wraper">
            <div class="label news-card__label-data">
                <span>{{ filteredDate }}</span>
            </div>
            <div class="news-card__title">
                {{ data.title }}
            </div>
        </div>
        <div v-show="data.themes.length" class="label news-card__label-topic">
            <span v-for="(theme, idx) in data.themes" :key="idx">
                {{ theme }}
            </span>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        filteredDate () {
            return moment.unix(this.data.date).format('DD.MM.YYYY')
        }
    }
}
</script>

<style lang="scss">
.label {
    padding: 4px 5px 2px 6px;
    border-radius: 2px;
    color: $oslo-gray;
    display: inline-block;
}
.news-card {
    background: $alabaster;
    max-width: calc((100% - 24px * 2) / 3);
    padding: 24px;
    display: flex;
    flex-direction: column;
    min-height: 254px;
    align-self: stretch;
    @media screen and (max-width: $breakpoint-mobile) {
        max-width: 100%;
        background: none;
        row-gap: 0;
        padding: 20px 0;
        min-height: 0px;
        border-bottom: 1px solid $quill-gray;
    }

    &__wraper {
        flex: 1 0 auto;
    }

    &__label-data {
        font-weight: bold;
        font-size: 12px;
        background-color: currentColor;
        margin-bottom: 30px;
        @media screen and (max-width: $breakpoint-mobile) {
            margin-bottom: 4px;
            font-size: 10px;
            padding: 4px 8px 2px;
        }
        span {
            color: $white;
        }
    }

    &__title {
        font-size: 24px;
        margin-bottom: 20px;
        line-height: 28px;
        @media screen and (max-width: $breakpoint-mobile) {
            margin-bottom: 15px;
            font-size: 16px;
        }
    }

    &__label-topic {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        border: 1px solid $quill-gray;
        align-self: start;

        span {
            color: CurrentColor;
        }
    }
}
</style>
