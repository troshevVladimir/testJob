import Vue from 'vue'

export default {
    async getNews ({ state, commit }) {
        if (!state.total || state.total >= state.page) {
            commit('increasePage')

            const news = await Vue.axios({
                method: 'get',
                url: !state.total
                    ? `http://localhost:9001/api/news/`
                    : `http://localhost:9001/api/news/${state.page}`
            })

            news.items.length === 0
                ? commit('emptyResponse')
                : commit('saveNews', news)
        }
        if (state.total === state.page) {
            commit('allFetched')
        }
    }
}
