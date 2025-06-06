<template>
  <div class="list-container" role="main">
    <h1>List</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-list&gt;</code>, utilizado
      para organizar visualmente agrupamentos de itens com suporte a densidade, layout
      horizontal, títulos, divisores e interações.
    </p>

    <br-message
      state="success"
      message="Nenhuma inconsistência encontrada neste componente."
      show-icon
      class="mb-4"
    />

    <!-- Exemplo 1: Densidades -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Densidade dos itens</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 gap-4">
          <!-- Densidade alta -->
          <br-list role="list" header="Densidade alta (padrão)">
            <br-item role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
          </br-list>

          <!-- Densidade média -->
          <br-list role="list" header="Densidade média">
            <br-item density="middle" role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item density="middle" role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item density="middle" role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
          </br-list>

          <!-- Densidade baixa -->
          <br-list role="list" header="Densidade baixa">
            <br-item density="small" role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item density="small" role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item density="small" role="listitem">
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
          </br-list>
        </div>
      </div>
    </div>

    <!-- Exemplo 2: Listas agrupadas -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Listas agrupadas</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 gap-4">
          <!-- Por rótulo -->
          <br-list list-title="Por rótulo">
            <br-item>RÓTULO 01</br-item>
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
            <br-item>RÓTULO 02</br-item>
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
          </br-list>

          <!-- Por separador -->
          <br-list list-title="Por separador">
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
            <span class="br-divider"></span>
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
          </br-list>
        </div>
      </div>
    </div>

    <!-- Exemplo 3: Lista horizontal -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Lista horizontal</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-list list-title="Título (opcional)" is-horizontal>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
            <span class="br-divider"></span>
            <br-item>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <span slot="end">META</span>
            </br-item>
          </br-list>
        </div>
      </div>
    </div>

    <!-- Exemplo 4: Lista com checkboxes -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Itens selecionáveis</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-list list-title="Itens selecionáveis">
            <br-item is-interactive>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <br-checkbox
                slot="end"
                class="mb-1"
                id="check-01"
                name="check-01"
                label="Rótulo do Checkbox 01"
                has-hidden-label
              />
            </br-item>
            <span class="br-divider"></span>
            <br-item is-interactive>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <br-checkbox
                slot="end"
                class="mb-1"
                id="check-02"
                name="check-02"
                label="Rótulo do Checkbox 02"
                has-hidden-label
              />
            </br-item>
            <span class="br-divider"></span>
            <br-item is-interactive>
              <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
              Texto principal
              <br-checkbox
                slot="end"
                class="mb-1"
                id="check-03"
                name="check-03"
                label="Rótulo do Checkbox 03"
                has-hidden-label
              />
            </br-item>
          </br-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nenhuma lógica reativa é necessária para esta página
</script>

<style scoped>
.list-container {
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
