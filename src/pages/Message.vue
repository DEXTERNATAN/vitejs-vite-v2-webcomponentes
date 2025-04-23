<template>
  <div class="message-container" role="main">
    <h1>Exemplos de Message</h1>
    <p>
      Esta página demonstra diferentes exemplos de uso do componente
      <code>&lt;br-message&gt;</code>, com variações de estado, feedback e comportamento.
    </p>

    <br-message
      state="success"
      message="Nenhuma inconsistência encontrada neste componente."
      show-icon
      class="mb-4"
    />

    <!-- 1. Mensagens de Feedback -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Mensagens de Feedback</div>
      </div>
      <div class="card-content p-4">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
          <div class="mb-3">
            <br-message
              state="success"
              is-feedback
              message="Campo correto."
              show-icon
              aria-label="Campo correto"
            ></br-message>
          </div>
          <div class="mb-3">
            <br-message
              state="warning"
              is-feedback
              message="A tecla CAPS-LOCK está ativada."
              show-icon
              aria-label="Aviso: CAPS-LOCK ativado"
            ></br-message>
          </div>
          <div class="mb-3">
            <br-message
              state="danger"
              is-feedback
              message="O CPF deve conter apenas dígitos."
              show-icon
              aria-label="Erro: CPF inválido"
            ></br-message>
          </div>
          <div class="mb-3">
            <br-message
              state="info"
              is-feedback
              show-icon
              aria-label="Informação sobre formatos de arquivo"
            >
              <span>
                Os arquivos devem ser no formato PNG, JPG, PDF e ter no máximo 1 GB.
              </span>
            </br-message>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Mensagens Inline e Auto-Remove -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Inline &amp; Auto-Remove</div>
      </div>
      <div class="card-content p-4">
        <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
          <div class="mb-3">
            <br-message
              state="success"
              message-title="Success!"
              message="Campo correto."
              is-inline
              is-closable
              auto-remove
              show-icon
              aria-label="Success: Campo correto"
            ></br-message>
          </div>
          <div class="mb-3">
            <br-message
              state="warning"
              message-title="Warning!"
              is-inline
              message="This is a warning message."
              is-closable
              auto-remove
              show-icon
              aria-label="Warning: mensagem de aviso"
            ></br-message>
          </div>
          <div class="mb-3">
            <br-message
              state="danger"
              message-title="Error!"
              is-inline
              message="Something went wrong."
              is-closable
              auto-remove
              show-icon
              aria-label="Error: algo deu errado"
            ></br-message>
          </div>
          <div class="mb-3">
            <br-message
              message-title="Informação."
              is-inline
              is-closable
              auto-remove
              show-icon
              aria-label="Informação adicional"
            >
              <span>
                Seus dados só serão salvos após o preenchimento do primeiro campo do
                formulário.
              </span>
            </br-message>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Exemplo com v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Exemplo com v-model</div>
      </div>
      <div class="card-content p-4">
        <!-- Input controlando o conteúdo da mensagem -->
        <br-input
          v-model="messageText"
          label="Texto da Mensagem"
          placeholder="Digite algo aqui..."
          density="medium"
        ></br-input>

        <div class="mt-3">
          <br-message
            state="info"
            :message="messageText || 'Nenhuma mensagem definida.'"
            show-icon
            aria-label="Mensagem dinâmica"
          ></br-message>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// estado reativo para demo de v-model
const messageText = ref("");
</script>

<style scoped>
.message-container {
  padding: 20px;
}

.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f5f5f5;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.screen-header {
  background-color: #1351b4;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  display: flex;
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
