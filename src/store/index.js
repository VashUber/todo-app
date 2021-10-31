import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mode: false
    },
    mutations: {
        setMode(state) {
            state.mode = !state.mode
            console.log(state.mode)
        }
    },
    actions: {
        toggleMode(context) {
            context.commit('setMode')
        }
    },
    modules: {},
    getters: {
        getMode(state) {
            return state.mode
        }
    }
})
