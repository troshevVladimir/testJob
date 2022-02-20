import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import { news } from './modules/news'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        news
    },
    state: {},
    mutations: {},
    actions: {},
    getters
})
