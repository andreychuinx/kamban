import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: home
    }
  ]
})
