<template>
  <div class="breadcrumb-container" role="main">
    <h1>Breadcrumb</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-breadcrumb&gt;</code>, que
      permite a navegação hierárquica entre as páginas do sistema.
    </p>

    <!-- Exemplo de Breadcrumb -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo de Breadcrumb</div>
      </div>
      <div class="card-content">
        <br-breadcrumb :crumbs="links" home-url="/dashboard" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  { label: "Página Ancestral 01", url: "/pagina-01", target: "_self" },
  { label: "Página Ancestral 02", url: "/pagina-02", target: "_self" },
  { label: "Página Ancestral 03", url: "/pagina-03", target: "_self" },
  { label: "Página Ancestral 04", url: "/pagina-04", target: "_self" },
  { label: "Página Atual", active: true },
]);
</script>

<style scoped>
.breadcrumb-container {
  padding: 20px;
}

.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f5f5f5;
  overflow: hidden;
  margin-bottom: 1rem;
}

.screen-header {
  background-color: #1351b4;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.screen-title {
  font-size: 1.1rem;
}

.card-content {
  padding: 20px;
  background-color: white;
}
</style>
