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
        <div class="d-flex mt-3">
          <br-button emphasis="secondary" type="reset" class="mr-2">Limpar</br-button>
          <br-button emphasis="primary" type="submit" class="mr-2">Enviar</br-button>
        </div>
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
        <br-select
          show-search-icon
          label="Combustível"
          placeholder="Selecione o tipo"
          options='[
            { "label": "Gasolina", "value": "gasolina", "selected": false },
            { "label": "Etanol", "value": "etanol", "selected": false },
            { "label": "Diesel", "value": "diesel", "selected": false },
            { "label": "Elétrico", "value": "eletrico", "selected": false }
          ]'
        ></br-select>
        <div class="d-flex mt-3">
          <br-button emphasis="secondary" type="reset" class="mr-2">Limpar</br-button>
          <br-button emphasis="primary" type="submit" class="mr-2">Salvar</br-button>
        </div>
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
        <div class="d-flex mt-3">
          <br-button emphasis="secondary" type="reset" class="mr-2">Limpar</br-button>
          <br-button emphasis="primary" type="submit" class="mr-2"
            >Atualizar Preferências</br-button
          >
        </div>
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
        <div class="d-flex mt-3">
          <br-button emphasis="secondary" type="reset" class="mr-2">Limpar</br-button>
          <br-button emphasis="primary" type="submit" class="mr-2"
            >Salvar Interesses</br-button
          >
        </div>
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
        <div class="d-flex mt-3">
          <br-button emphasis="secondary" type="reset" class="mr-2">Limpar</br-button>
          <br-button emphasis="primary" type="submit" class="mr-2"
            >Enviar Currículo</br-button
          >
        </div>
      </div>
    </div>

    <!-- 6. Cadastro de Usuário -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Cadastro de Usuário</div>
      </div>
      <div class="card-content p-4">
        <!-- Formulário -->
        <br-input
          v-model="user.name"
          label="Nome"
          placeholder="Digite seu nome completo"
          density="medium"
        ></br-input>

        <br-input
          v-model="user.email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          density="medium"
        ></br-input>

        <br-input
          v-model="user.password"
          type="password"
          label="Senha"
          placeholder="Digite uma senha"
          density="medium"
        ></br-input>

        <br-input
          v-model="user.confirmPassword"
          type="password"
          label="Confirmar Senha"
          placeholder="Repita a senha"
          density="medium"
        ></br-input>

        <div class="d-flex mt-3">
          <br-button emphasis="secondary" type="reset" class="mr-2" @click="resetForm">
            Limpar
          </br-button>
          <br-button emphasis="primary" type="button" @click="submitForm">
            Cadastrar
          </br-button>
        </div>

        <!-- Mensagem de sucesso + Tabela de cadastros -->
        <div v-if="submissions.length" class="mt-4">
          <br-message
            state="success"
            message="Usuário cadastrado com sucesso!"
            show-icon
            class="mb-2"
          />

          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-2 border">Nome</th>
                <th class="p-2 border">Email</th>
                <th class="p-2 border">Senha Confere?</th>
                <th class="p-2 border">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(u, index) in submissions" :key="index" class="hover:bg-gray-50">
                <td class="p-2 border">{{ u.name }}</td>
                <td class="p-2 border">{{ u.email }}</td>
                <td class="p-2 border">
                  {{ u.password === u.confirmPassword ? "OK" : "Não confere" }}
                </td>
                <td class="p-2 border">
                  <br-button
                    @click="deleteSubmission(index)"
                    class="p-1"
                    emphasis="secondary"
                    density="medium"
                    shape="circle"
                    aria-label="Favoritar"
                  >
                    <br-icon icon-name="fa6-solid:trash" />
                  </br-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 7. Campo com v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">7. Campo com v-model</div>
      </div>
      <div class="card-content p-4">
        <!-- input ligado via v-model -->
        <br-input
          v-model="simpleField"
          label="Texto Livre"
          placeholder="Digite algo..."
          density="medium"
        ></br-input>

        <!-- feedback mostrando o valor digitado -->
        <br-message state="info" show-icon class="mt-4">
          Você digitou: <strong>{{ simpleField }}</strong>
        </br-message>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// novo estado para o exemplo 7
const simpleField = ref("");

const user = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

// array de registros
const submissions = ref<typeof user.value[]>([]);

function resetForm() {
  user.value = { name: "", email: "", password: "", confirmPassword: "" };
}

function submitForm() {
  submissions.value.push({ ...user.value });
  resetForm();
}

// remove o registro na posição informada
function deleteSubmission(index: number) {
  submissions.value.splice(index, 1);
}
</script>

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
.mr-2 {
  margin-right: 0.75rem;
}
</style>
