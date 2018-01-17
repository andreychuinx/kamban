import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseAction, firebaseMutations} from 'vuexfire'
import firebase from 'firebase'

Vue.use(Vuex)

const config = {
  apiKey: "AIzaSyDqdwo6RcUu9NmoTpqKpAuo1xbwcf2uIVQ",
  authDomain: "onyx-1485507111744.firebaseapp.com",
  databaseURL: "https://onyx-1485507111744.firebaseio.com",
  projectId: "onyx-1485507111744",
  storageBucket: "onyx-1485507111744.appspot.com",
  messagingSenderId: "185215280338"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const tasksRef = db.ref('tasks')

const state = {
  tasks: [],

}

const getters = {
  tasks: state => {
    return state.tasks
  },
  backlogList: state => {
    return state.tasks.filter(task => task.status === 'backlog')
  },
  todoList: state => {
    return state.tasks.filter(task => task.status === 'todo')
  },
  doingList: state => {
    return state.tasks.filter(task => task.status === 'doing')
  },
  doneList: state => {
    return state.tasks.filter(task => task.status === 'done')
  },
}

const actions = {
  setTasksRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('tasks', tasksRef)
  }),
  addTask (context, {task}) {
    tasksRef.push(task)
  },
  changeTaskStatus (context, { key, status }) {
    console.log(status, 'from action')
    tasksRef.child(key).update({
      status
    })
  },
  deleteTask ({commit}, { key }) {
    tasksRef.child(key).remove()
  }
}

const mutations = {
  ...firebaseMutations
}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})