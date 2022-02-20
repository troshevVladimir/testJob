export let mutations = {
    saveNews (state, payload) {
        state.news = [...state.news, ...payload.items]
        state.total = payload.nav.total
    },
    emptyResponse (state) {
        state.warnings.push('Нет Новостей')
    },
    increasePage (state) {
        state.page = ++state.page
    },
    allFetched (state) {
        state.allFetched = true
    }
}
