import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Connetted from '@/views/connetted.vue'
import Teams from '@/views/teams.vue'

// // Importación de las nuevas vistas
// import UserProfile from '../components/UserProfile.vue'
// import UserConnections from '../components/UserConnections.vue'
// import UserTeams from '../components/UserTeams.vue'
// import UserProject from '../components/UserProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/project',
      name: 'project',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: AboutView
    },
    {
      path: '/connection',
      name: 'conenction',
      component: Connetted
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    }
    // {
    //   path: '/user-teams',
    //   name: 'user-teams',
    //   component: UserTeams
    // },
    // {
    //   path: '/user-project',
    //   name: 'user-project',
    //   component: UserProject
    // }
  ]
})

export default router
