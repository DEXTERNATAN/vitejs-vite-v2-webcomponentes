<template>
  <div class="item-container" role="main">
    <h1>Item</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-item&gt;</code>, que permite
      construir elementos interativos, acessíveis e organizados com suporte a densidade,
      ícones, botões, links e agrupamentos.
    </p>

    <!-- Exemplo 1: Densidade -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Densidade (Espaçamento)</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <br-item>
            <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
            Densidade baixa
            <span slot="end">META</span>
          </br-item>
          <br-item density="medium">
            <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
            Densidade padrão
            <span slot="end">META</span>
          </br-item>
          <br-item density="small">
            <br-icon slot="start" icon-name="fa6-solid:heart-pulse" />
            Densidade alta
            <span slot="end">META</span>
          </br-item>
        </div>
      </div>
    </div>

    <!-- Exemplo 2: Conteúdo variado com texto, imagem, link e botão -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Conteúdo misto (imagem, texto, links, botão)</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-column flex-wrap justify-content-evenly mt-3 p-2">
          <br-item>
            <img src="https://picsum.photos/40/40" alt="imagem de exemplo 1" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
          </br-item>
          <span class="br-divider"></span>
          <br-item>
            Lorem ipsum <a href="javascript:void(0);">dolor</a>, sit amet consectetur
            <a href="javascript:void(0);">adipisicing</a> elit.
            <br-button shape="circle" aria-label="Interagir com item">
              <br-icon icon-name="fa6-solid:city" />
            </br-button>
          </br-item>
          <span class="br-divider"></span>
          <br-item href="javascript: void(0)">Item link</br-item>
          <span class="br-divider"></span>
          <br-item is-button>Item botão</br-item>
          <br-item id="myButton" is-button @click="handleClick">Clique aqui</br-item>
        </div>
      </div>
    </div>

    <!-- Exemplo 3: Itens interativos com checkbox e radio -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Itens com Checkbox e Radio</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3">
          <div class="col-md-5 mx-3 mb-4">
            <br-item is-interactive>
              <br-checkbox id="check-01" name="check-01" label="Rótulo do Checkbox 01" />
            </br-item>
            <br-item is-interactive>
              <br-checkbox id="check-02" name="check-02" label="Rótulo do Checkbox 02" />
            </br-item>
          </div>

          <div class="col-md-5 mx-3 mb-4">
            <br-item is-interactive>
              <br-radio id="radio-01" name="radio" label="Rótulo do Radio 01" />
            </br-item>
            <br-item is-interactive>
              <br-radio id="radio-02" name="radio" label="Rótulo do Radio 02" />
            </br-item>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 4: Item desabilitado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Item desabilitado</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <br-item class="exemplo" disabled>
            <img
              class="rounded"
              src="https://picsum.photos/40/40"
              alt="imagem de exemplo 1"
            />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
          </br-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("Item botão clicado!");
};
</script>

<style scoped>
.item-container {
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
