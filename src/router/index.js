import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: HomeView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/HomePage.vue'),
        },
        {
          path: 'life',
          name: 'life',
          component: () => import('../views/life/LifeView.vue'),
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/blog/BlogView.vue'),
        },
        {
          path: 'message',
          name: 'message',
          component: () => import('../views/message/MessageView.vue'),
        },
        {
          path: 'learn',
          name: 'learn',
          component: () => import('../views/learn/LearnView.vue'),
        },
        {
          path: 'new',
          name: 'new',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/editor/NewArticle.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue'),
    },
  ],
});

export default router;
