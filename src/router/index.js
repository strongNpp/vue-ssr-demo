import Vue from 'vue'
import Router from 'vue-router'
import PcMain from "../components/main/index.vue"; //页面布局

Vue.use(Router)

// route-level code splitting

const Main = PcMain; //区分pc和手机引入不同布局

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: "/home",
        redirect: "/",
        component: Main,
        children: [
          { path: '/:page?', alias: '/', name: 'Index', component: () => import('../views/index.vue') },
        ]
      }
    ]
  })
}
