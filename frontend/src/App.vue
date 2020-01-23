<script>
import Vue from 'vue'
import 'vue-svgicon/dist/polyfill'

/*
 * Components
*/
import '@/styles/app.scss'

Vue.directive('click-outside', {
    bind: function (el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
            const compName = vNode.context.name
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
            if (compName) { warn += `Found in component '${compName}'` }

            console.warn(warn)
        }

        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
                binding.value(e)
            }
        }

        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
    },
    unbind: function (el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
    }
})

Vue.component('vue-raw', {
    props: ['raw'],
    render (h) {
        const div = document.createElement('div')
        div.innerHTML = this.raw
        return h(Vue.compile(div.outerHTML.replace(/\s{2,}/g, '')))
    }
})

export default {
    name: 'App',
    components: {

    }
}
</script>
