import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/pages/Portfolio'
import Credits from '@/pages/Credits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    },

    {
      path: '/credits',
      name: 'credits',
      component: Credits
    }
  ]
})
