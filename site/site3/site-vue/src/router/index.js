import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberView from '../views/MemberView.vue'
import PortView from '../views/PortView.vue'
import MovieView from '../views/MovieView.vue'
import YoutubeView from '../views/YoutubeView.vue'
import UnsplashView from '../views/UnsplashView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView
  },
  {
    path: '/port',
    name: 'port',
    component: PortView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: YoutubeView
  },
  {
    path: '/unsplash',
    name: 'unsplash',
    component: UnsplashView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
