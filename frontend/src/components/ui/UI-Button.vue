<template>
    <button class="button button--primary button--block" @click.stop="emmit">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ui-button',
    methods: {
        emmit () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss">
.button--block {
    @media screen and (max-width: $breakpoint-mobile) {
        width: 100%;
        padding-top: 5px;
    }
}
</style>
