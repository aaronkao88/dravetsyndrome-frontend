import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue'),
      meta:{
        title:'社團法人台灣卓飛協會'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/index.vue'),
      meta:{
        title:'關於我們｜社團法人台灣卓飛協會'
      }
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import('@/views/Rule/index.vue'),
      meta:{
        title:'協會章程｜社團法人台灣卓飛協會'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/Team/index.vue'),
      meta:{
        title:'協會成員｜社團法人台灣卓飛協會'
      }
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('@/views/Media/index.vue'),
      meta:{
        title:'活動及媒體露出｜社團法人台灣卓飛協會'
      }
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: () => import('@/views/Hospital/index.vue'),
      meta:{
        title:'看診醫院｜社團法人台灣卓飛協會'
      }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
