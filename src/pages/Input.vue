<template>
  <div class="button-container" role="main">
    <h1>Input</h1>
    <p>
      Esta página apresenta variações e usos do componente <code>&lt;br-input&gt;</code>,
      utilizado para campos de entrada de dados. Aqui demonstramos diferentes densidades,
      estados visuais, acessibilidade, ícones, feedback e estilos inline.
    </p>

    <!-- Aviso sobre erro conhecido -->
    <br-message
      state="success"
      message="Nenhuma inconsistência encontrada neste componente."
      show-icon
      class="mb-4"
    />

    <!-- 1. Variações de Densidade -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Variações de Densidade</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
          <br-input
            id="inputDensitySmall"
            label="Densidade alta"
            placeholder="Densidade alta"
            density="small"
            class="mr-2"
          />
          <br-input
            id="inputDensityMedium"
            label="Densidade padrão"
            placeholder="Densidade padrão"
            density="medium"
            class="mr-2"
          />
          <br-input
            id="inputDensityLarge"
            label="Densidade baixa"
            placeholder="Densidade baixa"
            density="large"
            class="mr-2"
          />
        </div>
      </div>
    </div>

    <!-- 2. Destaque e Ícones -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Destaque e Ícones</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
          <br-input
            id="inputHighlight"
            label="Destaque"
            placeholder="Destaque"
            is-highlight
          >
            <br-icon slot="icon" icon-name="fa-solid:user" aria-hidden="true" />
            <br-icon slot="action" icon-name="fa-solid:search" aria-hidden="true" />
          </br-input>
        </div>

        <div class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
          <br-input
            id="inputButtonRight"
            label="Com botão à direita"
            placeholder="Com botão à direita"
          >
            <br-icon
              slot="action"
              icon-name="fa-solid:search"
              height="16"
              aria-hidden="true"
            />
          </br-input>
          <br-input
            id="inputPassword"
            label="Senha"
            type="password"
            placeholder="Placeholder"
            help-text="Informe a senha com 06 caracteres e no máximo 08 caracteres"
            autocomplete="current-password"
          />
          <br-input id="inputIconOnly" label="Com ícones" placeholder="Com ícones">
            <br-icon slot="icon" icon-name="fa-solid:user" aria-hidden="true" />
          </br-input>
        </div>
      </div>
    </div>

    <!-- 3. Rótulo Inline -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Rótulo Inline</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
          <br-input
            id="inputInline"
            label="Label / Rótulo"
            placeholder="Placeholder"
            is-inline
          />
        </div>
      </div>
    </div>

    <!-- 4. Estado Desabilitado e Validações Simples -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Estados Visuais Simples</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
          <br-input
            id="inputDisabled"
            label="Disabled"
            placeholder="Disabled"
            disabled
            class="mr-2"
          />
          <br-input
            id="inputSuccess"
            label="Validação: sucesso"
            placeholder="Validação: sucesso"
            state="success"
            class="mr-2"
          />
          <br-input
            id="inputDanger"
            label="Validação: danger"
            placeholder="Validação: danger"
            state="danger"
            aria-invalid="true"
            class="mr-2"
          />
          <br-input
            id="inputInfo"
            label="Validação: info"
            placeholder="Validação: info"
            state="info"
            class="mr-2"
          />
          <br-input
            id="inputWarning"
            label="Validação: warning"
            placeholder="Validação: warning"
            state="warning"
            class="mr-2"
          />
        </div>
      </div>
    </div>

    <!-- 5. Estados Visuais com Feedback -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Estados Visuais com Feedback</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4">
          <br-input
            id="inputSuccessWithMessage"
            label="Validação: sucesso"
            placeholder="Validação: sucesso"
            class="mr-2"
            aria-describedby="inputSuccessWithMessage-feedback"
          >
            <br-message
              id="inputSuccessWithMessage-feedback"
              slot="feedback"
              state="success"
              is-feedback
              message="Mensagem de sucesso"
              show-icon
              aria-label="Mensagem de sucesso"
            />
          </br-input>
          <br-input
            id="inputDangerWithMessage"
            label="Validação: danger"
            placeholder="Validação: danger"
            class="mr-2"
            aria-describedby="inputDangerWithMessage-feedback"
            aria-invalid="true"
          >
            <br-message
              id="inputDangerWithMessage-feedback"
              slot="feedback"
              state="danger"
              is-feedback
              message="Mensagem de erro"
              show-icon
              aria-label="Mensagem de erro"
            />
          </br-input>
          <br-input
            id="inputInfoWithMessage"
            label="Validação: info"
            placeholder="Validação: info"
            class="mr-2"
            aria-describedby="inputInfoWithMessage-feedback"
          >
            <br-message
              id="inputInfoWithMessage-feedback"
              slot="feedback"
              state="info"
              is-feedback
              message="Mensagem de info"
              show-icon
              aria-label="Mensagem de info"
            />
          </br-input>
          <br-input
            id="inputWarningWithMessage"
            label="Validação: warning"
            placeholder="Validação: warning"
            class="mr-2"
            aria-describedby="inputWarningWithMessage-feedback"
          >
            <br-message
              id="inputWarningWithMessage-feedback"
              slot="feedback"
              state="warning"
              is-feedback
              message="Mensagem de warning"
              show-icon
              aria-label="Mensagem de warning"
            />
          </br-input>
        </div>
      </div>
    </div>

    <!-- 6. Integração com v-model em Vue -->
    <div class="br-card screen-preview">
      <div class="screen-header">
        <div class="screen-title">6. v-model (Vue)</div>
      </div>
      <div class="card-content">
        <br-input name="name" placeholder="Por favor, digite seu nome..." v-model="name">
        </br-input>
        <p class="mt-3">
          Selecionado: <strong>{{ name }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("Lorem ipsum");
</script>

<style scoped>
.button-container {
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
