import Vue from 'vue'
import Vuex from 'vuex'
import uniqid from "uniqid";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mode: false,
        importantTasks: [],
        dailyTasks: [],
    },
    mutations: {
        setMode(state) {
            state.mode = !state.mode
        },
        setNewTask(state, payload) {
            const {text, date, type} = payload
            if (type === '/') state.importantTasks.push({id: uniqid(), text, date})
            else state.dailyTasks.push({id: uniqid(), text, date})
        }
    },
    actions: {
        toggleMode(context) {
            context.commit('setMode')
        },
        addNewTask(context, payload) {
            context.commit('setNewTask', payload)
        }
    },
    modules: {},
    getters: {
        getMode(state) {
            return state.mode
        },
        getTasks: state => type => {
            if (type === 'important') return state.importantTasks
            return state.dailyTasks
        }
    }
})
