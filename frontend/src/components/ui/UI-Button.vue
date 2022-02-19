<template>
    <button class="button button--primary" @click.stop="emmit">
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

<style lang="scss"></style>
