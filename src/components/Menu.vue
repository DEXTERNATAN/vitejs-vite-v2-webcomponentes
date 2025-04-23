<template>
  <div class="menu-body" role="tree">
    <!-- Renderizando dinamicamente cada seção (folder ou item simples) -->
    <div
      v-for="folder in menuItems"
      :key="folder.id"
      class="menu-folder drop-menu"
      :class="{ active: folder.expanded }"
    >
      <!-- Item sem submenu -->
      <a
        v-if="!folder.children || folder.children.length === 0"
        href="#"
        class="menu-item"
        role="treeitem"
        tabindex="0"
        aria-level="1"
        :aria-current="itemAtivo === folder.id ? 'true' : null"
        :class="{ active: itemAtivo === folder.id && !folder.expanded }"
        @click.prevent="navigate(folder.url, folder.id)"
        @keydown.enter.space.prevent="navigate(folder.url, folder.id)"
      >
        <span class="icon">
          <i :class="folder.icon" aria-hidden="true"></i>
        </span>
        <span class="content">{{ folder.name }}</span>
      </a>

      <!-- Item com submenu (pasta) -->
      <template v-else>
        <a
          href="#"
          class="menu-item"
          role="treeitem"
          tabindex="0"
          :aria-expanded="folder.expanded.toString()"
          aria-level="1"
          :class="{ active: itemAtivo === folder.id && !folder.expanded }"
          @click="toggleFolder(folder.id)"
          @keydown.enter.space.prevent="toggleFolder(folder.id)"
        >
          <span class="icon">
            <i :class="folder.icon" aria-hidden="true"></i>
          </span>
          <span class="content">{{ folder.name }}</span>
          <span class="support">
            <i class="fas fa-chevron-down" aria-hidden="true"></i>
          </span>
        </a>

        <ul
          v-show="folder.expanded"
          class="list-hide"
          role="group"
          :aria-hidden="!folder.expanded"
        >
          <li v-for="child in folder.children" :key="child.id">
            <a
              href="#"
              class="menu-item"
              role="treeitem"
              tabindex="0"
              aria-level="2"
              :aria-current="itemAtivo === child.id ? 'true' : null"
              :class="{ active: itemAtivo === child.id }"
              @click.prevent="navigate(child.url, child.id)"
              @keydown.enter.space.prevent="navigate(child.url, child.id)"
            >
              <span class="icon">
                <i :class="child.icon" aria-hidden="true"></i>
              </span>
              <span class="content">{{ child.name }}</span>
            </a>

            <!-- Subitens -->
            <ul v-if="child.children" role="group">
              <li v-for="sub in child.children" :key="sub.id">
                <a
                  class="menu-item"
                  href="#"
                  role="treeitem"
                  tabindex="0"
                  aria-level="3"
                  :aria-current="itemAtivo === sub.id ? 'true' : null"
                  :class="{ active: itemAtivo === sub.id }"
                  @click.prevent="navigate(sub.url, sub.id)"
                  @keydown.enter.space.prevent="navigate(sub.url, sub.id)"
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
      </template>
    </div>

    <!-- Link complementar fora dos grupos principais -->
    <a
      class="menu-item divider"
      href="#"
      role="treeitem"
      tabindex="0"
      aria-level="1"
      :aria-current="itemAtivo === 'project' ? 'true' : null"
      :class="{ active: itemAtivo === 'project' }"
      @click.prevent="navigate(project.url, 'project')"
      @keydown.enter.space.prevent="navigate(project.url, 'project')"
    >
      <span class="icon">
        <i :class="project.icon" aria-hidden="true"></i>
      </span>
      <span class="content">{{ project.name }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const itemAtivo = ref<string | null>(null);

// Ordem reestruturada seguindo a hierarquia de informação:
// 1. Home
// 2. Dashboard
// 3. Componentes
// 4. Cores
const menuItems = ref([
  {
    id: "home",
    name: "Home",
    icon: "fas fa-home",
    url: "/",
  },
  {
    id: "2",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt",
    expanded: false,
    children: [
      {
        id: "2-3",
        name: "Formulários de Validação",
        icon: "fas fa-check-circle",
        url: "/formularios-validacao",
      },
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
    ],
  },
  {
    id: "1",
    name: "Componentes",
    icon: "fas fa-puzzle-piece",
    expanded: false,
    children: [
      { id: "1-1", name: "Avatar", icon: "fas fa-user", url: "/avatar" },
      { id: "1-8", name: "Breadcrumb", icon: "fas fa-book", url: "/breadcrumb" },
      { id: "1-2", name: "Button", icon: "fas fa-hand-pointer", url: "/button" },
      { id: "1-5", name: "Checkbox", icon: "fas fa-check-square", url: "/checkbox" },
      { id: "1-9", name: "Checkgroup", icon: "fas fa-toggle-on", url: "/checkgroup" },
      { id: "1-10", name: "Collapse", icon: "fas fa-angle-down", url: "/collapse" },
      { id: "1-11", name: "Divider", icon: "fas fa-minus", url: "/divider" },
      { id: "1-12", name: "Dropdown", icon: "fas fa-caret-down", url: "/dropdown" },
      { id: "1-21", name: "Formulário", icon: "fas fa-edit", url: "/formularios" },
      { id: "1-13", name: "Icon", icon: "fas fa-icons", url: "/icon" },
      { id: "1-3", name: "Input", icon: "fas fa-keyboard", url: "/input" },
      { id: "1-14", name: "Item", icon: "fas fa-list", url: "/item" },
      { id: "1-15", name: "List", icon: "fas fa-list-alt", url: "/list" },
      { id: "1-16", name: "Loading", icon: "fas fa-spinner", url: "/loading" },
      { id: "1-7", name: "Message", icon: "fas fa-envelope", url: "/message" },
      { id: "1-6", name: "Radio", icon: "fas fa-dot-circle", url: "/radio" },
      { id: "1-4", name: "Select", icon: "fas fa-caret-square-down", url: "/select" },
      { id: "1-17", name: "Switch", icon: "fas fa-toggle-on", url: "/switch" },
      { id: "1-18", name: "Tag", icon: "fas fa-tag", url: "/tag" },
      { id: "1-19", name: "TextArea", icon: "fas fa-pencil-alt", url: "/textarea" },
      { id: "1-20", name: "Upload", icon: "fas fa-upload", url: "/upload" },
    ],
  },
  {
    id: "cores",
    name: "Cores",
    icon: "fas fa-palette",
    url: "/cores",
  },
]);

const project = ref({
  name: "Sobre o Projeto",
  icon: "fas fa-info-circle",
  url: "/sobre",
});

function toggleFolder(id: string) {
  menuItems.value.forEach((item) => {
    item.expanded = item.id === id ? !item.expanded : false;
  });
}

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

.menu-folder.active {
  background-color: rgba(19, 81, 180, 0.05);
}

.menu-folder.has-children > .menu-item {
  position: relative;
}

.menu-folder.has-children > .menu-item::after {
  content: "";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  border: solid #1351b4;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transition: transform 0.3s ease;
}

.menu-folder.active.has-children > .menu-item::after {
  transform: translateY(-50%) rotate(45deg);
}

.menu-folder.active > .menu-item {
  font-weight: bold;
}
</style>
