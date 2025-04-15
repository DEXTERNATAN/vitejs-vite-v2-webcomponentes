// import Cookiebar from './pages/CookiebarPage.vue';
// import Formulario from './pages/Formulario.vue';
// import Signin from './pages/Signin.vue';
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SobreProjeto from "./pages/SobreProjeto.vue";
import Graficos from "./pages/Graficos.vue";
import Telas from "./pages/Telas.vue";
import FormulariosValidacao from "./pages/FormulariosValidacao.vue";
import Avatar from "./pages/Avatar.vue";
import Button from "./pages/Button.vue";
import Input from "./pages/Input.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      label: "Página Inicial",
      title: "Página Inicial - Meu Sistema",
    },
  },
  {
    path: "/graficos",
    component: Graficos,
    name: "Graficos",
    meta: {
      label: "Gráficos",
      title: "Gráficos - Dashboard",
    },
  },
  {
    path: "/telas",
    component: Telas,
    name: "Telas",
    meta: {
      label: "Telas",
      title: "Telas - Dashboard",
    },
  },
  {
    path: "/sobre-projeto",
    component: SobreProjeto,
    name: "Sobre Projeto",
    meta: {
      label: "Sobre o Projeto",
      title: "Sobre o Projeto - Meu Sistema",
    },
  },
  {
    path: "/formularios-validacao",
    component: FormulariosValidacao,
    name: "Formulários de Validação",
    meta: {
      label: "Formulários de Validação",
      title: "Formulários de Validação - Componentes",
    },
  },
  {
    path: "/avatar",
    component: Avatar,
    name: "Avatar",
    meta: {
      label: "Avatar",
      title: "Avatar - Componentes",
    },
  },
  {
    path: "/button",
    component: Button,
    name: "Button",
    meta: {
      label: "Button",
      title: "Button - Componentes",
    },
  },
  {
    path: "/input",
    component: Input,
    name: "Input",
    meta: {
      label: "Input",
      title: "Input - Componentes",
    },
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('./pages/Select.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('./pages/Checkbox.vue')
  },
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('./pages/Radio.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('./pages/Message.vue')
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: () => import('./pages/Breadcrumb.vue'),
    meta: {
      label: 'Breadcrumb',
      title: 'Breadcrumb - Componentes',
    },
  },
  {
    path: '/checkgroup',
    name: 'Checkgroup',
    component: () => import('./pages/Checkgroup.vue'),
    meta: {
      label: 'Checkgroup',
      title: 'Checkgroup - Componentes',
    },
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: () => import('./pages/Collapse.vue'),
    meta: {
      label: 'Collapse',
      title: 'Collapse - Componentes',
    },
  },
  {
    path: '/divider',
    name: 'Divider',
    component: () => import('./pages/Divider.vue'),
    meta: {
      label: 'Divider',
      title: 'Divider - Componentes',
    },
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: () => import('./pages/Dropdown.vue'),
    meta: {
      label: 'Dropdown',
      title: 'Dropdown - Componentes',
    },
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('./pages/Icon.vue'),
    meta: {
      label: 'Icon',
      title: 'Icon - Componentes',
    },
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('./pages/Item.vue'),
    meta: {
      label: 'Item',
      title: 'Item - Componentes',
    },
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('./pages/List.vue'),
    meta: {
      label: 'List',
      title: 'List - Componentes',
    },
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('./pages/Loading.vue'),
    meta: {
      label: 'Loading',
      title: 'Loading - Componentes',
    },
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('./pages/Switch.vue'),
    meta: {
      label: 'Switch',
      title: 'Switch - Componentes',
    },
  },
  {
    path: '/tag',
    name: 'Tag',
    component: () => import('./pages/Tag.vue'),
    meta: {
      label: 'Tag',
      title: 'Tag - Componentes',
    },
  },
  {
    path: '/textarea',
    name: 'TextArea',
    component: () => import('./pages/TextArea.vue'),
    meta: {
      label: 'TextArea',
      title: 'TextArea - Componentes',
    },
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('./pages/Upload.vue'),
    meta: {
      label: 'Upload',
      title: 'Upload - Componentes',
    },
  },
  {
    path: '/formularios',
    name: 'Formulario',
    component: () => import('./pages/Formulario.vue'),
    meta: {
      label: 'Formulario',
      title: 'Formulario - Componentes',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
