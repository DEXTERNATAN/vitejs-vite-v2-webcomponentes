<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import { estadosOptions as importedEstadosOptions } from "./data/selectOptions";

const webComponentVersion = "Versão GovBR-DS: v. 2.0.0-next.33";
const estadosOptionsString = JSON.stringify(importedEstadosOptions);

const form = ref({
  nome: "",
  email: "",
  senha: "",
  confirmaSenha: "",
  estado: "",
  genero: "N",
  termos: false,
  newsletter: false,
});

const cadastroSucesso = ref(false);
const cadastroErro = ref(false);
const erros = ref({});

// Expressão regular para validar email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Função para validar o formulário
const validarFormulario = () => {
  const newErros = {
    nome: form.value.nome.trim().length < 3,
    email: !emailRegex.test(form.value.email),
    senha: form.value.senha.length < 8,
    confirmaSenha: form.value.senha !== form.value.confirmaSenha,
    estado: !form.value.estado,
    termos: !form.value.termos,
  };
  Object.assign(erros.value, newErros);
  return Object.values(newErros).some((error) => error);
};

// Watchers para validação em tempo real
watch(
  () => form.value,
  () => {
    validarFormulario();
  },
  { deep: true }
);

// Adicionando um watcher específico para o campo estado
watch(
  () => form.value.estado,
  () => {
    validarFormulario();
  }
);

const cadastrarUsuario = async () => {
  // Resetar estados de sucesso e erro
  cadastroSucesso.value = false;
  cadastroErro.value = false;

  if (validarFormulario()) {
    cadastroErro.value = true;
    return;
  }

  try {
    console.log("Usuário cadastrado:", form.value);
    cadastroSucesso.value = true;
    // Limpar o formulário após o cadastro bem-sucedido
    Object.keys(form.value).forEach(
      (key) => (form.value[key] = key === "genero" ? "N" : "")
    );
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    cadastroErro.value = true;
  }
};

// --- Código para o botão voltar ao topo ---
const showScrollTopButton = ref(false);
const scrollThreshold = 200;

const handleScroll = () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  showScrollTopButton.value = scrollY > scrollThreshold;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="template-base">
    <div class="version-tag-container">
      <br-tag
        label="Ferramenta de Construção: Vite"
        density="small"
        class="version-tag-content"
        title="Build Tool"
        color="bg-info"
      ></br-tag>
      <br-tag
        label="Framework: Vue 3"
        density="small"
        class="version-tag-content"
        title="Framework"
        color="bg-orange-vivid-50"
      ></br-tag>
      <br-tag
        :label="webComponentVersion"
        density="small"
        class="version-tag-content"
        title="Versão GovBR-DS"
      ></br-tag>
    </div>
    <main class="d-flex flex-fill mb-5" id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="main-content-showcase pt-4 px-sm-3">
              <h1 class="mb-3 display-4">Showcase de Componentes</h1>

              <br-message
                state="info"
                message="Demonstração dos Web Componentes `br-*` (v. 2.0.0-next.33),
                focando nas 3 densidades (`small`, `medium`, `large`) quando
                aplicável e outros atributos relevantes."
                show-icon
                class="mb-3"
              ></br-message>

              <!-- Bloco de Navegação Rápida -->
              <div
                class="navigation-quicklinks"
                id="quicknav"
                aria-label="Navegação rápida"
              >
                <h3 class="h5 mb-3">Navegação Rápida:</h3>
                <div class="d-flex flex-wrap gap-2">
                  <a href="#avatar" class="br-button" density="small">Avatar</a>
                  <a href="#button" class="br-button" density="small">Button</a>
                  <a href="#breadcrumb" class="br-button" density="small">Breadcrumb</a>
                  <a href="#checkbox" class="br-button" density="small">Checkbox</a>
                  <a href="#checkgroup" class="br-button" density="small">Checkgroup</a>
                  <a href="#collapse" class="br-button" density="small">Collapse</a>
                  <a href="#divider" class="br-button" density="small">Divider</a>
                  <a href="#dropdown" class="br-button" density="small">Dropdown</a>
                  <a href="#icon" class="br-button" density="small">Icon</a>
                  <a href="#input" class="br-button" density="small">Input</a>
                  <a href="#item" class="br-button" density="small">Item</a>
                  <a href="#list" class="br-button" density="small">List</a>
                  <a href="#loading" class="br-button" density="small">Loading</a>
                  <a href="#message" class="br-button" density="small">Message</a>
                  <a href="#radio" class="br-button" density="small">Radio</a>
                  <a href="#select" class="br-button" density="small">Select</a>
                  <a href="#switch" class="br-button" density="small">Switch</a>
                  <a href="#tag" class="br-button" density="small">Tag</a>
                  <a href="#textarea" class="br-button" density="small">Textarea</a>
                  <a href="#upload" class="br-button" density="small">Upload</a>
                  <a href="#formularios" class="br-button" density="small">Formulários</a>
                </div>
              </div>

              <!--Seção Avatar -->
              <div class="card mb-5 shadow-sm" id="avatar">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Avatar</h2>
                  <br-message
                    state="danger"
                    message="Erro na dimensao do ícone quando utilizado com o button cirle"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Exibe representações visuais: Imagem (<code>src</code>), Ícone
                    (<code>isIconic</code>) ou Letra (<code>text</code>). Controla o
                    tamanho com <code>density</code>. Use <code>alt</code> para
                    acessibilidade e <code>disabled</code> para desabilitar. Para ícones,
                    <code>iconWidth/iconHeight/iconMarginTop</code> permitem ajustes.
                  </p>
                  <h3 class="h6 mt-4">1. Tipos Principais (Densidade Média)</h3>
                  <p class="card-text">
                    <small
                      >Demonstração dos tipos <code>src</code>, <code>isIconic</code>, e
                      <code>text</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-avatar
                      src="https://picsum.photos/id/1062/80"
                      density="medium"
                      alt="Foto de perfil (mulher com câmera)"
                      title="Tipo: src (Imagem)"
                    ></br-avatar>
                    <br-avatar
                      is-iconic
                      density="medium"
                      alt="Ícone de usuário genérico"
                      title="Tipo: isIconic (Ícone)"
                    ></br-avatar>
                    <br-avatar
                      text="DG"
                      density="medium"
                      alt="Iniciais DG"
                      title="Tipo: text (Letra)"
                    ></br-avatar>
                  </div>
                  <h3 class="h6 mt-4">2. Variações de Densidade (Tipo: Imagem)</h3>
                  <p class="card-text">
                    <small
                      >Mostra o efeito de <code>density</code> (small, medium, large) em
                      um avatar com imagem.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-avatar
                      src="https://picsum.photos/id/1062/80"
                      density="small"
                      alt="Foto de perfil (mulher com câmera) - Pequeno"
                      title="Densidade: small"
                    ></br-avatar>
                    <br-avatar
                      src="https://picsum.photos/id/1062/80"
                      density="medium"
                      alt="Foto de perfil (mulher com câmera) - Médio"
                      title="Densidade: medium"
                    ></br-avatar>
                    <br-avatar
                      src="https://picsum.photos/id/1062/80"
                      density="large"
                      alt="Foto de perfil (mulher com câmera) - Grande"
                      title="Densidade: large"
                    ></br-avatar>
                  </div>
                  <h3 class="h6 mt-4">3. Estado Desabilitado</h3>
                  <p class="card-text">
                    <small>Demonstra o atributo <code>disabled</code>.</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-avatar
                      text="OK"
                      density="medium"
                      alt="Avatar habilitado (Letra OK)"
                      title="Habilitado"
                    ></br-avatar>
                    <br-avatar
                      text="OK"
                      density="medium"
                      disabled
                      alt="Avatar desabilitado (Letra OK)"
                      title="Desabilitado (disabled)"
                    ></br-avatar>
                    <br-avatar
                      is-iconic
                      density="medium"
                      disabled
                      alt="Ícone desabilitado"
                      title="Ícone Desabilitado"
                    ></br-avatar>
                  </div>
                  <h3 class="h6 mt-4">4. Ajustes no Tipo Ícone</h3>
                  <p class="card-text">
                    <small
                      >Demonstra o uso de <code>icon-width</code> e
                      <code>icon-height</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-avatar
                      is-iconic
                      density="large"
                      alt="Ícone Padrão (Grande)"
                      title="Padrão (density=large)"
                    ></br-avatar>
                    <br-avatar
                      is-iconic
                      density="large"
                      icon-width="32px"
                      icon-height="32px"
                      alt="Ícone com 32px (dentro de avatar grande)"
                      title="icon-width/height='32px'"
                    ></br-avatar>
                    <br-avatar
                      is-iconic
                      density="large"
                      icon-width="16px"
                      icon-height="16px"
                      alt="Ícone com 16px (dentro de avatar grande)"
                      title="icon-width/height='16px'"
                    ></br-avatar>
                  </div>
                  <p class="card-text mt-3">
                    <small
                      ><em
                        >Nota: <code>iconMarginTop</code> também pode ser usado para
                        ajustes verticais finos do ícone.</em
                      ></small
                    >
                  </p>
                </div>
              </div>

              <!-- Seção Button -->
              <div class="card mb-5 shadow-sm" id="button">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Button</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Botão para acionar ações. Atributos chave incluem:
                    <code>emphasis</code>, <code>density</code>, <code>disabled</code>,
                    <code>isLoading</code>, <code>isActive</code>, <code>shape</code>,
                    <code>type</code>, e <code>colorMode</code>.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade (Ênfase Secundária)</h3>
                  <p class="card-text">
                    <small>Mostra o efeito do atributo <code>density</code>.</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-button emphasis="secondary" density="small">Pequeno</br-button>
                    <br-button emphasis="secondary" density="medium">Médio</br-button>
                    <br-button emphasis="secondary" density="large">Grande</br-button>
                  </div>
                  <h3 class="h6 mt-4">2. Exemplos de Ênfase e Tipo (Densidade Média)</h3>
                  <p class="card-text">
                    <small
                      >Mostra os atributos <code>emphasis</code> e
                      <code>type</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-button emphasis="primary" density="medium"
                      >Primário (button)</br-button
                    >
                    <br-button emphasis="secondary" density="medium"
                      >Secundário (button)</br-button
                    >
                    <br-button emphasis="tertiary" density="medium"
                      >Terciário (button)</br-button
                    >
                    <br-button emphasis="primary" type="submit" density="medium"
                      >Enviar (submit)</br-button
                    >
                    <br-button emphasis="secondary" type="reset" density="medium"
                      >Limpar (reset)</br-button
                    >
                  </div>
                  <h3 class="h6 mt-4">3. Exemplos de Estados e Modo (Densidade Média)</h3>
                  <p class="card-text">
                    <small
                      >Mostra os estados <code>disabled</code>, <code>isLoading</code>,
                      <code>isActive</code> e o modo <code>colorMode="dark"</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-button emphasis="primary" density="medium" disabled
                      >Desabilitado</br-button
                    >
                    <br-button emphasis="primary" density="medium" is-loading
                      >Carregando</br-button
                    >
                    <br-button emphasis="secondary" density="medium" is-active
                      >Ativo</br-button
                    >
                  </div>

                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center bg-dark p-3 border mt-3 gap-4"
                  >
                    <br-button emphasis="primary" density="medium" color-mode="dark"
                      >Modo Escuro</br-button
                    >
                    <br-button
                      emphasis="secondary"
                      density="medium"
                      color-mode="dark"
                      class="ms-3"
                      >Modo Escuro</br-button
                    >
                  </div>
                  <h3 class="h6 mt-4">4. Exemplos de Formato (Densidade Média)</h3>
                  <p class="card-text">
                    <small
                      >Mostra o atributo <code>shape</code> (pill, circle, block).</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-button emphasis="primary" density="medium" shape="pill"
                      >Formato Pill</br-button
                    >
                    <br-button
                      emphasis="secondary"
                      density="medium"
                      shape="circle"
                      aria-label="Formato Círculo"
                    >
                      <br-icon icon-name="fa6-solid:heart"></br-icon>
                    </br-button>
                    <br-button emphasis="secondary" density="medium"
                      >Formato Padrão</br-button
                    >
                  </div>
                  <p class="card-text mt-3">
                    <small
                      >O formato <code>block</code> ocupa toda a largura disponível do
                      container.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-button emphasis="primary" density="medium" shape="block"
                      >Botão Block (Ocupa Largura)</br-button
                    >
                  </div>
                </div>
              </div>

              <!--Seção Breadcrumb -->
              <div class="card mb-5 shadow-sm" id="breadcrumb">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Breadcrumb</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Componente de navegação estrutural. Utiliza
                    <code>crumbs</code>, um Array de objetos (ou JSON string) no formato
                    <code
                      >[{ label: string, url: string, active?: boolean, target?: string
                      }]</code
                    >. O <code>target</code> (ex: '_self', '_blank') define onde o link
                    abre. O atributo <code>homeUrl</code> define o link da "Home" (padrão:
                    '/'). Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">
                    Exemplo 1: Caminho Longo e <code>homeUrl="/dashboard"</code>
                  </h3>
                  <div class="p-3 border rounded mt-2 overflow-auto">
                    <br-breadcrumb
                      aria-label="Navegação Estrutural Longa"
                      home-url="/dashboard"
                      crumbs='[
                           { "label": "Página Ancestral 01", "target": "_self", "url": "#anc1" },
                           { "label": "Página Ancestral 02", "target": "_self", "url": "#anc2" },
                           { "label": "Página Ancestral 03", "target": "_self", "url": "#anc3" },
                           { "label": "Página Ancestral 04", "target": "_self", "url": "#anc4" },
                           { "label": "Página Atual", "active": true }
                         ]'
                    >
                    </br-breadcrumb>
                  </div>
                  <h3 class="h6 mt-4">
                    Exemplo 2: Com <code>homeUrl</code> padrão ('/') e
                    <code>target</code>
                  </h3>
                  <div class="p-3 border rounded mt-2 overflow-auto">
                    <br-breadcrumb
                      aria-label="Navegação Estrutural com Home Padrão"
                      crumbs='[
                           { "label": "Produtos", "target": "_self", "url": "#prod" },
                           { "label": "Categoria X", "target": "_self", "url": "#catX" },
                           { "label": "Detalhes", "active": true }
                         ]'
                    >
                    </br-breadcrumb>
                  </div>
                </div>
              </div>

              <!--Seção Checkbox -->
              <div class="card mb-5 shadow-sm" id="checkbox">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Checkbox</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Componente para seleção de uma ou mais opções. Atributos chave:
                    <code>name</code> (obrigatório), <code>label</code> (ou slot),
                    <code>checked</code>, <code>disabled</code>,
                    <code>indeterminate</code>, <code>state</code> (valid/invalid),
                    <code>hasHiddenLabel</code>, <code>value</code>. Densidade não
                    aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Estados Básicos</h3>
                  <p class="card-text">
                    <small>Demonstra <code>checked</code> e <code>disabled</code>.</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-checkbox name="basic-states-ck" label="Padrão"></br-checkbox>
                    <br-checkbox
                      name="basic-states-ck"
                      label="Marcado"
                      checked
                    ></br-checkbox>
                    <br-checkbox
                      name="basic-states-ck"
                      label="Desabilitado"
                      disabled
                    ></br-checkbox>
                    <br-checkbox
                      name="basic-states-ck"
                      label="Marcado Desabilitado"
                      checked
                      disabled
                    ></br-checkbox>
                  </div>
                  <h3 class="h6 mt-4">2. Estados Indeterminado e Validação</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>indeterminate</code> e <code>state</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-checkbox
                      name="inter-valid-states-ck"
                      label="Indeterminado"
                      indeterminate
                    ></br-checkbox>
                    <br-checkbox
                      name="inter-valid-states-ck"
                      label="Válido"
                      checked
                      state="valid"
                    ></br-checkbox>
                    <br-checkbox
                      name="inter-valid-states-ck"
                      label="Inválido"
                      state="invalid"
                    ></br-checkbox>
                  </div>
                  <h3 class="h6 mt-4">3. Visibilidade e Conteúdo do Label</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>hasHiddenLabel</code> e uso de slot para
                      label.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-checkbox
                      name="label-vis-slot-ck"
                      has-hidden-label
                      aria-label="Checkbox com Label Oculto"
                    ></br-checkbox>
                    <span>(Label Oculto)</span>
                    <br-checkbox name="label-vis-slot-ck">
                      <span slot="label">Label <strong>via Slot</strong></span>
                    </br-checkbox>
                  </div>
                  <p class="card-text mt-3">
                    <small
                      ><em
                        >Nota: O atributo <code>value</code> é usado para envio em
                        formulários, não afeta a aparência. <code>name</code> é
                        obrigatório.</em
                      ></small
                    >
                  </p>
                </div>
              </div>

              <!--Seção Checkgroup -->
              <div class="card mb-5 shadow-sm" id="checkgroup">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Checkgroup</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Agrupa múltiplos <code>br-checkbox</code>, provendo um controle
                    mestre. Atributos chave: <code>label</code> (título do grupo),
                    <code>labelSelecionado</code> (texto mestre qdo selecionado, padrão:
                    'Desselecionar tudo'), <code>labelDesselecionado</code> (texto mestre
                    qdo não selecionado, padrão: 'Selecionar tudo'),
                    <code>indeterminate</code> (força estado visual indeterminado no
                    mestre). Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplo Básico (Labels Padrão)</h3>
                  <p class="card-text">
                    <small>Master control inicia com 'Selecionar tudo'.</small>
                  </p>
                  <div class="p-3 border rounded mt-2">
                    <br-checkgroup label="Opções Disponíveis (Padrão)">
                      <br-checkbox
                        name="cg-default"
                        label="Item 1"
                        class="mb-1"
                      ></br-checkbox>
                      <br-checkbox
                        name="cg-default"
                        label="Item 2"
                        class="mb-1"
                      ></br-checkbox>
                      <br-checkbox name="cg-default" label="Item 3"></br-checkbox>
                    </br-checkgroup>
                  </div>
                  <h3 class="h6 mt-4">2. Labels Customizados e Estado Inicial</h3>
                  <p class="card-text">
                    <small
                      >Textos do master control alterados e um item
                      pré-selecionado.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2">
                    <br-checkgroup
                      label="Minhas Tarefas (Custom)"
                      label-selecionado="Desmarcar Tarefas"
                      label-desselecionado="Marcar Tarefas"
                    >
                      <br-checkbox
                        name="cg-custom"
                        label="Tarefa A"
                        class="mb-1"
                      ></br-checkbox>
                      <br-checkbox
                        name="cg-custom"
                        label="Tarefa B"
                        class="mb-1"
                        checked
                      ></br-checkbox>
                      <br-checkbox name="cg-custom" label="Tarefa C"></br-checkbox>
                    </br-checkgroup>
                  </div>
                  <h3 class="h6 mt-4">3. Estado Indeterminado Forçado</h3>
                  <p class="card-text">
                    <small>Usando o atributo <code>indeterminate</code> no grupo.</small>
                  </p>
                  <div class="p-3 border rounded mt-2">
                    <br-checkgroup label="Seleção Parcial (Forçada)" indeterminate>
                      <br-checkbox
                        name="cg-indet"
                        label="Opção X"
                        class="mb-1"
                      ></br-checkbox>
                      <br-checkbox
                        name="cg-indet"
                        label="Opção Y"
                        class="mb-1"
                      ></br-checkbox>
                      <br-checkbox name="cg-indet" label="Opção Z"></br-checkbox>
                    </br-checkgroup>
                  </div>
                  <p class="card-text mt-3">
                    <small
                      ><em
                        >Nota: A aparência do estado indeterminado no controle mestre
                        depende da implementação visual do componente.</em
                      ></small
                    >
                  </p>
                </div>
              </div>

              <!--Seção Collapse -->
              <div class="card mb-5 shadow-sm" id="collapse">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Collapse</h2>
                  <br-message
                    state="warning"
                    message="Problema no CSS (?)"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Pode ser simples (independente) ou agrupado como Accordion (usando
                    <code>accordion-group</code>). Atributos: <code>open</code> (inicia
                    aberto), <code>icon-position</code>, <code>icon-to-show</code>,
                    <code>icon-to-hide</code>. Densidade se aplica aos itens internos (ex:
                    <code>br-item</code>).
                  </p>
                  <h3 class="h6 mt-4">1. Exemplo Accordion</h3>
                  <p class="card-text">
                    <small>Apenas um item aberto por vez no grupo "acc-1".</small>
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <div class="br-list">
                      <br-collapse accordion-group="acc-1" open>
                        <span slot="trigger">Item 1 do Acordeão (Aberto)</span>
                        <div>Conteúdo do item 1...</div>
                      </br-collapse>
                      <br-divider class="my-1"></br-divider>
                      <br-collapse accordion-group="acc-1">
                        <span slot="trigger">Item 2 do Acordeão</span>
                        <div>Conteúdo do item 2...</div>
                      </br-collapse>
                      <br-divider class="my-1"></br-divider>
                      <br-collapse accordion-group="acc-1">
                        <span slot="trigger">Item 3 do Acordeão</span>
                        <div>Conteúdo do item 3...</div>
                      </br-collapse>
                    </div>
                  </div>
                  <h3 class="h6 mt-4">2. Exemplo Simples (Independente)</h3>
                  <p class="card-text">
                    <small
                      >Sem <code>accordion-group</code>, cada um abre/fecha
                      livremente.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-collapse class="mb-2">
                      <span slot="trigger">Collapse Simples 1</span>
                      <div>Conteúdo do collapse 1...</div>
                    </br-collapse>
                    <br-collapse>
                      <span slot="trigger">Collapse Simples 2</span>
                      <div>Conteúdo do collapse 2...</div>
                    </br-collapse>
                  </div>
                  <h3 class="h6 mt-4">3. Customização de Ícones</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>icon-position</code> e ícones customizados.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-collapse icon-position="left" class="mb-2">
                      <span slot="trigger">Ícone à Esquerda</span>
                      <div>O ícone (seta) aparece antes do texto do trigger.</div>
                    </br-collapse>
                    <br-collapse
                      icon-to-show="fa6-solid:plus"
                      icon-to-hide="fa6-solid:minus"
                    >
                      <span slot="trigger">Ícones +/-</span>
                      <div>Usa ícones de mais/menos em vez das setas.</div>
                    </br-collapse>
                  </div>
                </div>
              </div>

              <!--Seção Divider -->
              <div class="card mb-5 shadow-sm" id="divider">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Divider</h2>
                  <br-message
                    state="warning"
                    message="Problema no CSS (?)"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Linha separadora de conteúdo. Atributos:
                    <code>orientation</code> (horizontal/vertical),
                    <code>thickness</code> (small/medium/large),
                    <code>borderStyle</code> (solid/dashed), <code>color</code>,
                    <code>bleed</code> (ignora padding), <code>align</code> (com texto),
                    <code>isDarkMode</code>. Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Orientação e Espessura</h3>
                  <p class="card-text">
                    <small
                      >Mostra <code>orientation</code> e <code>thickness</code>.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <span>Horizontal (Padrão)</span>
                    <br-divider thickness="small"></br-divider>
                    <span>Horizontal Médio</span>
                    <br-divider thickness="medium"></br-divider>
                    <span>Horizontal Grande</span>
                    <br-divider thickness="large"></br-divider>
                    <div class="d-flex align-items-center mt-3" style="height: 40px">
                      <span>Item A</span>
                      <br-divider
                        orientation="vertical"
                        thickness="medium"
                        class="mx-3"
                      ></br-divider>
                      <span>Item B (Vertical Médio)</span>
                    </div>
                  </div>
                  <h3 class="h6 mt-4">2. Estilo da Borda, Cor e Modo Escuro</h3>
                  <p class="card-text">
                    <small
                      >Mostra <code>borderStyle</code>, <code>color</code> e
                      <code>is-dark-mode</code>.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <span>Estilo Tracejado</span>
                    <br-divider border-style="dashed"></br-divider>
                    <span>Cor Azul</span>
                    <br-divider color="blue" thickness="medium"></br-divider>
                    <span>Adaptação Modo Escuro (Ver no Inspecionar/Fundo Escuro)</span>
                    <br-divider is-dark-mode></br-divider>
                  </div>
                  <h3 class="h6 mt-4">3. Alinhamento de Texto e Sangria (`bleed`)</h3>
                  <p class="card-text">
                    <small
                      >O atributo <code>align</code> funciona quando há texto dentro do
                      divider. <code>bleed</code> faz o divider ocupar toda a largura do
                      container pai, ignorando paddings.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-divider align="left">Texto Esquerda</br-divider>
                    <br-divider align="center" class="my-2">Texto Centro</br-divider>
                    <br-divider align="right">Texto Direita</br-divider>
                  </div>
                  <div class="p-4 border bg-info bg-opacity-10 mt-3">
                    <small>Container com Padding (p-4):</small>
                    <br-divider class="my-2">Sem Bleed</br-divider>
                    <br-divider bleed class="my-2">Com Bleed</br-divider>
                  </div>
                </div>
              </div>

              <!--Seção Dropdown -->
              <div class="card mb-5 shadow-sm" id="dropdown">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Dropdown</h2>
                  <br-message
                    state="warning"
                    message="Ajustar Responsividade (?)"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Menu suspenso que exibe conteúdo (slot <code>target</code>) ao clicar
                    em um gatilho (slot <code>trigger</code>). O estado pode ser
                    controlado pelo atributo <code>is-open</code>. Densidade aplica-se aos
                    itens internos.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplo Básico (Gatilho de Ícone)</h3>
                  <p class="card-text">
                    <small>Clique no ícone para abrir/fechar.</small>
                  </p>
                  <div
                    class="p-3 border rounded mt-2 bg-lightest d-flex justify-content-center"
                  >
                    <br-dropdown>
                      <br-button
                        slot="trigger"
                        shape="circle"
                        aria-label="Abrir menu de opções"
                      >
                        <br-icon icon-name="fa6-solid:ellipsis-vertical"></br-icon>
                      </br-button>
                      <br-list slot="target">
                        <br-item role="menuitem">Opção 1</br-item>
                        <br-divider class="my-1"></br-divider>
                        <br-item role="menuitem">Opção 2</br-item>
                        <br-divider class="my-1"></br-divider>
                        <br-item role="menuitem">Opção 3</br-item>
                      </br-list>
                    </br-dropdown>
                  </div>
                  <h3 class="h6 mt-4">2. Exemplo Iniciando Aberto (`is-open`)</h3>
                  <p class="card-text">
                    <small>O dropdown começa no estado expandido.</small>
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-dropdown is-open>
                      <br-button slot="trigger"
                        >Menu Inicialmente Aberto
                        <br-icon icon-name="fa6-solid:caret-up"></br-icon
                      ></br-button>
                      <br-list slot="target">
                        <br-item role="menuitem">Item A</br-item>
                        <br-item role="menuitem">Item B</br-item>
                      </br-list>
                    </br-dropdown>
                  </div>
                  <h3 class="h6 mt-4">3. Controle Programático (via `:is-open`)</h3>
                  <p class="card-text">
                    <small
                      >Um botão externo controla o estado aberto/fechado do
                      dropdown.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-button @click="toggleDropdown" class="mb-3">
                      {{
                        isDropdownProgOpen
                          ? "Fechar Dropdown Programático"
                          : "Abrir Dropdown Programático"
                      }}
                    </br-button>
                    <br-dropdown :is-open="isDropdownProgOpen">
                      <br-button slot="trigger">Dropdown Controlado</br-button>
                      <br-list slot="target">
                        <br-item role="menuitem">Ação Controlada 1</br-item>
                        <br-item role="menuitem">Ação Controlada 2</br-item>
                      </br-list>
                    </br-dropdown>
                    <p class="mt-2">
                      <small
                        >Estado atual: <code>{{ isDropdownProgOpen }}</code></small
                      >
                    </p>
                  </div>
                </div>
              </div>

              <!--Seção Icon -->
              <div class="card mb-5 shadow-sm" id="icon">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Icon</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Exibe ícones da biblioteca Iconify. Atributos:
                    <code>iconName</code> (obrigatório), <code>width</code> (padrão 24),
                    <code>height</code> (padrão 16), <code>rotate</code>,
                    <code>flip</code>, <code>isInline</code> (alinha com texto),
                    <code>cssClasses</code> (estilo customizado). Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Ícone Básico e Tamanhos</h3>
                  <p class="card-text">
                    <small
                      >Demonstra o padrão e tamanhos customizados com <code>width</code> e
                      <code>height</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-icon
                      icon-name="fa6-solid:house"
                      alt="Ícone Casa (Tamanho Padrão)"
                      title="Padrão (w:24, h:16)"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:star"
                      width="32"
                      height="32"
                      alt="Ícone Estrela (32x32)"
                      title="w:32, h:32"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:heart"
                      height="40"
                      alt="Ícone Coração (Altura 40px)"
                      title="h:40"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:gear"
                      width="40"
                      alt="Ícone Engrenagem (Largura 40px)"
                      title="w:40"
                    ></br-icon>
                  </div>
                  <h3 class="h6 mt-4">2. Rotação e Espelhamento</h3>
                  <p class="card-text">
                    <small
                      >Demonstra os atributos <code>rotate</code> e
                      <code>flip</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-icon
                      icon-name="fa6-solid:arrow-right"
                      alt="Seta Direita"
                      title="Normal"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:arrow-right"
                      rotate="90deg"
                      alt="Seta Rotacionada 90°"
                      title="rotate='90deg'"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:arrow-right"
                      rotate="180deg"
                      alt="Seta Rotacionada 180°"
                      title="rotate='180deg'"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:arrow-right"
                      rotate="270deg"
                      alt="Seta Rotacionada 270°"
                      title="rotate='270deg'"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:truck"
                      flip="horizontal"
                      alt="Caminhão Espelhado H."
                      title="flip='horizontal'"
                    ></br-icon>
                    <br-icon
                      icon-name="fa6-solid:plane"
                      flip="vertical"
                      alt="Avião Espelhado V."
                      title="flip='vertical'"
                    ></br-icon>
                  </div>
                  <h3 class="h6 mt-4">3. Alinhamento Inline e Estilo</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>isInline</code> para alinhar com texto e
                      <code>cssClasses</code> para estilo.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <p class="mb-1">
                      Texto com ícone
                      <br-icon
                        icon-name="fa6-regular:comment-dots"
                        alt="Comentário"
                      ></br-icon>
                      padrão.
                    </p>
                    <p>
                      Texto com ícone
                      <br-icon
                        icon-name="fa6-regular:comment-dots"
                        is-inline
                        alt="Comentário"
                      ></br-icon>
                      alinhado (<code>isInline</code>).
                    </p>
                    <hr class="my-2" />
                    <p>
                      Ícone com classe CSS:
                      <br-icon
                        icon-name="fa6-brands:vuejs"
                        css-classes="meu-icone-colorido"
                        alt="Ícone Vue.js com Classe CSS"
                        title="css-classes='meu-icone-colorido'"
                      ></br-icon>
                    </p>
                  </div>
                </div>
              </div>

              <!--Seção Input -->
              <div class="card mb-5 shadow-sm" id="input">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Input</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Campo de entrada de texto. Três exemplos, um para cada densidade.
                  </p>
                  <div class="p-3 border rounded mt-3 d-flex flex-column gap-3">
                    <br-input
                      id="input-small-density-i-full"
                      label="Input Pequeno"
                      placeholder="Densidade: small"
                      density="small"
                    ></br-input>
                    <br-input
                      id="input-medium-density-i-full"
                      label="Input Médio"
                      placeholder="Densidade: medium"
                      density="medium"
                    ></br-input>
                    <br-input
                      id="input-large-density-i-full"
                      label="Input Grande"
                      placeholder="Densidade: large"
                      density="large"
                    ></br-input>
                  </div>
                </div>
              </div>

              <!--Seção Item -->
              <div class="card mb-5 shadow-sm" id="item">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Item</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Item individual de lista/menu. Pode ser texto, link
                    (<code>href</code>) ou botão (<code>isButton</code>). Atributos chave:
                    <code>density</code>, <code>href</code>, <code>target</code>,
                    <code>isButton</code>, <code>type</code>,
                    <code>isInteractive</code> (área toda clicável),
                    <code>disabled</code>, <code>isSelected</code>, <code>isActive</code>.
                    Possui slots <code>start</code> e <code>end</code>.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade</h3>
                  <p class="card-text">
                    <small>Mostra <code>density</code> (small, medium, large).</small>
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-1 bg-lightest"
                  >
                    <br-item density="small"
                      ><br-icon slot="start" icon-name="fa6-solid:compress"></br-icon>Item
                      Pequeno<span slot="end">S</span></br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item density="medium"
                      ><br-icon
                        slot="start"
                        icon-name="fa6-solid:arrows-left-right"
                      ></br-icon
                      >Item Médio<span slot="end">M</span></br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item density="large"
                      ><br-icon slot="start" icon-name="fa6-solid:expand"></br-icon>Item
                      Grande<span slot="end">L</span></br-item
                    >
                  </div>
                  <h3 class="h6 mt-4">2. Comportamento de Link (`href`)</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>href</code>, <code>target</code> e
                      <code>isInteractive</code>.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-1 bg-lightest"
                  >
                    <br-item href="#link-simples"
                      ><br-icon slot="start" icon-name="fa6-solid:link"></br-icon>Item
                      Link Simples</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item href="#link-interativo" is-interactive
                      ><br-icon slot="start" icon-name="fa6-solid:hand-pointer"></br-icon
                      >Item Link Interativo (Área Clicável)</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item href="https://www.google.com" target="_blank" is-interactive
                      ><br-icon
                        slot="start"
                        icon-name="fa6-solid:external-link-alt"
                      ></br-icon
                      >Abrir Google em Nova Aba (target="_blank")</br-item
                    >
                  </div>
                  <h3 class="h6 mt-4">3. Comportamento de Botão (`isButton`)</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>isButton</code>, <code>type</code> e
                      <code>isInteractive</code>.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-1 bg-lightest"
                  >
                    <br-item is-button
                      ><br-icon
                        slot="start"
                        icon-name="fa6-regular:hand-point-up"
                      ></br-icon
                      >Item Botão Simples (sem isInteractive)</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item is-button is-interactive
                      ><br-icon slot="start" icon-name="fa6-solid:mouse-pointer"></br-icon
                      >Item Botão Interativo (Área Clicável)</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item is-button is-interactive type="submit"
                      ><br-icon slot="start" icon-name="fa6-solid:paper-plane"></br-icon
                      >Enviar Formulário (type="submit")</br-item
                    >
                    <p class="mt-2 mb-0">
                      <small
                        ><em
                          >Nota: Use <code>type="reset"</code> ou
                          <code>type="button"</code> (padrão) conforme necessário.</em
                        ></small
                      >
                    </p>
                  </div>
                  <h3 class="h6 mt-4">4. Estados Visuais</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>disabled</code>, <code>isSelected</code> e
                      <code>isActive</code>.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-1 bg-lightest"
                  >
                    <br-item disabled
                      ><br-icon slot="start" icon-name="fa6-solid:ban"></br-icon>Item
                      Desabilitado</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item is-selected is-interactive
                      ><br-icon slot="start" icon-name="fa6-solid:check-square"></br-icon
                      >Item Selecionado</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item is-active is-interactive
                      ><br-icon slot="start" icon-name="fa6-solid:star"></br-icon>Item
                      Ativo</br-item
                    >
                    <br-divider class="my-1"></br-divider>
                    <br-item is-selected disabled
                      ><br-icon slot="start" icon-name="fa6-solid:check-square"></br-icon
                      >Item Selecionado e Desabilitado<span slot="end"
                        >(Exemplo)</span
                      ></br-item
                    >
                  </div>
                </div>
              </div>

              <!--Seção List -->
              <div class="card mb-5 shadow-sm" id="list">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">List</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Agrupa <code>br-item</code>s. Pode ser vertical (padrão) ou horizontal
                    (<code>is-horizontal</code>). Opcionalmente, possui um
                    <code>header</code> (com ou sem divisor via
                    <code>hide-header-divider</code>). Densidade aplica-se aos itens
                    internos.
                  </p>
                  <h3 class="h6 mt-4">1. Lista Vertical (Padrão)</h3>
                  <p class="card-text">
                    <small>Demonstra variações do cabeçalho.</small>
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-list header="Título Visível (com divisor)">
                      <br-item>Item Vertical 1</br-item>
                      <span class="br-divider"></span>
                      <br-item>Item Vertical 2</br-item>
                    </br-list>
                    <br-list header="Título Sem Divisor" hide-header-divider class="mt-3">
                      <br-item>Item A</br-item>
                      <span class="br-divider"></span>
                      <br-item>Item B</br-item>
                    </br-list>
                    <br-list class="mt-3">
                      <br-item>Item sem Cabeçalho 1</br-item>
                      <span class="br-divider"></span>
                      <br-item>Item sem Cabeçalho 2</br-item>
                    </br-list>
                  </div>
                  <h3 class="h6 mt-4">2. Lista Horizontal (`is-horizontal`)</h3>
                  <p class="card-text">
                    <small>Itens dispostos lado a lado.</small>
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-list header="Itens Horizontais" is-horizontal>
                      <br-item>
                        <br-icon slot="start" icon-name="fa6-solid:cube"></br-icon>
                        Item H1
                      </br-item>
                      <br-item>
                        <br-icon slot="start" icon-name="fa6-solid:cube"></br-icon>
                        Item H2
                      </br-item>
                      <br-item>
                        <br-icon slot="start" icon-name="fa6-solid:cube"></br-icon>
                        Item H3
                      </br-item>
                    </br-list>
                    <br-list is-horizontal class="mt-3">
                      <br-item>Sem Header H1</br-item>
                      <br-item>Sem Header H2</br-item>
                    </br-list>
                  </div>
                </div>
              </div>

              <!--Seção Loading -->
              <div class="card mb-5 shadow-sm" id="loading">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Loading</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Indica processos em andamento. Pode ser um spinner (padrão) ou barra
                    de progresso (<code>isProgress</code>). Atributos:
                    <code>label</code>, <code>isMedium</code> (spinner médio),
                    <code>isProgress</code>, <code>progressPercent</code> (0-100).
                    Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Indicador Indeterminado (Spinner)</h3>
                  <p class="card-text">
                    <small>Demonstra tamanhos (padrão/médio) e label.</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-5"
                  >
                    <br-loading title="Tamanho Padrão"></br-loading>
                    <br-loading
                      label="Processando..."
                      title="Padrão com Label"
                    ></br-loading>
                    <br-loading
                      is-medium
                      label="Aguarde (médio)..."
                      title="Médio com Label"
                    ></br-loading>
                  </div>
                  <h3 class="h6 mt-4">2. Barra de Progresso (`isProgress`)</h3>
                  <p class="card-text">
                    <small>Demonstra <code>progressPercent</code> e label.</small>
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-loading
                      is-progress
                      progress-percent="0"
                      label="Iniciando... 0%"
                    ></br-loading>
                    <br-loading
                      is-progress
                      progress-percent="65"
                      label="Carregando dados... 65%"
                    ></br-loading>
                    <br-loading
                      is-progress
                      progress-percent="100"
                      label="Concluído!"
                    ></br-loading>
                    <br-loading is-progress progress-percent="100"></br-loading>
                  </div>
                </div>
              </div>

              <!--Seção Message -->
              <div class="card mb-5 shadow-sm" id="message">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Message</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Exibe mensagens. Pode ser estilo Alerta (padrão) ou Feedback
                    (<code>isFeedback</code>). Atributos:
                    <code>state</code> (info, success, danger, warning),
                    <code>message</code> (obrigatório),
                    <code>messageTitle</code> (alertas), <code>showIcon</code>,
                    <code>isClosable</code> (alertas), <code>autoRemove</code> (alertas),
                    <code>isInline</code> (alertas). Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Mensagens de Alerta (Padrão / Não-Feedback)</h3>
                  <p class="card-text">
                    <small
                      >Demonstra estados, título, ícone, fechamento e layout
                      inline.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-message
                      state="info"
                      message-title="Informação"
                      message="Esta é uma mensagem informativa."
                      show-icon
                    ></br-message>
                    <br-message
                      state="success"
                      message-title="Sucesso!"
                      message="Operação concluída com êxito."
                      show-icon
                    ></br-message>
                    <br-message
                      state="warning"
                      message-title="Atenção!"
                      message="Verifique os dados inseridos."
                      show-icon
                    ></br-message>
                    <br-message
                      state="danger"
                      message-title="Erro!"
                      message="Falha ao processar a solicitação."
                      show-icon
                    ></br-message>
                    <hr />
                    <br-message
                      state="success"
                      message-title="Fechável"
                      message="Clique no X para fechar (não remove)."
                      is-closable
                      show-icon
                    ></br-message>
                    <br-message
                      state="warning"
                      message-title="Fechável (Auto Remove)"
                      message="Clique no X para fechar (remove do DOM)."
                      is-closable
                      auto-remove
                      show-icon
                    ></br-message>
                    <br-message
                      state="info"
                      message-title="Título Inline:"
                      message="A mensagem aparece ao lado."
                      is-inline
                      show-icon
                    ></br-message>
                  </div>
                  <h3 class="h6 mt-4">2. Mensagens de Feedback (`isFeedback`)</h3>
                  <p class="card-text">
                    <small
                      >Estilo para validação de formulários (sem título, fechamento ou
                      inline).</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-message
                      state="info"
                      message="Formato esperado: DD/MM/AAAA."
                      is-feedback
                      show-icon
                    ></br-message>
                    <br-message
                      state="success"
                      message="Campo válido."
                      is-feedback
                      show-icon
                    ></br-message>
                    <br-message
                      state="warning"
                      message="Caps Lock ativo."
                      is-feedback
                      show-icon
                    ></br-message>
                    <br-message
                      state="danger"
                      message="CPF inválido."
                      is-feedback
                      show-icon
                    ></br-message>
                    <br-message
                      state="danger"
                      message="Campo obrigatório (sem ícone)."
                      is-feedback
                    ></br-message>
                  </div>
                </div>
              </div>

              <!--Seção Radio -->
              <div class="card mb-5 shadow-sm" id="radio">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Radio</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Botão de rádio para seleção única dentro de um grupo (definido pelo
                    atributo <code>name</code> obrigatório). Atributos chave:
                    <code>label</code> (ou slot), <code>value</code>,
                    <code>checked</code>, <code>disabled</code>,
                    <code>state</code> (valid/invalid), <code>hasHiddenLabel</code>.
                    Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Grupo Básico e Estados</h3>
                  <p class="card-text">
                    <small
                      >Demonstra grupo com <code>name</code>, <code>value</code>,
                      <code>checked</code> e <code>disabled</code>.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <p class="label mb-2">Selecione uma Fruta:</p>
                    <br-radio
                      name="fruta"
                      value="laranja"
                      label="Laranja"
                      class="mb-1"
                    ></br-radio>
                    <br-radio
                      name="fruta"
                      value="maca"
                      label="Maçã"
                      checked
                      class="mb-1"
                    ></br-radio>
                    <br-radio
                      name="fruta"
                      value="uva"
                      label="Uva (Desabilitado)"
                      disabled
                      class="mb-1"
                    ></br-radio>
                    <br-radio
                      name="fruta"
                      value="banana"
                      label="Banana"
                      class="mb-1"
                    ></br-radio>
                  </div>
                  <h3 class="h6 mt-4">2. Estados de Validação</h3>
                  <p class="card-text">
                    <small
                      >Demonstra os atributos <code>state="valid"</code> e
                      <code>state="invalid"</code>.</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <p class="label mb-2">Status da Seleção:</p>
                    <br-radio
                      name="status-valid"
                      value="valido"
                      label="Seleção Válida"
                      state="valid"
                      class="mb-1"
                    ></br-radio>
                    <br-radio
                      name="status-valid"
                      value="invalido"
                      label="Seleção Inválida"
                      state="invalid"
                      checked
                      class="mb-1"
                    ></br-radio>
                    <br-radio
                      name="status-valid"
                      value="normal"
                      label="Seleção Normal"
                      class="mb-1"
                    ></br-radio>
                  </div>
                  <h3 class="h6 mt-4">3. Opções de Label</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>hasHiddenLabel</code> (requer
                      <code>aria-label</code>) e label via slot.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-radio
                      name="label-opts"
                      value="hidden"
                      has-hidden-label
                      aria-label="Opção com Label Oculto"
                    ></br-radio>
                    <span>(Label Oculto)</span>
                    <br-radio name="label-opts" value="slot">
                      <span slot="label">Label <strong>Formatado</strong> via Slot</span>
                    </br-radio>
                  </div>
                  <p class="card-text mt-3">
                    <small
                      ><em
                        >Nota: O atributo <code>value</code> define o valor enviado pelo
                        formulário para a opção selecionada dentro do grupo
                        <code>name</code>.</em
                      ></small
                    >
                  </p>
                </div>
              </div>

              <!--Seção Select -->
              <div class="card mb-5 shadow-sm" id="select">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Select</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Campo de seleção suspensa. Atributos: <code>label</code>,
                    <code>placeholder</code>, <code>options</code> (JSON string),
                    <code>density</code>, <code>isMultiple</code>,
                    <code>selectAllLabel</code>, <code>unselectAllLabel</code>,
                    <code>showSearchIcon</code>, <code>isOpen</code>.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade (Seleção Simples)</h3>
                  <p class="card-text">
                    <small>Mostra <code>density</code> (small, medium, large).</small>
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-select
                      id="select-small-density-rev"
                      label="Select Pequeno (Dados via string)"
                      placeholder="Densidade: small"
                      density="small"
                      options='[{ "label": "Opção S1", "value": "s1" }, { "label": "Opção S2", "value": "s2" }]'
                    ></br-select>
                    <br-select
                      id="select-medium-density-rev"
                      label="Select Médio (Dados via string)"
                      placeholder="Densidade: medium"
                      density="medium"
                      options='[{ "label": "Opção M1", "value": "m1" }, { "label": "Opção M2", "value": "m2" }]'
                    ></br-select>
                    <br-select
                      id="select-large-density-rev"
                      label="Select Grande (Dados via Object Array)"
                      placeholder="Densidade: large"
                      density="large"
                      :options="estadosOptionsString"
                    ></br-select>
                  </div>
                  <h3 class="h6 mt-4">2. Seleção Múltipla (`isMultiple`)</h3>
                  <p class="card-text">
                    <small
                      >Permite selecionar vários itens. Mostra labels padrão e
                      customizados.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-select
                      id="select-multi-default"
                      is-multiple
                      label="Múltipla Escolha (Labels Padrão)"
                      placeholder="Selecione um ou mais"
                      options='[
                                  { "label": "Opção A", "value": "a", "selected": true },
                                  { "label": "Opção B", "value": "b" },
                                  { "label": "Opção C", "value": "c", "selected": true }
                                ]'
                    ></br-select>
                    <br-select
                      id="select-multi-custom"
                      is-multiple
                      label="Múltipla Escolha (Labels Custom)"
                      select-all-label="Marcar Todos"
                      unselect-all-label="Limpar Seleção"
                      placeholder="Selecione um ou mais"
                      options='[
                                  { "label": "Item X", "value": "x" },
                                  { "label": "Item Y", "value": "y" },
                                  { "label": "Item Z", "value": "z" }
                                ]'
                    ></br-select>
                  </div>
                  <h3 class="h6 mt-4">3. Atributos Adicionais</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>showSearchIcon</code> e
                      <code>is-open</code>.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-select
                      id="select-search-icon"
                      label="Com Ícone de Busca"
                      show-search-icon
                      placeholder="Busca visual"
                      options='[{ "label": "Opção 1", "value": "1" }]'
                    ></br-select>
                    <br-select
                      id="select-start-open"
                      label="Iniciando Aberto"
                      is-open
                      placeholder="Selecione"
                      options='[{ "label": "Opção Visível", "value": "vis" }]'
                    ></br-select>
                  </div>
                </div>
              </div>

              <!--Seção Switch -->
              <div class="card mb-5 shadow-sm" id="switch">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Switch</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Controle liga/desliga. Atributos: <code>label</code>,
                    <code>name</code> (obrigatório), <code>density</code>,
                    <code>checked</code>, <code>disabled</code>, <code>hasIcon</code>,
                    <code>labelOn</code>, <code>labelOff</code>,
                    <code>labelPosition</code> (left/right/top), <code>value</code>.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade</h3>
                  <p class="card-text">
                    <small>Mostra <code>density</code> (small, medium, large).</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-switch
                      name="density-sw"
                      density="small"
                      label="Pequeno"
                    ></br-switch>
                    <br-switch
                      name="density-sw"
                      density="medium"
                      label="Médio (padrão)"
                    ></br-switch>
                    <br-switch
                      name="density-sw"
                      density="large"
                      label="Grande"
                    ></br-switch>
                  </div>
                  <h3 class="h6 mt-4">2. Estados Comuns</h3>
                  <p class="card-text">
                    <small>Demonstra <code>checked</code> e <code>disabled</code>.</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-switch name="state-sw-rev" label="Desligado"></br-switch>
                    <br-switch name="state-sw-rev" label="Ligado" checked></br-switch>
                    <br-switch
                      name="state-sw-rev"
                      label="Desabilitado (Off)"
                      disabled
                    ></br-switch>
                    <br-switch
                      name="state-sw-rev"
                      label="Desabilitado (On)"
                      checked
                      disabled
                    ></br-switch>
                  </div>
                  <h3 class="h6 mt-4">3. Ícone Interno e Labels Dinâmicos</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>hasIcon</code>, <code>labelOn</code> e
                      <code>labelOff</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4"
                  >
                    <br-switch
                      name="icon-onoff-sw"
                      label="Com Ícone"
                      has-icon
                    ></br-switch>
                    <br-switch
                      name="icon-onoff-sw"
                      label="Com Ícone (Ligado)"
                      has-icon
                      checked
                    ></br-switch>
                    <br-switch
                      name="icon-onoff-sw"
                      label="Status"
                      label-on="Ativo"
                      label-off="Inativo"
                    ></br-switch>
                    <br-switch
                      name="icon-onoff-sw"
                      label="Status (Ligado)"
                      label-on="SIM"
                      label-off="NÃO"
                      checked
                    ></br-switch>
                  </div>
                  <h3 class="h6 mt-4">4. Posição do Label Principal</h3>
                  <p class="card-text">
                    <small>Demonstra <code>labelPosition</code>.</small>
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-switch
                      name="pos-sw-rev"
                      label="Label à Esquerda (Padrão)"
                      label-position="left"
                    ></br-switch>
                    <br-switch
                      name="pos-sw-rev"
                      label="Label à Direita"
                      label-position="right"
                    ></br-switch>
                    <br-switch
                      name="pos-sw-rev"
                      label="Label Acima"
                      label-position="top"
                    ></br-switch>
                  </div>
                  <p class="card-text mt-3">
                    <small
                      ><em
                        >Nota: <code>name</code> é obrigatório para uso em formulários.
                        <code>value</code> define o valor enviado.</em
                      ></small
                    >
                  </p>
                </div>
              </div>

              <!--Seção Tag -->
              <div class="card mb-5 shadow-sm" id="tag">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Tag</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Etiqueta para categorizar ou destacar informações. Atributos comuns:
                    <code>label</code>, <code>density</code>, <code>color</code> (classe
                    CSS de fundo), <code>shape</code> (padrão, rounded),
                    <code>icon-name</code>.
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade (Cor Cinza)</h3>
                  <p class="card-text">
                    <small>Mostra <code>density</code> (small, medium, large).</small>
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-3"
                  >
                    <br-tag label="Tag Pequena" density="small" color="bg-light"></br-tag>
                    <br-tag label="Tag Média" density="medium" color="bg-light"></br-tag>
                    <br-tag label="Tag Grande" density="large" color="bg-light"></br-tag>
                  </div>

                  <h3 class="h6 mt-4">2. Cores e Ícones (Densidade Média)</h3>
                  <p class="card-text">
                    <small
                      >Demonstra diferentes classes de <code>color</code> e uso de
                      <code>icon-name</code>.</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-3"
                  >
                    <br-tag density="medium" color="bg-success" label="Sucesso"></br-tag>
                    <br-tag
                      density="medium"
                      color="bg-warning text-dark"
                      label="Aviso"
                    ></br-tag>
                    <br-tag density="medium" color="bg-danger" label="Erro"></br-tag>
                    <br-tag density="medium" color="bg-info" label="Info"></br-tag>
                    <br-tag
                      density="medium"
                      color="bg-primary"
                      label="Com Ícone"
                      icon-name="fa6-solid:star"
                    ></br-tag>
                  </div>

                  <h3 class="h6 mt-4">3. Formatos (`shape`)</h3>
                  <p class="card-text">
                    <small
                      >Demonstra o formato padrão e <code>shape="rounded"</code> (bom para
                      contadores).</small
                    >
                  </p>
                  <div
                    class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-3"
                  >
                    <br-tag density="medium" color="bg-secondary" label="Padrão"></br-tag>
                    <br-tag
                      density="medium"
                      color="bg-danger"
                      label="10"
                      shape="rounded"
                    ></br-tag>
                    <br-tag
                      density="medium"
                      color="bg-danger"
                      label="99+"
                      shape="rounded"
                    ></br-tag>
                  </div>
                </div>
              </div>

              <!--Seção Textarea -->
              <div class="card mb-5 shadow-sm" id="textarea">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Textarea</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Campo para entrada de texto multilinha. Atributos:
                    <code>label</code>, <code>placeholder</code>, <code>density</code>,
                    <code>state</code> (danger/success/warning), <code>disabled</code>,
                    <code>readonly</code> (não listado, mas comum),
                    <code>maxlength</code>, <code>showCounter</code>,
                    <code>isInline</code>, <code>value</code>.
                  </p>

                  <h3 class="h6 mt-4">1. Exemplos de Densidade</h3>
                  <p class="card-text">
                    <small
                      >Mostra <code>density="small"</code>, <code>medium</code>,
                      <code>large</code>.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-textarea
                      id="textarea-small-density-rev"
                      label="Textarea Pequena"
                      placeholder="Densidade: small"
                      density="small"
                      rows="2"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-medium-density-rev"
                      label="Textarea Média"
                      placeholder="Densidade: medium (padrão)"
                      density="medium"
                      rows="2"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-large-density-rev"
                      label="Textarea Grande"
                      placeholder="Densidade: large"
                      density="large"
                      rows="2"
                    ></br-textarea>
                  </div>

                  <h3 class="h6 mt-4">2. Estados Comuns e Validação</h3>
                  <p class="card-text">
                    <small
                      >Mostra <code>disabled</code>, <code>readonly</code> (assumido) e
                      <code>state</code>.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-textarea
                      id="textarea-state-disabled"
                      label="Desabilitado"
                      placeholder="Não editável"
                      disabled
                      rows="2"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-state-readonly"
                      label="Somente Leitura"
                      value="Texto fixo não editável..."
                      readonly
                      rows="2"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-state-success"
                      label="Sucesso"
                      state="success"
                      value="Texto válido"
                      rows="2"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-state-danger"
                      label="Erro"
                      state="danger"
                      value="Texto inválido"
                      rows="2"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-state-warning"
                      label="Aviso"
                      state="warning"
                      value="Revisar este texto"
                      rows="2"
                    ></br-textarea>
                  </div>

                  <h3 class="h6 mt-4">3. Contador e Valor Inicial</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>showCounter</code> (com <code>maxlength</code>) e
                      <code>value</code> inicial.</small
                    >
                  </p>
                  <div
                    class="p-3 border rounded mt-2 d-flex flex-column gap-3 bg-lightest"
                  >
                    <br-textarea
                      id="textarea-attr-counter"
                      label="Com Contador (max 150)"
                      show-counter
                      maxlength="150"
                      placeholder="Digite até 150 caracteres"
                      rows="3"
                    ></br-textarea>
                    <br-textarea
                      id="textarea-attr-value"
                      label="Com Valor Inicial"
                      value="Este é um texto inicial&#10;com quebra de linha."
                      rows="3"
                    ></br-textarea>
                  </div>

                  <h3 class="h6 mt-4">4. Layout Inline</h3>
                  <p class="card-text">
                    <small
                      >Demonstra <code>isInline</code> (pode precisar de ajustes CSS no
                      container).</small
                    >
                  </p>
                  <div class="p-3 border rounded mt-2 bg-lightest">
                    <br-textarea
                      id="textarea-attr-inline"
                      label="Label e Textarea Inline"
                      placeholder="Na mesma linha..."
                      is-inline
                      rows="2"
                    ></br-textarea>
                  </div>
                </div>
              </div>

              <!--Seção Upload -->
              <div class="card mb-5 shadow-sm" id="upload">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Upload</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="ms-auto message-feedback-compact"
                  ></br-message>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Componente para envio de arquivos. O atributo
                    <code>density</code> não é aplicável.
                  </p>
                  <div class="example-box p-3 border rounded mt-3 bg-body-tertiary">
                    <br-upload
                      id="upload-example-s-full"
                      label="Selecione ou arraste arquivos"
                      accept="image/*,application/pdf"
                      :disabled="false"
                      :multiple="false"
                      state="info"
                    ></br-upload>
                  </div>
                  <h3 class="h6 subsection-title">Exemplos com diferentes atributos</h3>
                  <div
                    class="example-box p-3 border rounded mt-3 d-flex flex-column gap-3 bg-body-tertiary"
                  >
                    <br-upload
                      id="upload-example-multiple"
                      label="Selecione múltiplos arquivos"
                      accept=".txt"
                      :multiple="true"
                      state="warning"
                    ></br-upload>
                    <br-upload
                      id="upload-example-disabled"
                      label="Upload desabilitado"
                      :disabled="true"
                      state="danger"
                    ></br-upload>
                    <br-upload
                      id="upload-example-success"
                      label="Upload para apenas imagens"
                      accept="image/*"
                      state="success"
                    ></br-upload>
                  </div>
                </div>
              </div>

              <!-- Seção Formulários -->
              <div class="card mb-5 shadow-sm" id="formularios">
                <div
                  class="card-header d-flex justify-content-between align-items-center"
                >
                  <h2 class="h1 mb-0">Formulários</h2>
                  <br-message
                    state="success"
                    message="Componente OK"
                    is-feedback
                    show-icon
                    class="me-3 message-feedback-compact"
                  ></br-message>
                </div>
                <br-message
                  v-if="cadastroSucesso"
                  state="success"
                  message-title="Sucesso!"
                  message="Usuário cadastrado com sucesso."
                  show-icon
                ></br-message>
                <br-message
                  v-if="cadastroErro"
                  state="danger"
                  message-title="Erro!"
                  message="Por favor, corrija os erros no formulário."
                  show-icon
                ></br-message>

                <div class="card-body">
                  <p class="card-text">
                    Exemplo de construção de formulário utilizando os componentes `br-*`.
                    Este exemplo demonstra um formulário de cadastro de usuário.
                  </p>
                  <h3 class="h6 subsection-title">Exemplo: Cadastro de Usuário</h3>
                  <div class="example-box p-3 border rounded mt-3 bg-body-tertiary">
                    <form @submit.prevent="cadastrarUsuario">
                      <div class="row g-3">
                        <div class="col-md-6">
                          <br-input
                            v-model="form.nome"
                            id="form-nome"
                            label="Nome Completo"
                            placeholder="Digite seu nome completo"
                            density="medium"
                            :state="erros.nome ? 'danger' : null"
                            required
                          ></br-input>
                          <br-message
                            v-if="erros.nome"
                            state="danger"
                            message="O nome é obrigatório e deve ter pelo menos 3 caracteres."
                            is-feedback
                            show-icon
                            class="mt-1"
                          ></br-message>
                        </div>
                        <div class="col-md-6">
                          <br-input
                            v-model="form.email"
                            id="form-email"
                            type="email"
                            label="Email"
                            placeholder="seuemail@dominio.com"
                            density="medium"
                            :state="erros.email ? 'danger' : null"
                            required
                          ></br-input>
                          <br-message
                            v-if="erros.email"
                            state="danger"
                            message="O email é obrigatório e deve ser válido."
                            is-feedback
                            show-icon
                            class="mt-1"
                          ></br-message>
                        </div>
                        <div class="col-md-6">
                          <br-input
                            v-model="form.senha"
                            id="form-senha"
                            type="password"
                            label="Senha"
                            placeholder="Crie uma senha"
                            density="medium"
                            :state="erros.senha ? 'danger' : null"
                            required
                          ></br-input>
                          <br-message
                            v-if="erros.senha"
                            state="danger"
                            message="A senha é obrigatória e deve ter pelo menos 8 caracteres."
                            is-feedback
                            show-icon
                            class="mt-1"
                          ></br-message>
                        </div>
                        <div class="col-md-6">
                          <br-input
                            v-model="form.confirmaSenha"
                            id="form-confirma-senha"
                            type="password"
                            label="Confirmar Senha"
                            placeholder="Repita a senha"
                            density="medium"
                            :state="erros.confirmaSenha ? 'danger' : null"
                            required
                          ></br-input>
                          <br-message
                            v-if="erros.confirmaSenha"
                            state="danger"
                            message="As senhas não coincidem."
                            is-feedback
                            show-icon
                            class="mt-1"
                          ></br-message>
                        </div>
                        <div class="col-md-6">
                          <br-select
                            v-model="form.estado"
                            id="form-estado"
                            label="Estado"
                            placeholder="Selecione seu estado"
                            density="medium"
                            :options="estadosOptionsString"
                            :state="erros.estado ? 'danger' : null"
                            required
                          ></br-select>
                          <br-message
                            v-if="erros.estado"
                            state="danger"
                            message="Selecione seu estado."
                            is-feedback
                            show-icon
                            class="mt-1"
                          ></br-message>
                        </div>
                        <div class="col-md-6 mb-2">
                          <p class="label mb-2">Gênero:</p>
                          <div class="d-flex flex-wrap gap-3">
                            <br-radio
                              v-model="form.genero"
                              name="genero"
                              value="M"
                              label="Masculino"
                            ></br-radio>
                            <br-radio
                              v-model="form.genero"
                              name="genero"
                              value="F"
                              label="Feminino"
                            ></br-radio>
                            <br-radio
                              v-model="form.genero"
                              name="genero"
                              value="O"
                              label="Outro"
                            ></br-radio>
                            <br-radio
                              v-model="form.genero"
                              name="genero"
                              value="N"
                              label="Prefiro não informar"
                            ></br-radio>
                          </div>
                        </div>
                        <div class="col-12 mb-2">
                          <br-upload
                            id="form-foto"
                            label="Foto de Perfil (Opcional)"
                            accept="image/*"
                            :multiple="false"
                            state="info"
                          ></br-upload>
                        </div>
                        <div class="col-12">
                          <br-checkbox
                            v-model="form.termos"
                            name="termos"
                            label="Li e aceito os termos de uso"
                            :state="erros.termos ? 'danger' : null"
                            required
                            class="mb-2"
                          ></br-checkbox>
                          <br-message
                            v-if="erros.termos"
                            state="danger"
                            message="Você deve aceitar os termos de uso."
                            is-feedback
                            show-icon
                            class="mt-1 mb-2"
                          ></br-message>
                          <br-switch
                            v-model="form.newsletter"
                            name="newsletter"
                            label="Desejo receber a newsletter"
                            label-position="right"
                          ></br-switch>
                        </div>
                      </div>
                      <br-divider class="my-4"></br-divider>
                      <div class="d-flex justify-content-end gap-3">
                        <br-button type="reset" emphasis="secondary">Limpar</br-button>
                        <br-button type="submit" emphasis="primary">Cadastrar</br-button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br-button
        v-if="showScrollTopButton"
        class="scroll-top-button"
        density="large"
        shape="circle"
        emphasis="primary"
        aria-label="Voltar ao topo"
        @click="scrollToTop"
      >
        <br-icon icon-name="fa6-solid:arrow-up"></br-icon>
      </br-button>
    </main>
  </div>
</template>

<style scoped>
/* 1. Utilitários de Gap */
.gap-1 {
  gap: 0.25rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 1rem;
}

.gap-4 {
  gap: 1.5rem;
}

.gap-5 {
  gap: 2rem;
}

/* 3. Estilos para Componentes dentro de Flex Containers */
.d-flex .br-input,
.d-flex .br-select,
.d-flex .br-textarea,
.d-flex.flex-column .br-input,
.d-flex.flex-column .br-select,
.d-flex.flex-column .br-textarea {
  flex-grow: 1;
  min-width: 180px;
}

.d-flex.flex-column > * {
  /* Garante que itens em coluna ocupem a largura */
  width: 100%;
}

/* 4. Estilos Gerais da Página */
.template-base {
  background-color: #f8f9fa;
  /* position: relative; REMOVIDO */
  min-height: 100vh;
  /* padding-top: 40px; REMOVIDO */
}

.main-content-showcase {
  margin: 0 auto;
}

.card {
  border: none;
}

.card-header {
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
  font-weight: 500;
  padding: 0.75rem 1rem;
}

/* 5. Estilos para Seções dentro do Card Body */
.subsection-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--bs-primary);
  margin-bottom: 0.35rem;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 0.35rem;
  margin-top: 2rem;
}

.card-body h3.subsection-title:first-of-type {
  margin-top: 1rem;
}

.subsection-description small,
.subsection-note small {
  font-size: 0.875em;
  color: #6c757d;
  display: block;
  margin-top: 0.1rem;
  margin-bottom: 0.75rem;
}

.subsection-note em {
  font-size: 0.9em;
  color: #6c757d;
  display: block;
}

/* 6. Estilos para as Caixas de Exemplo */
.example-box {
  border-color: #dee2e6 !important;
}

.example-box.p-3 {
  padding: 1.25rem !important;
}

.bg-dark {
  background-color: #212529 !important;
}

/* Remove background de .bg-lightest se .example-box já tem bg-body-tertiary */
.example-box.bg-lightest {
  background-color: var(--bs-body-tertiary) !important;
  /* Override para consistencia */
}

/* Caso especial onde bg-lightest é usado fora de um example-box */
.bg-lightest {
  background-color: #f8f9fa;
  /* Garante que ainda funcione se não for example-box */
}

/* 7. Estilos para Itens de Lista e Dropdown */
.br-list .br-item,
.br-dropdown .br-item {
  width: 100%;
}

.br-list br-item[is-interactive]:hover,
.br-dropdown br-item[role="menuitem"]:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* 8. Estilos para Breadcrumb e Código */
.card-body .br-breadcrumb {
  width: 100%;
  padding-bottom: 5px;
}

code {
  background-color: #e9ecef;
  padding: 0.15em 0.4em;
  border-radius: 0.25rem;
  font-size: 0.875em;
  color: #d63384;
}

/* 9. Estilos :deep() */
:deep(.meu-icone-colorido) {
  color: #42b883;
  font-size: 2rem;
  vertical-align: middle;
}

:deep(.meu-icone-colorido):hover {
  opacity: 0.7;
}

/* 10. Ajuste para altura do Divider vertical */
.vertical-divider-container {
  height: 50px;
  /* Altura do container flex */
  display: flex;
  align-items: center;
}

/* 11. Margem interna do Card Body */
.card-body {
  margin: 5px 15px;
  padding-bottom: 10px;
}

/* AJUSTE: Estilos para compactar o br-message no header */
.card-header .message-feedback-compact {
  /* font-size: 0.75em;   */
  margin-bottom: 0 !important;
  padding: 0.2rem 0.4rem !important;
  align-self: center;
}

/* Opcional: Ajustar tamanho do ícone dentro da mensagem compacta */
:deep(.message-feedback-compact .br-icon) {
  /* vertical-align: text-bottom; */
  /* Tentar alinhar melhor */
  /* Ajuste de tamanho se necessário */
  /* width: 1em; */
  /* height: 1em; */
}

/* AJUSTE: Estilos para a barra de navegação rápida */
[id] {
  scroll-margin-top: 260px;
}

.navigation-quicklinks {
  position: sticky;
  top: 0;
  /* Retorna ao topo 0, pois não há mais padding no pai */
  margin-bottom: 20px;
  z-index: 9999;
  /* Mantém alto, mas abaixo da tag de versão */
  background-color: #edf2f7;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navigation-quicklinks .br-button {
  margin: 2px;
}

/* AJUSTE: Estilos para o botão de voltar ao topo */
.scroll-top-button {
  position: fixed;
  /* Mantém a posição na tela */
  bottom: 20px;
  /* Distância do fundo */
  right: 20px;
  /* Distância da direita */
  z-index: 10000;
  /* Garante que fique acima de outros elementos */
  opacity: 0.8;
  /* Leve transparência (opcional) */
  transition: opacity 0.3s ease-in-out;
  /* Transição suave (opcional) */
}

.scroll-top-button:hover {
  opacity: 1;
  /* Opacidade total ao passar o mouse (opcional) */
}

/* AJUSTE: Estilos para a tag de versão */
.version-tag-container {
  position: fixed;
  top: 10px;
  /* Distância do topo da viewport */
  right: 65px;
  /* Distância da direita da viewport */
  z-index: 10001;
  /* Mais alto que a nav e o botão de scroll */
  display: flex;
  gap: 5px;
}

/* Aplica o background diretamente na tag usando :deep se necessário */
/* Ou use a classe .version-tag-content se preferir */
:deep(.version-tag-content.br-tag) {
  background-color: #edf2f7 !important;
  /* Cor da navegação */
  color: var(--text-color, #333);
  /* Garante contraste - ajuste se necessário */
  border: 1px solid #ccc;
  /* Adiciona uma borda sutil (opcional) */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* Sombra sutil (opcional) */
}
</style>
