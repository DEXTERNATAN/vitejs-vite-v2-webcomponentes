<template>
  <div class="select-container" role="main">
    <h1>Select</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-select&gt;</code>, que
      permite a seleção de opções em um menu suspenso.
    </p>

    <!-- Exemplo de Select Simples -->
    <div class="br-card screen-preview">
      <div class="screen-header">
        <div class="screen-title">1. Select Simples</div>
      </div>
      <div class="card-content">
        <div class="d-flex justify-content-evenly mt-5 p-4">
          <br-select
            show-search-icon
            label="Label"
            placeholder="Selecione uma opção"
            options='[
              { "label": "Opção 1", "value": "1", "selected": false },
              { "label": "Opção 2", "value": "2", "selected": false },
              { "label": "Opção 3", "value": "3", "selected": false }
            ]'
          ></br-select>
        </div>
      </div>
    </div>

    <!-- Select com ícone de busca -->
    <div class="br-card screen-preview">
      <div class="screen-header">
        <div class="screen-title">2. Select com Busca</div>
      </div>
      <div class="card-content">
        <div class="d-flex justify-content-evenly mt-5 p-4">
          <br-select
            show-search-icon
            label="Label"
            placeholder="Selecione uma opção"
            options='[
              { "label": "Opção 1", "value": "1", "selected": false },
              { "label": "Opção 2", "value": "2", "selected": false },
              { "label": "Opção 3", "value": "3", "selected": false }
            ]'
          ></br-select>
        </div>
      </div>
    </div>

    <!-- Select Múltiplo com Marcar Todos -->
    <div class="br-card screen-preview">
      <div class="screen-header">
        <div class="screen-title">3. Select Multiple</div>
      </div>
      <div class="card-content">
        <div class="d-flex justify-content-evenly mt-5 p-4">
          <br-select
            label="Tecnologias favoritas"
            :options="multiSelectOptions"
            select-all-label="Selecionar todas"
            unselect-all-label="Remover todas"
            is-multiple
            show-search-icon
            placeholder="Selecione tecnologias"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const multiSelectOptions = [
  { label: "Node.js", value: "node", selected: false },
  { label: "NestJS", value: "nestjs", selected: true },
  { label: "Fastify", value: "fastify", selected: false },
];
</script>

<style scoped>
.select-container {
  padding: 20px;
}

.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f5f5f5;
  /* overflow: hidden; <-- Removido */
  margin-bottom: 1rem;
  position: relative;
  display: block;
  width: 100%;
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
