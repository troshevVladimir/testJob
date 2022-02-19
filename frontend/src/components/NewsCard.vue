<template>
    <div class="news-card">
        <div class="news-card__wraper">
            <div class="label news-card__label-data">
                <span>27.05.2018</span>
            </div>
            <div class="news-card__title">
                Зебра объявляет об изменениях в составе Совета директоров
            </div>
        </div>
        <div class="label news-card__label-topic">
            <span>Охрана труда и промышленная безопасность</span>
        </div>
    </div>
</template>

<script>
export default {}
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

    &__wraper {
        flex: 1 0 auto;
    }

    &__label-data {
        font-weight: bold;
        font-size: 12px;
        background-color: currentColor;
        margin-bottom: 30px;

        span {
            color: $white;
        }
    }

    &__title {
        font-size: 24px;
        margin-bottom: 20px;
        line-height: 28px;
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
