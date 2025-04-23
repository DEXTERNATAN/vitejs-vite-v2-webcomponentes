<template>
  <div class="collapse-container" role="main">
    <h1>Collapse</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-collapse&gt;</code>, que
      permite criar grupos de conteúdo expansível, ideal para listas com subitens.
    </p>

    <br-message
      state="success"
      message="O v-model não está funcionando corretamente no componente <br-collapse>."
      show-icon
      class="mb-4"
    />

    <!-- Exemplo 1: Collapse com accordion-group -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo com grupo de accordion</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <div class="br-list">
            <br-collapse accordion-group="group-01">
              <span slot="trigger">Rótulo 01</span>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
              </br-item>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
              </br-item>
            </br-collapse>

            <br-collapse accordion-group="group-01">
              <span slot="trigger">Rótulo 02</span>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
              </br-item>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
              </br-item>
            </br-collapse>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 2: Collapse com ícones à esquerda e slots no fim -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo com ícones à esquerda</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-list>
            <br-collapse icon-position="left">
              <span slot="trigger">Rótulo 01</span>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
                <span slot="end">META</span>
              </br-item>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
                <span slot="end">META</span>
              </br-item>
            </br-collapse>

            <br-collapse icon-position="left">
              <span slot="trigger">Rótulo 02</span>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
                <span slot="end">META</span>
              </br-item>
              <br-item>
                <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
                Sub-item
                <span slot="end">META</span>
              </br-item>
            </br-collapse>
          </br-list>
        </div>
      </div>
    </div>

    <!-- Exemplo 3: Collapse com ícones customizados para abrir e fechar -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo com ícones personalizados</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-collapse icon-to-hide="fa6-solid:minus" icon-to-show="fa6-solid:plus">
            <span slot="trigger">TÍTULO COLLAPSE</span>
            <br-item density="medium">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Densidade padrão
            </br-item>
          </br-collapse>
        </div>
      </div>
    </div>

    <!-- Exemplo 4: binding via brDidOpen / brDidClose -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo com brDidOpen / brDidClose</div>
      </div>

      <div class="card-content">
        <br-message state="info" class="mb-4">
          Usando <code>brDidOpen</code> e <code>brDidClose</code> para controlar o estado.
        </br-message>

        <br-collapse
          custom-id="collapse-vmodel-events"
          :open="isOpen"
          @brDidOpen="onDidOpen"
          @brDidClose="onDidClose"
          icon-to-show="fa6-solid:plus"
          icon-to-hide="fa6-solid:minus"
          icon-position="right"
        >
          <span slot="trigger">
            {{ isOpen ? "Clique para fechar" : "Clique para abrir" }}
          </span>
          <br-item density="medium"> Conteúdo controlado via eventos nativos. </br-item>
        </br-collapse>

        <div class="mt-3">
          <p>
            Estado atual: <strong>{{ isOpen ? "Aberto" : "Fechado" }}</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- Exemplo 5: v-model direto -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo com v-model</div>
      </div>
      <div class="card-content">
        <br-message state="info" class="mb-4">
          Vinculação direta via <code>v-model:open</code> na prop <code>open</code>.
        </br-message>

        <br-collapse
          v-model="modelOpen"
          custom-id="collapse-vmodel-direct"
          icon-to-show="fa6-solid:plus"
          icon-to-hide="fa6-solid:minus"
        >
          <span slot="trigger">
            {{ modelOpen ? "Fechar (v-model)" : "Abrir (v-model)" }}
          </span>
          <br-item density="medium">
            Conteúdo controlado diretamente por <code>modelOpen</code>.
          </br-item>
        </br-collapse>

        <div class="mt-3">
          <p>
            Estado atual: <strong>{{ modelOpen ? "Aberto" : "Fechado" }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Estado que controla o collapse
const isOpen = ref(false);

// Estado que controla o collapse via v-model
const modelOpen = ref(false);

// Handler chamado quando o collapse expande
function onDidOpen(ev: CustomEvent<{ id: string }>) {
  isOpen.value = true;
  console.log("Abriu collapse com id:", ev.detail.id);
}

// Handler chamado quando o collapse recolhe
function onDidClose(ev: CustomEvent<{ id: string }>) {
  isOpen.value = false;
  console.log("Fechou collapse com id:", ev.detail.id);
}
</script>

<style scoped>
.collapse-container {
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
