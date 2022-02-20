import actions from './actions'
import { mutations } from './mutations'

const state = {
    news: [],
    page: 0,
    allFetched: false,
    warnings: []
}

export const news = {
    namespaced: true,
    state,
    actions,
    mutations
}
