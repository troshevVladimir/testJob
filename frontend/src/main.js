// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'

import '@/utils/filter' // global
import { getLang } from '@/utils/i18n'
import { showNotyfications } from '@/utils/notifications'
import { VueAxios } from '@/utils/request'

import List from '@/views/List'

Vue.component('list', List)

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
    './components',
    true,
    /Z[\w-]+\/index\.js$/
)

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.split('/')[1]
    Vue.component(componentName, componentConfig.default || componentConfig)
})

window.onerror = function (msg, url, lineNo, columnNo, error) {
    showNotyfications(`${msg}<br>${url}#${lineNo}`, {
        type: 'error'
    })
}

Vue.config.errorHandler = function (err, vm, info) {
    let errMsg = `Error: ${err.toString()}`
    let infoMsg = ''
    let componentMsg = ''

    if (info) {
        infoMsg = `\nInfo: ${info}`
    }

    if (vm.hasOwnProperty('$options')) {
        componentMsg = `\nVm component: ${vm.$options._componentTag}`
    }

    console.error(`${errMsg}\n${infoMsg}\n${componentMsg}`)
    showNotyfications(`${errMsg}<br>${infoMsg}<br>${componentMsg}`, {
        type: 'error'
    })
}

Vue.config.warnHandler = function (msg, vm, info) {
    let warnMsg = `Warn: ${msg.toString()}`
    let infoMsg = ''
    let componentMsg = ''

    if (info) {
        infoMsg = `\nInfo: ${info}`
    }

    if (vm.hasOwnProperty('$options')) {
        componentMsg = `\nVm component: ${vm.$options._componentTag}`
    }

    console.warn(`${warnMsg}\n${infoMsg}\n${componentMsg}`)
    showNotyfications(`${warnMsg}<br>${infoMsg}<br>${componentMsg}`, {
        type: 'alert'
    })
}

Object.defineProperty(Vue.prototype, '$bus', {
    get () {
        return this.$root.bus
    }
})

Vue.config.productionTip = false

Vue.use(VueAxios)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    data: {
        lang: getLang(),
        bus: new Vue({}), // temp
        app: window.App
    },
    components: {
        App
    }
})
