import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Connetted from '@/views/connetted.vue'
import Teams from '@/views/teams.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: AboutView
    },
    {
      path: '/connections',
      name: 'connections',
      component: Connetted
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    }
  ]
})

export default router
