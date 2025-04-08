import { createRouter, createWebHistory } from 'vue-router';
// import Cookiebar from './pages/CookiebarPage.vue';
// import Formulario from './pages/Formulario.vue';
import Home from './pages/Home.vue';
import SobreProjeto from "./pages/SobreProjeto.vue";
import Graficos from "./pages/Graficos.vue"
import Telas from "./pages/Telas.vue"
import FormulariosValidacao from './pages/FormulariosValidacao.vue';
import Avatar from './pages/Avatar.vue';
import Button from './pages/Button.vue';
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
  {
    path: '/graficos',
    component: Graficos,
    name: 'Graficos',
    meta: {
      label: 'Graficos',
    },
  },
  {
    path: '/telas',
    component: Telas,
    name: 'Telas',
    meta: {
      label: 'Telas',
    },
  },
  {
    path: '/sobre-projeto',
    component: SobreProjeto,
    name: 'Sobre Projeto',
    meta: {
      label: 'Sobre o Projeto',
    },
  },
  {
    path: '/formularios-validacao',
    component: FormulariosValidacao,
    name: 'Formulários de Validação',
    meta: {
      label: 'Formulários de Validação',
    },
  },
  {
    path: '/avatar',
    component: Avatar,
    name: 'Avatar',
    meta: {
      label: 'Avatar',
    },
  },
  {
    path: '/button',
    component: Button,
    name: 'Button',
    meta: {
      label: 'Button',
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
