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
                    <div class="br-input" :class="{ 'is-invalid': erros.nome }">
                      <label for="nome">Nome Completo *</label>
                      <input id="nome" v-model="formulario.nome" type="text" placeholder="Digite seu nome completo"
                        @blur="validarCampo('nome')" />
                      <div class="invalid-feedback" v-if="erros.nome">
                        {{ erros.nome }}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.email }">
                      <label for="email">E-mail *</label>
                      <input id="email" v-model="formulario.email" type="email" placeholder="seu.email@exemplo.com"
                        @blur="validarCampo('email')" />
                      <div class="invalid-feedback" v-if="erros.email">
                        {{ erros.email }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.cpf }">
                      <label for="cpf">CPF *</label>
                      <input id="cpf" v-model="formulario.cpf" type="text" placeholder="000.000.000-00"
                        @blur="validarCampo('cpf')" />
                      <div class="invalid-feedback" v-if="erros.cpf">
                        {{ erros.cpf }}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.telefone }">
                      <label for="telefone">Telefone *</label>
                      <input id="telefone" v-model="formulario.telefone" type="text" placeholder="(00) 00000-0000"
                        @blur="validarCampo('telefone')" />
                      <div class="invalid-feedback" v-if="erros.telefone">
                        {{ erros.telefone }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.senha }">
                      <label for="senha">Senha *</label>
                      <div class="input-group">
                        <input id="senha" v-model="formulario.senha" :type="mostrarSenha ? 'text' : 'password'"
                          placeholder="Digite sua senha" @blur="validarCampo('senha')" />
                        <button class="br-button" type="button" @click="mostrarSenha = !mostrarSenha"
                          aria-label="Exibir senha">
                          <i :class="mostrarSenha ? 'fas fa-eye-slash' : 'fas fa-eye'" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div class="invalid-feedback" v-if="erros.senha">
                        {{ erros.senha }}
                      </div>
                      <div class="form-text" v-if="formulario.senha && !erros.senha">
                        A senha deve ter pelo menos 8 caracteres, incluindo letras,
                        números e caracteres especiais.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="br-input" :class="{ 'is-invalid': erros.confirmarSenha }">
                      <label for="confirmarSenha">Confirmar Senha *</label>
                      <div class="input-group">
                        <input id="confirmarSenha" v-model="formulario.confirmarSenha"
                          :type="mostrarConfirmarSenha ? 'text' : 'password'" placeholder="Confirme sua senha"
                          @blur="validarCampo('confirmarSenha')" />
                        <button class="br-button" type="button" @click="mostrarConfirmarSenha = !mostrarConfirmarSenha"
                          aria-label="Exibir senha">
                          <i :class="mostrarConfirmarSenha ? 'fas fa-eye-slash' : 'fas fa-eye'
                            " aria-hidden="true"></i>
                        </button>
                      </div>
                      <div class="invalid-feedback" v-if="erros.confirmarSenha">
                        {{ erros.confirmarSenha }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 mb-3">
                    <div class="br-checkbox" :class="{ 'is-invalid': erros.termos }">
                      <input id="termos" v-model="formulario.termos" type="checkbox" />
                      <label for="termos">Li e concordo com os termos de uso e política de privacidade
                        *</label>
                      <div class="invalid-feedback" v-if="erros.termos">
                        {{ erros.termos }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-actions">
                  <button type="button" class="br-button secondary" @click="limparFormulario">
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
                    <div class="br-input" :class="{ 'is-invalid': errosPesquisa.termo }">
                      <label for="termoPesquisa">Termo de Pesquisa *</label>
                      <input id="termoPesquisa" v-model="formularioPesquisa.termo" type="text"
                        placeholder="Digite o que você procura" @blur="validarCampoPesquisa('termo')" />
                      <div class="invalid-feedback" v-if="errosPesquisa.termo">
                        {{ errosPesquisa.termo }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Categorias *</label>
                    <div class="br-checkbox" :class="{ 'is-invalid': errosPesquisa.categorias }">
                      <input id="cat-eletronicos" v-model="formularioPesquisa.categorias" type="checkbox"
                        value="eletronicos" />
                      <label for="cat-eletronicos">Eletrônicos</label>
                    </div>
                    <div class="br-checkbox">
                      <input id="cat-roupas" v-model="formularioPesquisa.categorias" type="checkbox" value="roupas" />
                      <label for="cat-roupas">Roupas</label>
                    </div>
                    <div class="br-checkbox">
                      <input id="cat-livros" v-model="formularioPesquisa.categorias" type="checkbox" value="livros" />
                      <label for="cat-livros">Livros</label>
                    </div>
                    <div class="br-checkbox">
                      <input id="cat-esportes" v-model="formularioPesquisa.categorias" type="checkbox"
                        value="esportes" />
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
                        <div class="br-input" :class="{ 'is-invalid': errosPesquisa.precoMin }">
                          <input id="precoMin" v-model="formularioPesquisa.precoMin" type="number" placeholder="Mín"
                            @blur="validarCampoPesquisa('precoMin')" />
                          <div class="invalid-feedback" v-if="errosPesquisa.precoMin">
                            {{ errosPesquisa.precoMin }}
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="br-input" :class="{ 'is-invalid': errosPesquisa.precoMax }">
                          <input id="precoMax" v-model="formularioPesquisa.precoMax" type="number" placeholder="Máx"
                            @blur="validarCampoPesquisa('precoMax')" />
                          <div class="invalid-feedback" v-if="errosPesquisa.precoMax">
                            {{ errosPesquisa.precoMax }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-actions">
                  <button type="button" class="br-button secondary" @click="limparFormularioPesquisa">
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
                <div class="br-message danger mb-3">
                  <!-- <div class="message-content">
                    <div class="message-title">Erro de Validação</div>
                    <div class="message-body">
                      Este é um exemplo de mensagem de erro para campos inválidos.
                    </div>
                  </div> -->
                  <br-message></br-message>
                </div>
                <div class="br-message warning mb-3">
                  <div class="message-content">
                    <div class="message-title">Aviso</div>
                    <div class="message-body">
                      Este é um exemplo de mensagem de aviso para campos que precisam de
                      atenção.
                    </div>
                  </div>
                </div>
                <div class="br-message info">
                  <div class="message-content">
                    <div class="message-title">Informação</div>
                    <div class="message-body">
                      Este é um exemplo de mensagem informativa para orientar o usuário.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h4 class="mb-3">Estados de Validação</h4>
                <div class="validation-states">
                  <div class="br-input mb-3">
                    <label for="input-normal">Campo Normal</label>
                    <input id="input-normal" type="text" placeholder="Campo sem validação" />
                  </div>
                  <div class="br-input is-invalid mb-3">
                    <label for="input-invalid">Campo Inválido</label>
                    <input id="input-invalid" type="text" placeholder="Campo com erro" />
                    <div class="invalid-feedback">
                      Este campo contém um erro de validação.
                    </div>
                  </div>
                  <div class="br-input is-valid mb-3">
                    <label for="input-valid">Campo Válido</label>
                    <input id="input-valid" type="text" placeholder="Campo válido" />
                    <div class="valid-feedback">Este campo está correto.</div>
                  </div>
                  <div class="br-input is-disabled">
                    <label for="input-disabled">Campo Desabilitado</label>
                    <input id="input-disabled" type="text" placeholder="Campo desabilitado" disabled />
                  </div>
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
