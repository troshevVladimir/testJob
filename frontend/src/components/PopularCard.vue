<template>
    <div class="popular-card">
        <div class="popular-card__wrapper">
            <div class="label popular-card__label-data">
                <span>{{ filteredDate }}</span>
            </div>
        </div>
        <div v-if="data.themes.length" class="label popular-card__label-topic">
            <span v-for="(theme, idx) in data.themes" :key="idx">{{
                theme
            }}</span>
        </div>
        <div class="popular-card__title">
            {{ data.title }}
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
.popular-card {
    background: center / cover no-repeat url("../assets/img/Rectangle.png");
    width: calc((100% - 24px / 2) / 3 * 2);
    padding: 32px 16px 24px;
    display: flex;
    flex-direction: column;
    min-height: 254px;
    align-self: stretch;
    @media screen and (max-width: $breakpoint-mobile) {
        display: none;
        border-bottom: 1px solid $quill-gray;
    }

    .label {
        color: $white;
        align-self: start;
    }

    &__wrapper {
        flex: 1 0 auto;
    }

    &__label-data {
        font-weight: bold;
        font-size: 12px;
        background-color: rgba(151, 153, 155, 0.5);
        margin-bottom: 30px;

        span {
            color: CurrentColor;
        }
    }

    &__title {
        font-size: 32px;
        line-height: 41px;
        text-transform: uppercase;
        color: $white;
    }

    &__label-topic {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        border: 1px solid $quill-gray;
        margin-bottom: 8px;

        span {
            color: CurrentColor;
            text-transform: uppercase;
        }
    }
}
</style>
