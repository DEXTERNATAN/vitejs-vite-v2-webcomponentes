<template>
  <div class="radio-container" role="main">
    <h1>Radio</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-radio&gt;</code>, que permite
      a seleção única entre múltiplas opções em um formulário.
    </p>

    <br-message
      show-icon
      class="mb-4"
      state="danger"
      message="V-model não está funcionando corretamente"
    />

    <!-- Grupo 1: Radio Verticais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Radios Verticais</div>
      </div>
      <div class="card-content">
        <div class="radio-group" role="radiogroup" aria-label="Grupo vertical">
          <br-radio class="mb-1" name="vertical-group" value="v1" label="Vertical 1" />
          <br-radio class="mb-1" name="vertical-group" value="v2" label="Vertical 2" />
          <br-radio class="mb-1" name="vertical-group" value="v3" label="Vertical 3" />
        </div>
      </div>
    </div>

    <!-- Grupo 2: Radio Horizontais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Radios Horizontais</div>
      </div>
      <div class="card-content">
        <div
          class="radio-group horizontal"
          role="radiogroup"
          aria-label="Grupo horizontal"
        >
          <br-radio name="horizontal-group" value="h1" label="Horizontal 1" />
          <br-radio name="horizontal-group" value="h2" label="Horizontal 2" />
          <br-radio name="horizontal-group" value="h3" label="Horizontal 3" />
        </div>
      </div>
    </div>

    <!-- Grupo 3: Slotted e com label por prop -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Slotted vs Label por Prop</div>
      </div>
      <div class="card-content">
        <div class="radio-group horizontal">
          <br-radio name="slot-vs-prop" value="slot">
            <span>Label via Slot</span>
          </br-radio>
          <br-radio name="slot-vs-prop" value="prop" label="Label via Prop" />
        </div>
      </div>
    </div>

    <!-- Grupo 4: Estados Visuais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Variações de Estado</div>
      </div>
      <div class="card-content">
        <div class="radio-group horizontal">
          <br-radio name="estado" value="checked" checked label="Checked" />
          <br-radio name="estado" value="disabled" disabled label="Disabled" />
          <br-radio name="estado" value="invalid" state="invalid" label="Invalid" />
          <br-radio name="estado" value="valid" state="valid" label="Valid" />
        </div>
      </div>
    </div>

    <!-- Grupo 5: Hidden Label -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Label Oculta</div>
      </div>
      <div class="card-content">
        <div class="radio-group">
          <br-radio name="hidden-label" has-hidden-label label="Hidden Label" />
        </div>
      </div>
    </div>

    <!-- Grupo 6: Radio com Descrição e Ajuda -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Com Rótulo e Ajuda</div>
      </div>
      <div class="card-content">
        <p class="label mb-0">Rótulo</p>
        <p class="help-text">Informações adicionais</p>
        <div class="radio-group horizontal">
          <br-radio name="categoria" value="option1" label="Option 1" />
          <br-radio name="categoria" value="option2" label="Option 2" />
          <br-radio name="categoria" value="option3" label="Option 3" />
          <br-radio name="categoria" value="option4" label="Option 4" />
        </div>
      </div>
    </div>

    <!-- 7. Exemplo com v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">7. Exemplo com v-model</div>
      </div>
      <div class="card-content p-4">
        <p class="mb-2"><strong>Escolha sua opção favorita:</strong></p>
        <div
          class="radio-group horizontal"
          role="radiogroup"
          aria-label="Exemplo com v-model"
        >
          <br-radio
            name="vmodel-group"
            value="opcao1"
            label="Opção 1"
            :checked="selected === 'opcao1'"
            @change="onChange"
          />
          <br-radio
            name="vmodel-group"
            value="opcao2"
            label="Opção 2"
            :checked="selected === 'opcao2'"
            @change="onChange"
          />
          <br-radio
            name="vmodel-group"
            value="opcao3"
            label="Opção 3"
            :checked="selected === 'opcao3'"
            @change="onChange"
          />
        </div>

        <p class="mt-3">
          Opção selecionada: <strong>{{ selected }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref("opcao1");

function onChange(ev: Event) {
  // o target é o br-radio, que reflete a prop 'value'
  const radio = ev.target as HTMLInputElement;
  selected.value = radio.value;
}
</script>

<style scoped>
.radio-container {
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

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
}

.radio-group.horizontal {
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
</style>
