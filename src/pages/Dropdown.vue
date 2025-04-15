<template>
  <div class="dropdown-container" role="main">
    <h1>Dropdown</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-dropdown&gt;</code>, que
      exibe uma lista de opções acionada por botões ou outros elementos interativos.
    </p>

    <!-- Exemplo 1: Botão ícone circular com card dinâmico -->
    <div class="br-card screen-preview mb-4" ref="cardContainerRef">
      <div class="screen-header">
        <div class="screen-title">Dropdown com botão circular e ícone</div>
      </div>
      <div class="card-content" ref="cardContentRef">
        <p>Clique no botão com ícone para abrir o menu.</p>
        <br-dropdown @opened="ajustarAlturaCard" @closed="resetarAlturaCard">
          <br-button slot="trigger" shape="circle">
            <br-icon icon-name="fa6-solid:ellipsis-vertical" />
          </br-button>

          <br-list ref="dropdownRef" slot="target" list-title="Ações disponíveis">
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Ação 01
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Ação 02
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Ação 03
              <span slot="end">META</span>
            </br-item>
          </br-list>
        </br-dropdown>
      </div>
    </div>

    <!-- Exemplo 2: Botão texto com ícone -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Dropdown com botão texto e ícone</div>
      </div>
      <div class="card-content">
        <br-dropdown>
          <br-button slot="trigger" size="sm">
            Ações rápidas
            <br-icon icon-name="fa6-solid:caret-down" class="ml-1" />
          </br-button>

          <br-list slot="target">
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:pen" />
              Editar
            </br-item>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:trash" />
              Excluir
            </br-item>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:share-nodes" />
              Compartilhar
            </br-item>
          </br-list>
        </br-dropdown>
      </div>
    </div>

    <!-- Exemplo 3: Dropdown com ações e preenchimento -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Dropdown com botão preenchido e ações</div>
      </div>
      <div class="card-content">
        <br-dropdown>
          <br-button slot="trigger" variant="filled" type="button">
            Mais opções
            <br-icon icon-name="fa6-solid:angle-down" class="ml-1" />
          </br-button>

          <br-list slot="target">
            <br-item @click="console.log('Visualizar clicado')">
              <br-icon slot="start" icon-name="fa6-solid:eye" />
              Visualizar
            </br-item>
            <br-item @click="console.log('Duplicar clicado')">
              <br-icon slot="start" icon-name="fa6-solid:clone" />
              Duplicar
            </br-item>
            <br-item @click="console.log('Desativar clicado')">
              <br-icon slot="start" icon-name="fa6-solid:ban" />
              Desativar
            </br-item>
          </br-list>
        </br-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

const cardContentRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const cardContainerRef = ref<HTMLElement | null>(null);

const ajustarAlturaCard = async () => {
  await nextTick();
  if (dropdownRef.value && cardContentRef.value) {
    const dropdownHeight = dropdownRef.value.scrollHeight;
    const padding = 100; // margem de segurança visual
    cardContentRef.value.style.minHeight = `${dropdownHeight + padding}px`;
  }
};

const resetarAlturaCard = () => {
  if (cardContentRef.value) {
    cardContentRef.value.style.minHeight = "auto";
  }
};
</script>

<style scoped>
.dropdown-container {
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
  height: 30vh;
}
</style>
