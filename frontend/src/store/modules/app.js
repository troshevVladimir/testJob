const app = {
    state: {
        device: 'desktop'
    },
    mutations: {
        ToggleDevice: (state, device) => {
            state.device = device
        }
    },
    actions: {
        ToggleDevice ({ commit }, device) {
            commit('ToggleDevice', device)
        }
    }
}

export default app
