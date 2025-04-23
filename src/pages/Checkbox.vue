<template>
  <div class="checkbox-container" role="main">
    <h1>Checkbox</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-checkbox&gt;</code>, que
      permite a seleção de múltiplas opções em um formulário.
    </p>

    <br-message
      state="danger"
      message="O v-model não está funcionando corretamente no componente <br-checkbox>."
      show-icon
      class="mb-4"
    />

    <!-- Grupo 1: Checkboxes verticais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Checkboxes Verticais</div>
      </div>
      <div class="card-content">
        <div class="checkbox-group">
          <br-checkbox id="checkbox-v1" name="checkbox-v1" label="Vertical 1" />
          <br-checkbox id="checkbox-v2" name="checkbox-v2" label="Vertical 2" />
          <br-checkbox id="checkbox-v3" name="checkbox-v3" label="Vertical 3" />
        </div>
      </div>
    </div>

    <!-- Grupo 2: Checkboxes horizontais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Checkboxes Horizontais</div>
      </div>
      <div class="card-content">
        <div class="checkbox-group horizontal">
          <br-checkbox id="checkbox-h1" name="checkbox-h1" label="Horizontal 1" />
          <br-checkbox id="checkbox-h2" name="checkbox-h2" label="Horizontal 2" />
          <br-checkbox id="checkbox-h3" name="checkbox-h3" label="Horizontal 3" />
        </div>
      </div>
    </div>

    <!-- Grupo 3: Estado Indeterminado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Estado Indeterminado</div>
      </div>
      <div class="card-content">
        <div class="checkbox-group">
          <br-checkbox
            id="checkbox-ind"
            name="checkbox-ind"
            indeterminate
            label="Indeterminate"
          />
        </div>
      </div>
    </div>

    <!-- Grupo 4: Checkbox com Slot -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Checkbox com Slot</div>
      </div>
      <div class="card-content">
        <div class="checkbox-group">
          <br-checkbox id="checkbox-slot" name="checkbox-slot">
            <span> Clique para aceitar os <a href="#">Termos de Aceite</a> </span>
          </br-checkbox>
        </div>
      </div>
    </div>

    <!-- Grupo 5: Estados Visuais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Variações de Estado</div>
      </div>
      <div class="card-content">
        <div class="checkbox-group horizontal">
          <br-checkbox
            id="checkbox-checked"
            name="checkbox-checked"
            checked
            label="Marcado"
          />
          <br-checkbox
            id="checkbox-unchecked"
            name="checkbox-unchecked"
            label="Não marcado"
          />
          <br-checkbox
            id="checkbox-disabled"
            name="checkbox-disabled"
            disabled
            label="Desativado"
          />
          <br-checkbox
            id="checkbox-invalid"
            name="checkbox-invalid"
            state="invalid"
            label="Inválido"
          />
          <br-checkbox
            id="checkbox-valid"
            name="checkbox-valid"
            state="valid"
            label="Válido"
          />
        </div>
      </div>
    </div>

    <!-- Grupo 6: Hidden Label -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Label Oculta</div>
      </div>
      <div class="card-content">
        <div class="checkbox-group">
          <br-checkbox
            id="checkbox-hidden"
            name="checkbox-hidden"
            has-hidden-label
            label="Hidden Label"
          />
        </div>
      </div>
    </div>

    <!-- 7. Exemplo de v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">7. Exemplo de v-model</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Vinculação bidirecional de estado com <code>v-model</code>.
        </p>
        <br-checkbox v-model="checked" name="checkbox-vmodel" label="Ativar opção" />
        <p class="mt-3">
          Valor atual: <strong>{{ checked }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked = ref(false);
</script>

<style scoped>
.checkbox-container {
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

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
}

.checkbox-group.horizontal {
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
</style>
