<template>
  <div class="formulario-container" role="main">
    <h1>Exemplos de Formulários</h1>
    <p>
      Esta página apresenta diferentes exemplos de uso de formulários utilizando os
      componentes da biblioteca.
    </p>

    <!-- 1. Formulário de Contato -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Formulário de Contato</div>
      </div>
      <div class="card-content p-4">
        <br-input
          label="Nome"
          placeholder="Digite seu nome completo"
          density="medium"
        ></br-input>
        <br-input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          density="medium"
        ></br-input>
        <br-textarea
          label="Mensagem"
          placeholder="Digite sua mensagem"
          density="medium"
        ></br-textarea>
        <br-button emphasis="primary" type="submit" class="mt-3">Enviar</br-button>
      </div>
    </div>

    <!-- 2. Cadastro de Veículo -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Cadastro de Veículo</div>
      </div>
      <div class="card-content p-4">
        <br-input label="Marca" placeholder="Ex: Toyota" density="medium"></br-input>
        <br-input label="Modelo" placeholder="Ex: Corolla" density="medium"></br-input>
        <br-input
          label="Ano"
          type="number"
          placeholder="Ex: 2022"
          density="medium"
        ></br-input>
        <br-select label="Combustível">
          <option>Gasolina</option>
          <option>Etanol</option>
          <option>Diesel</option>
          <option>Elétrico</option>
        </br-select>
        <br-button emphasis="primary" type="submit" class="mt-3">Salvar</br-button>
      </div>
    </div>

    <!-- 3. Preferências de Notificação -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Preferências de Notificação</div>
      </div>
      <div class="card-content p-4">
        <br-switch checked label="Notificações por Email"></br-switch>
        <br-switch label="Notificações por SMS"></br-switch>
        <br-switch label="Notificações Push"></br-switch>
        <br-button emphasis="secondary" type="submit" class="mt-3"
          >Atualizar Preferências</br-button
        >
      </div>
    </div>

    <!-- 4. Seleção de Interesses -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Seleção de Interesses</div>
      </div>
      <div class="card-content p-4">
        <br-checkbox label="Tecnologia" checked></br-checkbox>
        <br-checkbox label="Educação"></br-checkbox>
        <br-checkbox label="Esportes"></br-checkbox>
        <br-checkbox label="Viagens"></br-checkbox>
        <br-button emphasis="secondary" type="submit" class="mt-3"
          >Salvar Interesses</br-button
        >
      </div>
    </div>

    <!-- 5. Upload de Currículo -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Upload de Currículo</div>
      </div>
      <div class="card-content p-4">
        <br-upload label="Envie seu currículo" accept="application/pdf"></br-upload>
        <br-message
          class="mt-2"
          state="warning"
          is-feedback
          message="Apenas arquivos PDF são aceitos."
          show-icon
        ></br-message>
        <br-button emphasis="tertiary" type="submit" class="mt-3"
          >Enviar Currículo</br-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.formulario-container {
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
.mt-3 {
  margin-top: 1rem;
}
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
