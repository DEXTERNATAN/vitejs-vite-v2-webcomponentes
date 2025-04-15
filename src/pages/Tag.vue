<template>
  <div class="tag-container" role="main">
    <h1>Tag</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-tag&gt;</code>, que permite
      destacar informações de forma visual com diferentes estilos, interações e seleções.
    </p>

    <!-- Grupo 1: Texto e Ícone, diferentes densidades -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Com texto e ícone</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-tag
          label="Texto e Ícone"
          color="bg-orange-vivid-50"
          icon-name="fa-solid:car"
          density="small"
        ></br-tag>
        <br-tag label="Texto" color="bg-green-warm-vivid-50" density="large"></br-tag>
        <br-tag label="Jhon Doe" color="bg-indigo-warm-vivid-50" density="large"></br-tag>
      </div>
    </div>

    <!-- Grupo 2: Notificações arredondadas -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Indicadores arredondados</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-tag label="1" color="bg-danger" shape="rounded"></br-tag>
        <br-tag label="10" color="bg-danger" shape="rounded"></br-tag>
        <br-tag label="130" color="bg-danger" shape="rounded"></br-tag>
        <br-tag label="999+" color="bg-danger" shape="rounded"></br-tag>
      </div>
    </div>

    <!-- Grupo 3: Níveis de prioridade com densidade -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Prioridades</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-tag label="Alta" color="bg-orange-vivid-50" density="small"></br-tag>
        <br-tag label="Média" color="bg-green-warm-vivid-50" density="medium"></br-tag>
        <br-tag label="Baixa" color="bg-indigo-warm-vivid-50" density="large"></br-tag>
      </div>
    </div>

    <!-- Grupo 4: Ícones circulares -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Apenas ícones circulares</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-tag
          color="bg-orange-vivid-50"
          icon-name="fa-solid:car"
          shape="circle"
        ></br-tag>
        <br-tag
          color="bg-green-warm-vivid-50"
          icon-name="fa-solid:search"
          shape="circle"
        ></br-tag>
        <br-tag
          color="bg-indigo-warm-vivid-50"
          icon-name="fa-solid:user"
          shape="circle"
        ></br-tag>
      </div>
    </div>

    <!-- Grupo 5: Interativos -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Interativos</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-tag label="Carro 1" icon-name="fa-solid:car" interaction></br-tag>
        <br-tag label="Carro 2" icon-name="fa-solid:car" interaction></br-tag>
        <br-tag label="Carro 3" icon-name="fa-solid:car" interaction></br-tag>
      </div>
    </div>

    <!-- Grupo 6: Seleção única -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Seleção única</div>
      </div>
      <div
        class="card-content d-flex align-items-center gap-4 flex-wrap justify-content-evenly"
      >
        <br-tag
          label="Carro"
          name="vehicle"
          icon-name="fa-solid:car"
          interaction-select
        ></br-tag>
        <br-tag
          label="Barco"
          name="vehicle"
          icon-name="fa-solid:ship"
          interaction-select
          selected
        ></br-tag>
      </div>
    </div>

    <!-- Grupo 7: Seleção múltipla -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">7. Seleção múltipla</div>
      </div>
      <div
        class="card-content d-flex align-items-center gap-4 flex-wrap justify-content-evenly"
      >
        <br-tag
          multiple
          label="Bicicleta"
          name="multipla"
          icon-name="fa-solid:bicycle"
          interaction-select
        ></br-tag>
        <br-tag
          multiple
          label="Barco"
          name="multipla"
          icon-name="fa-solid:ship"
          interaction-select
          selected
        ></br-tag>
        <br-tag
          multiple
          label="Carro"
          name="multipla"
          icon-name="fa-solid:car"
          interaction-select
          selected
          disabled
        ></br-tag>
      </div>
    </div>

    <!-- Grupo 8: Estados de Status -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">8. Status</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly">
        <br-tag color="bg-danger" shape="rounded" density="large"></br-tag>
        <br-tag color="bg-warning" shape="rounded" density="medium"></br-tag>
        <br-tag color="bg-success" shape="rounded" density="small"></br-tag>
        <br-tag
          label="Offline"
          color="bg-danger"
          shape="rounded"
          density="large"
          status
        ></br-tag>
        <br-tag
          label="Ausente"
          color="bg-warning"
          shape="rounded"
          density="medium"
          status
        ></br-tag>
        <br-tag
          label="Online"
          color="bg-success"
          shape="rounded"
          density="small"
          status
        ></br-tag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.tag-container {
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

.align-items-center {
  align-items: center;
}

.gap-4 {
  gap: 1.5rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
