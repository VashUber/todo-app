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

            this.dispatch('saveToLocalStorage')
        },
        setTasks(state) {
            state.importantTasks = JSON.parse(localStorage.getItem('importantTasks')) || []
            state.dailyTasks = JSON.parse(localStorage.getItem('dailyTasks')) || []
        },
        deleteTask(state, payload) {
            const {id, type} = payload
            if (type === '/') state.importantTasks = state.importantTasks.filter(elem => elem.id !== id)
            else state.dailyTasks = state.dailyTasks.filter(elem => elem.id !== id)

            this.dispatch('saveToLocalStorage')
        },
        saveToLocalStorage(state) {
            localStorage.setItem('importantTasks', JSON.stringify(state.importantTasks))
            localStorage.setItem('dailyTasks', JSON.stringify(state.dailyTasks))
        }
    },
    actions: {
        toggleMode(context) {
            context.commit('setMode')
        },
        addNewTask(context, payload) {
            context.commit('setNewTask', payload)
        },
        setTasks(context) {
            context.commit('setTasks')
        },
        deleteTask(context, payload) {
            context.commit('deleteTask', payload)
        },
        saveToLocalStorage(context) {
            context.commit('saveToLocalStorage')
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
