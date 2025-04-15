// import Cookiebar from './pages/CookiebarPage.vue';
// import Formulario from './pages/Formulario.vue';
// import Signin from './pages/Signin.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Home.vue"),
    meta: {
      label: "Página Inicial",
      title: "Página Inicial - Meu Sistema",
    },
  },
  {
    path: "/graficos",
    name: "Graficos",
    component: () => import("./pages/Graficos.vue"),
    meta: {
      label: "Gráficos",
      title: "Gráficos - Dashboard",
    },
  },
  {
    path: "/telas",
    name: "Telas",
    component: () => import("./pages/Telas.vue"),
    meta: {
      label: "Telas",
      title: "Telas - Dashboard",
    },
  },
  {
    path: "/sobre",
    name: "SobreProjeto",
    component: () => import("./pages/SobreProjeto.vue"),
    meta: {
      label: "Sobre o Projeto",
      title: "Sobre o Projeto - Meu Sistema",
    },
  },
  {
    path: "/cores",
    name: "Cores",
    component: () => import("./pages/Cores.vue"),
    meta: {
      label: "Cores",
      title: "Cores - Design System",
    },
  },
  {
    path: "/formularios-validacao",
    name: "FormulariosValidacao",
    component: () => import("./pages/FormulariosValidacao.vue"),
    meta: {
      label: "Formulários de Validação",
      title: "Formulários de Validação - Componentes",
    },
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: () => import("./pages/Avatar.vue"),
    meta: {
      label: "Avatar",
      title: "Avatar - Componentes",
    },
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("./pages/Button.vue"),
    meta: {
      label: "Button",
      title: "Button - Componentes",
    },
  },
  {
    path: "/input",
    name: "Input",
    component: () => import("./pages/Input.vue"),
    meta: {
      label: "Input",
      title: "Input - Componentes",
    },
  },
  {
    path: "/select",
    name: "Select",
    component: () => import("./pages/Select.vue"),
    meta: {
      label: "Select",
      title: "Select - Componentes",
    },
  },
  {
    path: "/checkbox",
    name: "Checkbox",
    component: () => import("./pages/Checkbox.vue"),
    meta: {
      label: "Checkbox",
      title: "Checkbox - Componentes",
    },
  },
  {
    path: "/radio",
    name: "Radio",
    component: () => import("./pages/Radio.vue"),
    meta: {
      label: "Radio",
      title: "Radio - Componentes",
    },
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("./pages/Message.vue"),
    meta: {
      label: "Message",
      title: "Message - Componentes",
    },
  },
  {
    path: "/breadcrumb",
    name: "Breadcrumb",
    component: () => import("./pages/Breadcrumb.vue"),
    meta: {
      label: "Breadcrumb",
      title: "Breadcrumb - Componentes",
    },
  },
  {
    path: "/checkgroup",
    name: "Checkgroup",
    component: () => import("./pages/Checkgroup.vue"),
    meta: {
      label: "Checkgroup",
      title: "Checkgroup - Componentes",
    },
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: () => import("./pages/Collapse.vue"),
    meta: {
      label: "Collapse",
      title: "Collapse - Componentes",
    },
  },
  {
    path: "/divider",
    name: "Divider",
    component: () => import("./pages/Divider.vue"),
    meta: {
      label: "Divider",
      title: "Divider - Componentes",
    },
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: () => import("./pages/Dropdown.vue"),
    meta: {
      label: "Dropdown",
      title: "Dropdown - Componentes",
    },
  },
  {
    path: "/icon",
    name: "Icon",
    component: () => import("./pages/Icon.vue"),
    meta: {
      label: "Icon",
      title: "Icon - Componentes",
    },
  },
  {
    path: "/item",
    name: "Item",
    component: () => import("./pages/Item.vue"),
    meta: {
      label: "Item",
      title: "Item - Componentes",
    },
  },
  {
    path: "/list",
    name: "List",
    component: () => import("./pages/List.vue"),
    meta: {
      label: "List",
      title: "List - Componentes",
    },
  },
  {
    path: "/loading",
    name: "Loading",
    component: () => import("./pages/Loading.vue"),
    meta: {
      label: "Loading",
      title: "Loading - Componentes",
    },
  },
  {
    path: "/switch",
    name: "Switch",
    component: () => import("./pages/Switch.vue"),
    meta: {
      label: "Switch",
      title: "Switch - Componentes",
    },
  },
  {
    path: "/tag",
    name: "Tag",
    component: () => import("./pages/Tag.vue"),
    meta: {
      label: "Tag",
      title: "Tag - Componentes",
    },
  },
  {
    path: "/textarea",
    name: "TextArea",
    component: () => import("./pages/TextArea.vue"),
    meta: {
      label: "TextArea",
      title: "TextArea - Componentes",
    },
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("./pages/Upload.vue"),
    meta: {
      label: "Upload",
      title: "Upload - Componentes",
    },
  },
  {
    path: "/formularios",
    name: "Formulario",
    component: () => import("./pages/Formulario.vue"),
    meta: {
      label: "Formulário",
      title: "Formulário - Componentes",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
