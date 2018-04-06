import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Welcome from '@/components/Welcome'
import Recipes from '@/components/Recipes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    }, 
    {
      path: '/*',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
