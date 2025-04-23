<template>
  <div class="formularios-validacao-container">
    <h1 class="mb-4">Formulários com Validação</h1>

    <!-- Seção de Formulários com Validação -->
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="br-card">
          <div class="card-header">
            <h3>Validação de Formulários</h3>
          </div>
          <div class="card-content">
            <p class="mb-4">
              Esta página demonstra diferentes técnicas de validação de formulários
              utilizando o Design System BR. Os exemplos abaixo mostram como implementar
              validações em tempo real, feedback visual e mensagens de erro.
            </p>

            <!-- Formulário de Cadastro com Validação -->
            <div class="form-section mb-5">
              <h4 class="mb-3">Cadastro de Usuário</h4>
              <form @submit.prevent="validarFormularioCadastro" class="form-validacao">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="br-input">
                      <br-input
                        :state="erros.nome ? 'danger' : undefined"
                        label="Nome Completo *"
                        id="nome"
                        v-model="formulario.nome"
                        type="text"
                        placeholder="Digite seu nome completo"
                        @blur="validarCampo('nome')"
                      >
                        <br-message
                          slot="feedback"
                          v-if="erros.nome"
                          state="danger"
                          is-feedback
                          :message="erros.nome"
                          show-icon
                          :aria-label="erros.nome"
                        />
                      </br-input>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.email }">
                      <br-input
                        :state="erros.termos ? 'danger' : undefined"
                        label="E-mail *"
                        id="email"
                        v-model="formulario.email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        @blur="validarCampo('email')"
                      />
                      <br-message
                        v-if="erros.email"
                        state="danger"
                        is-feedback
                        :message="erros.email"
                        show-icon
                        :aria-label="erros.email"
                      ></br-message>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.cpf }">
                      <br-input
                        label="CPF *"
                        id="cpf"
                        v-model="formulario.cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        @blur="validarCampo('cpf')"
                      />
                      <br-message
                        v-if="erros.cpf"
                        state="danger"
                        is-feedback
                        :message="erros.cpf"
                        show-icon
                        :aria-label="erros.cpf"
                      ></br-message>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.telefone }">
                      <br-input
                        label="Telefone *"
                        id="telefone"
                        v-model="formulario.telefone"
                        type="text"
                        placeholder="(00) 00000-0000"
                        @blur="validarCampo('telefone')"
                      />
                      <br-message
                        v-if="erros.telefone"
                        state="danger"
                        is-feedback
                        :message="erros.telefone"
                        show-icon
                        :aria-label="erros.telefone"
                      ></br-message>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="br-select" :class="{ 'is-invalid': erros.genero }">
                      <br-select
                        id="genero"
                        label="Gênero *"
                        placeholder="Selecione uma opção"
                        v-model="formulario.genero"
                        :options="[
                          { label: 'Masculino', value: 'masculino' },
                          { label: 'Feminino', value: 'feminino' },
                          { label: 'Outro', value: 'outro' },
                        ]"
                        @blur="validarCampo('genero')"
                        :state="estadoCampo(erros.genero)"
                      ></br-select>
                      <br-message
                        v-if="erros.genero"
                        state="danger"
                        is-feedback
                        :message="erros.genero"
                        show-icon
                        :aria-label="erros.genero"
                      ></br-message>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.senha }">
                      <br-input
                        label="Senha *"
                        id="senha"
                        v-model="formulario.senha"
                        :type="mostrarSenha ? 'text' : 'password'"
                        placeholder="Digite sua senha"
                        @blur="validarCampo('senha')"
                      >
                        <template>
                          <button
                            class="br-button"
                            type="button"
                            @click="mostrarSenha = !mostrarSenha"
                            aria-label="Exibir senha"
                          >
                            <i
                              :class="mostrarSenha ? 'fas fa-eye-slash' : 'fas fa-eye'"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </template>
                      </br-input>
                      <br-message
                        v-if="erros.senha"
                        state="danger"
                        is-feedback
                        :message="erros.senha"
                        show-icon
                        :aria-label="erros.senha"
                      ></br-message>
                      <div class="form-text" v-if="formulario.senha && !erros.senha">
                        A senha deve ter pelo menos 8 caracteres, incluindo letras,
                        números e caracteres especiais.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.confirmarSenha }">
                      <br-input
                        label="Confirmar Senha *"
                        id="confirmarSenha"
                        v-model="formulario.confirmarSenha"
                        :type="mostrarConfirmarSenha ? 'text' : 'password'"
                        placeholder="Confirme sua senha"
                        @blur="validarCampo('confirmarSenha')"
                      >
                        <template>
                          <button
                            class="br-button"
                            type="button"
                            @click="mostrarConfirmarSenha = !mostrarConfirmarSenha"
                            aria-label="Exibir senha"
                          >
                            <i
                              :class="
                                mostrarConfirmarSenha ? 'fas fa-eye-slash' : 'fas fa-eye'
                              "
                              aria-hidden="true"
                            ></i>
                          </button>
                        </template>
                      </br-input>
                      <br-message
                        v-if="erros.confirmarSenha"
                        state="danger"
                        is-feedback
                        :message="erros.confirmarSenha"
                        show-icon
                        :aria-label="erros.confirmarSenha"
                      ></br-message>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 mb-3">
                    <br-checkbox
                      class="mb-1"
                      id="termos"
                      name="termos"
                      v-model="formulario.termos"
                      :state="erros.termos ? 'invalid' : undefined"
                      label="Li e concordo com os termos de uso e política de privacidade *"
                    />
                    <br-message
                      v-if="erros.termos"
                      state="danger"
                      is-feedback
                      :message="erros.termos"
                      show-icon
                      :aria-label="erros.termos"
                    />
                  </div>
                </div>

                <div class="form-actions">
                  <button
                    type="button"
                    class="br-button secondary"
                    @click="limparFormulario"
                  >
                    Limpar
                  </button>
                  <button type="submit" class="br-button primary">Cadastrar</button>
                </div>
              </form>
            </div>

            <!-- Formulário de Pesquisa com Validação -->
            <div class="form-section">
              <h4 class="mb-3">Pesquisa Avançada</h4>
              <form @submit.prevent="validarFormularioPesquisa" class="form-validacao">
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <br-input
                      :class="{ 'is-invalid': errosPesquisa.termo }"
                      label="Termo de Pesquisa *"
                      id="termoPesquisa"
                      v-model="formularioPesquisa.termo"
                      type="text"
                      placeholder="Digite o que você procura"
                      @blur="validarCampoPesquisa('termo')"
                    />
                    <br-message
                      v-if="errosPesquisa.termo"
                      state="danger"
                      is-feedback
                      :message="errosPesquisa.termo"
                      show-icon
                      :aria-label="errosPesquisa.termo"
                    ></br-message>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Categorias *</label>
                    <div
                      class="br-checkbox"
                      :class="{ 'is-invalid': errosPesquisa.categorias }"
                    >
                      <input
                        id="cat-eletronicos"
                        v-model="formularioPesquisa.categorias"
                        type="checkbox"
                        value="eletronicos"
                      />
                      <label for="cat-eletronicos">Eletrônicos</label>
                    </div>
                    <div class="br-checkbox">
                      <input
                        id="cat-roupas"
                        v-model="formularioPesquisa.categorias"
                        type="checkbox"
                        value="roupas"
                      />
                      <label for="cat-roupas">Roupas</label>
                    </div>
                    <div class="br-checkbox">
                      <input
                        id="cat-livros"
                        v-model="formularioPesquisa.categorias"
                        type="checkbox"
                        value="livros"
                      />
                      <label for="cat-livros">Livros</label>
                    </div>
                    <div class="br-checkbox">
                      <input
                        id="cat-esportes"
                        v-model="formularioPesquisa.categorias"
                        type="checkbox"
                        value="esportes"
                      />
                      <label for="cat-esportes">Esportes</label>
                    </div>
                    <div class="invalid-feedback" v-if="errosPesquisa.categorias">
                      {{ errosPesquisa.categorias }}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>Faixa de Preço *</label>
                    <div class="row">
                      <div class="col-6">
                        <div
                          class="br-input"
                          :class="{ 'is-invalid': errosPesquisa.precoMin }"
                        >
                          <br-input
                            label="Mínimo"
                            id="precoMin"
                            v-model="formularioPesquisa.precoMin"
                            type="number"
                            placeholder="Mín"
                            @blur="validarCampoPesquisa('precoMin')"
                          />
                          <br-message
                            v-if="errosPesquisa.precoMin"
                            state="danger"
                            is-feedback
                            :message="errosPesquisa.precoMin"
                            show-icon
                            :aria-label="errosPesquisa.precoMin"
                          ></br-message>
                        </div>
                      </div>
                      <div class="col-6">
                        <div
                          class="br-input"
                          :class="{ 'is-invalid': errosPesquisa.precoMax }"
                        >
                          <br-input
                            label="Máximo"
                            id="precoMax"
                            v-model="formularioPesquisa.precoMax"
                            type="number"
                            placeholder="Máx"
                            @blur="validarCampoPesquisa('precoMax')"
                          />
                          <br-message
                            v-if="errosPesquisa.precoMax"
                            state="danger"
                            is-feedback
                            :message="errosPesquisa.precoMax"
                            show-icon
                            :aria-label="errosPesquisa.precoMax"
                          ></br-message>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-actions">
                  <button
                    type="button"
                    class="br-button secondary"
                    @click="limparFormularioPesquisa"
                  >
                    Limpar
                  </button>
                  <button type="submit" class="br-button primary">Pesquisar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de Feedback de Validação -->
    <div class="row">
      <div class="col-md-12">
        <div class="br-card">
          <div class="card-header">
            <h3>Feedback de Validação</h3>
          </div>
          <div class="card-content">
            <div class="row">
              <div class="col-md-6">
                <h4 class="mb-3">Mensagens de Erro</h4>

                <div class="mb-3">
                  <br-message
                    state="danger"
                    message-title="Erro de Validação"
                    message="Este é um exemplo de mensagem de erro para campos inválidos."
                    show-icon
                    aria-label="Erro de validação para campos inválidos"
                  />
                </div>

                <div class="mb-3">
                  <br-message
                    state="warning"
                    message-title="Aviso"
                    message="Este é um exemplo de mensagem de aviso para campos que precisam de atenção."
                    show-icon
                    aria-label="Mensagem de aviso para campos que precisam de atenção"
                  />
                </div>

                <div class="mb-3">
                  <br-message
                    state="info"
                    message-title="Informação"
                    message="Este é um exemplo de mensagem informativa para orientar o usuário."
                    show-icon
                    aria-label="Mensagem informativa para orientar o usuário"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <h4 class="mb-3">Estados de Validação</h4>
                <div class="validation-states d-flex flex-column gap-4">
                  <!-- Campo Normal -->
                  <br-input
                    id="input-normal"
                    label="Campo Normal"
                    placeholder="Campo sem validação"
                  />

                  <!-- Campo Sucesso -->
                  <br-input
                    id="input-success"
                    label="Campo Sucesso"
                    placeholder="Campo com sucesso"
                    state="success"
                    aria-describedby="feedback-success"
                  >
                    <br-message
                      id="feedback-success"
                      slot="feedback"
                      state="success"
                      is-feedback
                      message="Este campo está correto."
                      show-icon
                      aria-label="Campo com sucesso"
                    />
                  </br-input>

                  <!-- Campo Informação -->
                  <br-input
                    id="input-info"
                    label="Campo Informação"
                    placeholder="Campo com dica"
                    state="info"
                    aria-describedby="feedback-info"
                  >
                    <br-message
                      id="feedback-info"
                      slot="feedback"
                      state="info"
                      is-feedback
                      message="Este campo fornece uma dica informativa."
                      show-icon
                      aria-label="Campo com informação"
                    />
                  </br-input>

                  <!-- Campo Alerta -->
                  <br-input
                    id="input-warning"
                    label="Campo Alerta"
                    placeholder="Campo com alerta"
                    state="warning"
                    aria-describedby="feedback-warning"
                  >
                    <br-message
                      id="feedback-warning"
                      slot="feedback"
                      state="warning"
                      is-feedback
                      message="Atenção! Verifique este campo."
                      show-icon
                      aria-label="Campo com alerta"
                    />
                  </br-input>

                  <!-- Campo Erro -->
                  <br-input
                    id="input-error"
                    label="Campo com Erro"
                    placeholder="Campo com erro"
                    state="danger"
                    aria-invalid="true"
                    aria-describedby="feedback-error"
                  >
                    <br-message
                      id="feedback-error"
                      slot="feedback"
                      state="danger"
                      is-feedback
                      message="Este campo contém um erro de validação."
                      show-icon
                      aria-label="Campo com erro"
                    />
                  </br-input>

                  <!-- Campo Desabilitado -->
                  <br-input
                    id="input-disabled"
                    label="Campo Desabilitado"
                    placeholder="Campo desabilitado"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// Estado para o formulário de cadastro
const formulario = reactive({
  nome: "",
  email: "",
  cpf: "",
  telefone: "",
  senha: "",
  confirmarSenha: "",
  termos: false,
  genero: "",
});

// Estado para o formulário de pesquisa
const formularioPesquisa = reactive({
  termo: "",
  categorias: [] as string[],
  precoMin: "",
  precoMax: "",
});

// Estado para os erros do formulário de cadastro
const erros = reactive({
  nome: "",
  email: "",
  cpf: "",
  telefone: "",
  senha: "",
  confirmarSenha: "",
  termos: "",
  genero: "",
});

// Estado para os erros do formulário de pesquisa
const errosPesquisa = reactive({
  termo: "",
  categorias: "",
  precoMin: "",
  precoMax: "",
});

// Estado para mostrar/ocultar senha
const mostrarSenha = ref(false);
const mostrarConfirmarSenha = ref(false);

// Funções de validação para o formulário de cadastro
const validarCampo = (campo: string) => {
  switch (campo) {
    case "nome":
      if (!formulario.nome) {
        erros.nome = "O nome é obrigatório";
      } else if (formulario.nome.length < 3) {
        erros.nome = "O nome deve ter pelo menos 3 caracteres";
      } else {
        erros.nome = "";
      }
      break;
    case "email":
      if (!formulario.email) {
        erros.email = "O e-mail é obrigatório";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
        erros.email = "Digite um e-mail válido";
      } else {
        erros.email = "";
      }
      break;
    case "cpf":
      if (!formulario.cpf) {
        erros.cpf = "O CPF é obrigatório";
      } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formulario.cpf)) {
        erros.cpf = "Digite um CPF válido (000.000.000-00)";
      } else {
        erros.cpf = "";
      }
      break;
    case "telefone":
      if (!formulario.telefone) {
        erros.telefone = "O telefone é obrigatório";
      } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formulario.telefone)) {
        erros.telefone = "Digite um telefone válido ((00) 00000-0000)";
      } else {
        erros.telefone = "";
      }
      break;
    case "senha":
      if (!formulario.senha) {
        erros.senha = "A senha é obrigatória";
      } else if (formulario.senha.length < 8) {
        erros.senha = "A senha deve ter pelo menos 8 caracteres";
      } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
          formulario.senha
        )
      ) {
        erros.senha =
          "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais";
      } else {
        erros.senha = "";
      }
      break;
    case "confirmarSenha":
      if (!formulario.confirmarSenha) {
        erros.confirmarSenha = "A confirmação de senha é obrigatória";
      } else if (formulario.confirmarSenha !== formulario.senha) {
        erros.confirmarSenha = "As senhas não coincidem";
      } else {
        erros.confirmarSenha = "";
      }
      break;
  }
};

// Funções de validação para o formulário de pesquisa
const validarCampoPesquisa = (campo: string) => {
  switch (campo) {
    case "termo":
      if (!formularioPesquisa.termo) {
        errosPesquisa.termo = "O termo de pesquisa é obrigatório";
      } else if (formularioPesquisa.termo.length < 3) {
        errosPesquisa.termo = "O termo deve ter pelo menos 3 caracteres";
      } else {
        errosPesquisa.termo = "";
      }
      break;
    case "precoMin":
      if (formularioPesquisa.precoMin && isNaN(Number(formularioPesquisa.precoMin))) {
        errosPesquisa.precoMin = "Digite um valor numérico válido";
      } else if (formularioPesquisa.precoMin && Number(formularioPesquisa.precoMin) < 0) {
        errosPesquisa.precoMin = "O valor mínimo não pode ser negativo";
      } else {
        errosPesquisa.precoMin = "";
      }
      break;
    case "precoMax":
      if (formularioPesquisa.precoMax && isNaN(Number(formularioPesquisa.precoMax))) {
        errosPesquisa.precoMax = "Digite um valor numérico válido";
      } else if (formularioPesquisa.precoMax && Number(formularioPesquisa.precoMax) < 0) {
        errosPesquisa.precoMax = "O valor máximo não pode ser negativo";
      } else if (
        formularioPesquisa.precoMin &&
        formularioPesquisa.precoMax &&
        Number(formularioPesquisa.precoMax) < Number(formularioPesquisa.precoMin)
      ) {
        errosPesquisa.precoMax = "O valor máximo deve ser maior que o valor mínimo";
      } else {
        errosPesquisa.precoMax = "";
      }
      break;
  }
};

// Validar formulário de cadastro completo
const validarFormularioCadastro = () => {
  // Validar todos os campos
  validarCampo("nome");
  validarCampo("email");
  validarCampo("cpf");
  validarCampo("telefone");
  validarCampo("senha");
  validarCampo("confirmarSenha");

  // Validar termos
  if (!formulario.termos) {
    erros.termos = "Você precisa aceitar os termos para continuar";
  } else {
    erros.termos = "";
  }

  // Verificar se há erros
  const temErros = Object.values(erros).some((erro) => erro !== "");

  if (!temErros) {
    // Simular envio do formulário
    alert("Formulário de cadastro enviado com sucesso!");
    limparFormulario();
  } else {
    alert("Por favor, corrija os erros no formulário antes de enviar.");
  }
};

// Validar formulário de pesquisa completo
const validarFormularioPesquisa = () => {
  // Validar todos os campos
  validarCampoPesquisa("termo");
  validarCampoPesquisa("precoMin");
  validarCampoPesquisa("precoMax");

  // Validar categorias
  if (formularioPesquisa.categorias.length === 0) {
    errosPesquisa.categorias = "Selecione pelo menos uma categoria";
  } else {
    errosPesquisa.categorias = "";
  }

  // Verificar se há erros
  const temErros = Object.values(errosPesquisa).some((erro) => erro !== "");

  if (!temErros) {
    // Simular envio do formulário
    alert("Formulário de pesquisa enviado com sucesso!");
    limparFormularioPesquisa();
  } else {
    alert("Por favor, corrija os erros no formulário antes de enviar.");
  }
};

// Limpar formulário de cadastro
const limparFormulario = () => {
  formulario.nome = "";
  formulario.email = "";
  formulario.cpf = "";
  formulario.telefone = "";
  formulario.senha = "";
  formulario.confirmarSenha = "";
  formulario.termos = false;

  // Limpar erros
  Object.keys(erros).forEach((key) => {
    erros[key as keyof typeof erros] = "";
  });
};

// Limpar formulário de pesquisa
const limparFormularioPesquisa = () => {
  formularioPesquisa.termo = "";
  formularioPesquisa.categorias = [];
  formularioPesquisa.precoMin = "";
  formularioPesquisa.precoMax = "";

  // Limpar erros
  Object.keys(errosPesquisa).forEach((key) => {
    errosPesquisa[key as keyof typeof errosPesquisa] = "";
  });
};

const estadoCampo = (erro: string) => {
  console.log(erro, erro !== "", erro !== "" ? "danger" : undefined);
  return erro !== "" ? "danger" : undefined;
};
</script>

<style scoped>
.formularios-validacao-container {
  padding: 20px;
}

.br-card {
  height: 100%;
  margin-bottom: 20px;
}

.card-content {
  padding: 20px;
}

.form-section {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
}

.form-section:last-child {
  border-bottom: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.input-group {
  display: flex;
  position: relative;
}

.input-group input {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group .br-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.validation-states {
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

/* Estilos para feedback de validação */
.is-invalid {
  border-color: #dc3545;
}

.is-valid {
  border-color: #28a745;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.valid-feedback {
  color: #28a745;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-text {
  color: #6c757d;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
