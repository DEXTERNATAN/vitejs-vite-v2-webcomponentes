<template>
  <nav class="menu-body" role="tree">
    <!-- Renderizando dinamicamente cada seção (folder) -->
    <div v-for="folder in menuItems" :key="folder.id" class="menu-folder">
      <!-- Cabeçalho da pasta: ao clicar, alterna a exibição dos itens -->
      <a
        href="#"
        class="menu-item"
        role="treeitem"
        :aria-expanded="folder.expanded.toString()"
        @click.prevent="toggleFolder(folder.id)"
      >
        <span class="icon">
          <i :class="folder.icon" aria-hidden="true"></i>
        </span>
        <span class="content">{{ folder.name }}</span>
      </a>
      <!-- Lista dos itens dessa pasta (exibida quando expanded é true) -->
      <ul v-show="folder.expanded" class="list-hide" role="group">
        <li v-for="child in folder.children" :key="child.id">
          <a
            href="#"
            class="menu-item"
            role="treeitem"
            :class="{ active: itemAtivo === child.id }"
            @click.prevent="navigate(child.url, child.id)"
          >
            <span class="icon">
              <i :class="child.icon" aria-hidden="true"></i>
            </span>
            <span class="content">{{ child.name }}</span>
          </a>
          <!-- Caso o item possua subitens, renderiza uma lista interna -->
          <ul v-if="child.children" role="group">
            <li v-for="sub in child.children" :key="sub.id">
              <a
                class="menu-item"
                href="#"
                role="treeitem"
                @click="navigate(sub.url, sub.id)"
              >
                <span class="icon">
                  <i :class="sub.icon" aria-hidden="true"></i>
                </span>
                <span class="content">{{ sub.name }}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Link complementar fora dos grupos principais -->
    <a
      class="menu-item divider"
      href="#"
      role="treeitem"
      @click="navigate(project.url, 'project')"
    >
      <span class="icon">
        <i :class="project.icon" aria-hidden="true"></i>
      </span>
      <span class="content">{{ project.name }}</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const itemAtivo = ref<string | null>(null);

/*
  Estrutura de dados do menu revisada:
  - O folder "Todos os Componentes" não repete seu próprio título na lista de filhos.
  - Cada item possui um id único (inclusive subitens) para uso correto das keys.
  - Itens sem subitens possuem a propriedade "url" para navegação, enquanto itens com subitens usam a propriedade "expanded" para controlar a exibição.
*/
const menuItems = ref([
  {
    id: "1",
    name: "Componentes",
    icon: "fas fa-puzzle-piece",
    expanded: false,
    children: [
      {
        id: "1-1",
        name: "Avatar",
        icon: "fas fa-user",
        url: "/avatar",
      },
      {
        id: "1-2",
        name: "Button",
        icon: "fas fa-hand-pointer",
        expanded: false,
        url: "/button",
        children: [
          {
            id: "1-2-1",
            name: "Breadcrumb",
            icon: "fas fa-book",
            url: "/breadcrumb",
          },
          {
            id: "1-2-2",
            name: "Checkbox",
            icon: "fas fa-check-square",
            url: "/checkbox",
          },
          {
            id: "1-2-3",
            name: "Checkgroup",
            icon: "fas fa-toggle-on",
            url: "/checkgroup",
          },
        ],
      },
      {
        id: "1-3",
        name: "Collapse",
        icon: "fas fa-angle-down",
        url: "/collapse",
      },
      {
        id: "1-4",
        name: "Divider",
        icon: "fas fa-minus",
        url: "/divider",
      },
      {
        id: "1-5",
        name: "Dropdown",
        icon: "fas fa-caret-down",
        url: "/dropdown",
      },
      {
        id: "1-6",
        name: "Icon",
        icon: "fas fa-icons",
        url: "/icon",
      },
      {
        id: "1-7",
        name: "Input",
        icon: "fas fa-keyboard",
        url: "/input",
      },
      {
        id: "1-8",
        name: "Item",
        icon: "fas fa-list",
        url: "/item",
      },
      {
        id: "1-9",
        name: "List",
        icon: "fas fa-list-alt",
        url: "/list",
      },
      {
        id: "1-10",
        name: "Loading",
        icon: "fas fa-spinner",
        url: "/loading",
      },
      {
        id: "1-11",
        name: "Message",
        icon: "fas fa-envelope",
        url: "/message",
      },
      {
        id: "1-12",
        name: "Radio",
        icon: "fas fa-dot-circle",
        url: "/radio",
      },
      {
        id: "1-13",
        name: "Select",
        icon: "fas fa-caret-square-down",
        url: "/select",
      },
      {
        id: "1-14",
        name: "Switch",
        icon: "fas fa-toggle-on",
        url: "/switch",
      },
      {
        id: "1-15",
        name: "Tag",
        icon: "fas fa-tag",
        url: "/tag",
      },
      {
        id: "1-16",
        name: "Textarea",
        icon: "fas fa-pencil-alt",
        url: "/textarea",
      },
      {
        id: "1-17",
        name: "Upload",
        icon: "fas fa-upload",
        url: "/upload",
      },
      {
        id: "1-18",
        name: "Formulários",
        icon: "fas fa-edit",
        url: "/formularios",
      },
    ],
  },
  {
    id: "2",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt",
    expanded: false,
    children: [
      {
        id: "2-1",
        name: "Gráficos",
        icon: "fas fa-chart-line",
        url: "/graficos",
      },
      {
        id: "2-2",
        name: "Telas",
        icon: "fas fa-desktop",
        url: "/telas",
      },
      {
        id: "2-3",
        name: "Formulários validação",
        icon: "fas fa-check-circle",
        url: "/formularios-validacao",
      },
    ],
  },
]);

// Link complementar para "Sobre este projeto"
const project = ref({
  name: "Sobre este projeto",
  icon: "fas fa-info-circle",
  url: "/sobre-projeto",
});

/*
  Função para alternar o estado (expand/collapse) das seções.
*/
function toggleFolder(id: string) {
  const folder = menuItems.value.find((item) => item.id === id);
  if (folder) {
    folder.expanded = !folder.expanded;
  }
}

/*
  Função para navegação usando Vue Router.
*/
function navigate(url: string, id: string) {
  itemAtivo.value = id;
  router.push(url);
}
</script>

<style scoped>
.menu-item.active {
  font-weight: bold;
  background-color: #e7f1ff;
}
</style>
