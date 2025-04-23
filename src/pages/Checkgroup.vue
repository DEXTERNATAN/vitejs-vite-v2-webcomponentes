<template>
  <div class="checkgroup-container" role="main">
    <h1>Checkgroup</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-checkgroup&gt;</code>, que
      permite agrupar checkboxes com controle de seleção e desmarcação em lote.
    </p>

    <br-message
      state="success"
      message="O v-model não está funcionando corretamente no componente <br-checkgroup>."
      show-icon
      class="mb-4"
    />

    <!-- Exemplo 1: seleção simples -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo de Checkgroup simples</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-checkgroup
            v-model="selectedSimple"
            label="Lista de opções"
            label-selecionado="Selecionar tudo"
            label-desselecionado="Desselecionar tudo"
          >
            <br-checkbox
              id="ckb-1"
              name="h-checkbox-1"
              value="1"
              label="Opção 1"
              class="mb-1"
            />
            <br-checkbox id="ckb-2" name="h-checkbox-2" value="2" label="Opção 2" />
          </br-checkgroup>
        </div>

        <p class="mt-3">
          Itens selecionados: <strong>{{ selectedSimple }}</strong>
        </p>
      </div>
    </div>

    <!-- Exemplo 2: aninhado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo de Checkgroup aninhado</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-checkgroup
            v-model="selectedNested"
            label="Grupo Principal"
            label-selecionado="Selecionar tudo"
            label-desselecionado="Desselecionar tudo"
          >
            <br-checkbox id="p2-f1" name="p2-f1" value="1" label="Opção 1" class="mb-1" />
            <br-checkbox id="p2-f2" name="p2-f2" value="2" label="Opção 2" class="mb-1" />

            <br-checkgroup
              v-model="selectedNested"
              label="Selecionar grupo"
              label-selecionado="Selecionar grupo"
              label-desselecionado="Desselecionar grupo"
            >
              <br-checkbox
                id="p2-f3-1"
                name="p2-f3-1"
                value="3"
                label="Opção 3"
                class="mb-1"
              />
              <br-checkbox
                id="p2-f3-2"
                name="p2-f3-2"
                value="4"
                label="Opção 4"
                class="mb-1"
              />
            </br-checkgroup>
          </br-checkgroup>
        </div>

        <p class="mt-3">
          Itens selecionados: <strong>{{ selectedNested }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// armazena os valores (value) dos checkboxes selecionados
const selectedSimple = ref<string[]>([]);
const selectedNested = ref<string[]>([]);
</script>

<style scoped>
.checkgroup-container {
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
