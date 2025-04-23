<template>
  <div class="switch-container" role="main">
    <h1>Switch</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-switch&gt;</code>, que
      permite alternar estados binários (ativado/desativado).
    </p>

    <br-message
      show-icon
      class="mb-4"
      state="danger"
      message="V-model não está funcionando corretamente"
    />

    <!-- Grupo 1: Densidade -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Variação de Densidade</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-switch id="switch-small" density="small" checked>Densidade Alta</br-switch>
        <br-switch id="switch-medium" checked>Densidade Média (Padrão)</br-switch>
        <br-switch id="switch-large" checked density="large">Densidade Baixa</br-switch>
      </div>
    </div>

    <!-- Grupo 2: Switch com Ícone -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Com Ícone</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-switch id="switch-icon" has-icon checked>Label</br-switch>
      </div>
    </div>

    <!-- Grupo 3: Posições da Label -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Posições da Label</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <div class="col-md mt-3">
          <br-switch id="switch-default" label="Prop Label" checked></br-switch>
        </div>
        <div class="col-md mt-3">
          <br-switch id="switch-left" checked>Label na esquerda</br-switch>
        </div>
        <div class="col-md mt-3">
          <br-switch id="switch-right" checked label-position="right"
            >Label na direita</br-switch
          >
        </div>
        <div class="col-md mt-3">
          <br-switch id="switch-top" checked label-position="top"
            >Label no topo</br-switch
          >
        </div>
      </div>
    </div>

    <!-- Grupo 4: Label personalizada Ligado/Desligado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Label On/Off</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-switch id="switch-label-01" checked label-on="Ligado" label-off="Desligado"
          >Label</br-switch
        >
      </div>
    </div>

    <!-- Grupo 5: Estado Desabilitado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Desabilitado</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-switch id="switch-disabled" checked disabled>Disabled</br-switch>
      </div>
    </div>

    <!-- 6. Exemplo com v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Exemplo com v-model</div>
      </div>
      <div class="card-content d-flex flex-column align-items-center p-4">
        <br-switch v-model="isToggled" label="Ativar recurso"> Usando v-model </br-switch>

        <p class="mt-3">
          Estado atual: <strong>{{ isToggled ? "Ligado" : "Desligado" }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// estado ligado/desligado controlado por v-model
const isToggled = ref(false);
</script>

<style scoped>
.switch-container {
  padding: 20px;
}

.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f5f5f5;
  overflow: hidden;
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

.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-content-evenly {
  justify-content: space-evenly;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 3rem;
}

.p-4 {
  padding: 1.5rem;
}

.col-md {
  flex: 0 0 auto;
  width: 200px;
  text-align: center;
}
</style>
