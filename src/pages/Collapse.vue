<template>
  <div class="collapse-container" role="main">
    <h1>Collapse</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-collapse&gt;</code>, que
      permite criar grupos de conteúdo expansível, ideal para listas com subitens.
    </p>

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
  </div>
</template>

<script setup lang="ts">
// Nenhuma lógica dinâmica necessária para visualização
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
