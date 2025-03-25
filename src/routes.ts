import { createRouter, createWebHistory } from 'vue-router';
// import Cookiebar from './pages/CookiebarPage.vue';
// import Formulario from './pages/Formulario.vue';
import Home from './pages/Home.vue';
// import Signin from './pages/Signin.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      label: 'Página Inicial',
    },
  },
  // {
  //   path: '/formulario',
  //   component: Formulario,
  //   name: 'Formulário',
  //   meta: {
  //     label: 'Formulário',
  //   },
  // },
  // {
  //   path: '/sign-in',
  //   component: Signin,
  //   name: 'Sign-in',
  //   meta: {
  //     label: 'Sign-in',
  //   },
  // },
  // {
  //   path: '/cookiebar',
  //   component: Cookiebar,
  //   name: 'Cookiebar',
  //   meta: {
  //     label: 'Cookiebar',
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
