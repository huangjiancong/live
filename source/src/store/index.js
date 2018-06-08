import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      window: {
        width: 0,
        height: 0
      },
      index: {
        gradeAndSubject: {},
        banner: [],
        hotCourse: [],
        newCourse: []
      },
      courseFilterList: {
        gradeAndSubject: {},
        courseList: []
      },
      productDetails: {
        details: {}
      }

    },
    actions,
    mutations,
    getters
  })
}
