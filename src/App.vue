<script setup lang="ts">
// import Breadcrumb from './components/BreadCrumb.vue';
// import Footer from './components/Footer.vue';
// import Header from './components/Header.vue';
// import Menu from './components/Menu.vue';
</script>

<template>
  <div className="template-base">
    <!-- <Header></Header> -->

    <main class="d-flex flex-fill mb-5" id="main">
      <div class="container-fluid">
        <div className="row">
          <!-- <div className="col-sm-4 col-lg-3">
              <Menu></Menu>  
          </div> -->
          <div class="col mb-5">
            <!-- <Breadcrumb /> -->
            <div class="main-content pl-sm-3 mt-4" id="main-content">
              <!-- Habilitar as rotas depois -->
              <!-- <router-view></router-view> -->
            </div>
            <div class="main-content pl-sm-3 mt-4" id="main-content">
              <h1>TESTE DE COMPONENTES NA 2.0.0-next.26 DOS WEB COMPONENTES</h1>
              <p>
                <b>Avatar</b>&nbsp;
                <span style="color: red; font-weight: bold"
                  >(NÃO RENDERIZA)</span
                >
              </p>
              <hr />
              <div
                class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4"
              >
                <br-avatar
                  alt="Lorem ipsum"
                  src="https://picsum.photos/400"
                  density="small"
                ></br-avatar>
              </div>

              <p><b>Button</b></p>
              <hr />
              <div
                class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4"
              >
                <br-button id="small" emphasis="secondary" density="small"
                  >Densidade Alta</br-button
                >
                <br-button id="medium" emphasis="primary"
                  >Densidade Padrão</br-button
                >
                <br-button id="large" emphasis="secondary" density="large"
                  >Densidade Baixa</br-button
                >
              </div>

              <p><b>Checkbox</b></p>
              <hr />
              <div
                class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4"
              >
                <br-checkbox
                  id="ckb-1"
                  name="h-checkbox-1"
                  label="Horizontal 1"
                ></br-checkbox>
                <br-checkbox
                  id="ckb-2"
                  name="h-checkbox-2"
                  label="Horizontal 2"
                ></br-checkbox>
                <br-checkbox
                  id="ckb-3"
                  name="h-checkbox-3"
                  label="Horizontal 3"
                ></br-checkbox>
              </div>

              <p><b>Checkgroup</b></p>
              <hr />
              <div
                class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4"
              >
                <br-checkgroup
                  label="Lista de opções"
                  label-selecionado="Selecionar tudo"
                  label-desselecionado="Desselecionar tudo"
                >
                  <br-checkbox
                    id="ckb-1"
                    name="h-checkbox-1"
                    label="Opção 1"
                    class="mb-1"
                  ></br-checkbox>
                  <br-checkbox
                    id="ckb-2"
                    name="h-checkbox-2"
                    label="Opção 2"
                  ></br-checkbox>
                </br-checkgroup>
              </div>

              <p>
                <b>Collapse</b>&nbsp;
                <span style="color: red; font-weight: bold"
                  >(PROBLEMA NO CSS)</span
                >
              </p>
              <hr />
              <div
                class="d-flex flex-wrap justify-content-evenly mt-5 mb-4 p-4"
              >
                <div class="br-list">
                  <br-collapse accordion-group="group-01">
                    <span slot="trigger">Rótulo 01</span>
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Sub-item
                    </br-item>
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Sub-item
                    </br-item>
                  </br-collapse>

                  <br-collapse accordion-group="group-01">
                    <span slot="trigger">Rótulo 02</span>
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Sub-item
                    </br-item>
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Sub-item
                    </br-item>
                  </br-collapse>
                </div>
              </div>

              <p>
                <b>Divider</b>&nbsp;
                <span style="color: red; font-weight: bold"
                  >(PROBLEMA NO CSS)</span
                >
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <div class="row p-3">
                  <div class="col">
                    <p>
                      O componente divider é uma linha neutra que separa
                      conteúdos, sessões ou temas afins.
                    </p>
                    <br-divider class="my-3"></br-divider>
                    <p>
                      Este é um exemplo do divider padrão com estilo solid e
                      espessura small.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                <b>Dropdown</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <p>Clique no menu abaixo para abrir o dropdown.</p>
                <br-dropdown>
                  <br-button slot="trigger" shape="circle">
                    <br-icon icon-name="fa6-solid:ellipsis-vertical"></br-icon>
                  </br-button>
                  <br-list slot="target" list-title="Título (opcional)">
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Texto principal
                      <span slot="end">META</span>
                    </br-item>
                    <span class="br-divider"></span>
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Texto principal
                      <span slot="end">META</span>
                    </br-item>
                    <span class="br-divider"></span>
                    <br-item>
                      <br-icon
                        slot="start"
                        icon-name="fa6-solid:heart-pulse"
                      ></br-icon>
                      Texto principal
                      <span slot="end">META</span>
                    </br-item>
                    <span class="br-divider"></span>
                  </br-list>
                </br-dropdown>
              </div>

              <p>
                <b>Icon</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-icon icon-name="fa-solid:biking"></br-icon>
                <br-icon icon-name="fa-solid:biking" rotate="90deg"></br-icon>
                <br-icon icon-name="fa-solid:biking" rotate="180deg"></br-icon>
                <br-icon icon-name="fa-solid:biking" rotate="270deg"></br-icon>
                <br-icon
                  icon-name="fa-regular:comment-dots"
                  width="72"
                  height="48"
                ></br-icon>
              </div>

              <p>
                <b>Input</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-input
                  id="small"
                  label="Densidade alta"
                  placeholder="Densidade alta"
                  density="small"
                  class="mr-2"
                ></br-input>
                <br-input
                  id="medium"
                  label="Densidade padrão"
                  placeholder="Densidade padrão"
                  density="medium"
                  class="mr-2"
                ></br-input>
                <br-input
                  id="large"
                  label="Densidade baixa"
                  placeholder="Densidade baixa"
                  density="large"
                  class="mr-2"
                ></br-input>
                <br-input
                  id="highlight"
                  label="Destaque"
                  placeholder="Destaque"
                  is-highlight
                >
                  <br-icon
                    slot="icon"
                    icon-name="fa-solid:user"
                    aria-hidden="true"
                  ></br-icon>
                  <br-icon
                    slot="action"
                    icon-name="fa-solid:search"
                    aria-hidden="true"
                  ></br-icon>
                </br-input>
              </div>

              <p>
                <b>Item</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-item>
                  <br-icon
                    slot="start"
                    icon-name="fa6-solid:heart-pulse"
                  ></br-icon>
                  Densidade baixa
                  <span slot="end">META</span>
                </br-item>
                <br-item density="medium">
                  <br-icon
                    slot="start"
                    icon-name="fa6-solid:heart-pulse"
                  ></br-icon>
                  Densidade padrão
                  <span slot="end">META</span>
                </br-item>
                <br-item density="small">
                  <br-icon
                    slot="start"
                    icon-name="fa6-solid:heart-pulse"
                  ></br-icon>
                  Densidade alta
                  <span slot="end">META</span>
                </br-item>
              </div>

              <p>
                <b>List</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-list role="list" header="Densidade alta (padrão)">
                  <br-item role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                  <br-item role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                  <br-item role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                </br-list>

                <br-list role="list" header="Densidade média">
                  <br-item density="middle" role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                  <br-item density="middle" role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                  <br-item density="middle" role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                </br-list>

                <br-list role="list" header="Densidade baixa">
                  <br-item density="small" role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                  <br-item density="small" role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                  <br-item density="small" role="listitem">
                    <br-icon
                      slot="start"
                      icon-name="fa6-solid:heart-pulse"
                    ></br-icon>
                    Texto principal
                    <span slot="end">META</span>
                  </br-item>
                  <span class="br-divider"></span>
                </br-list>
              </div>

              <p>
                <b>Loading</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-loading label="Carregando..." is-medium></br-loading>
              </div>
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-loading is-progress progress-percent="100"></br-loading>
              </div>

              <p>
                <b>Message</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-message
                  state="success"
                  is-feedback
                  message="Campo correto."
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                ></br-message>
                <br-message
                  state="warning"
                  is-feedback
                  message="A tecla CAPS-LOCK está ativada."
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                ></br-message>
                <br-message
                  state="danger"
                  is-feedback
                  message="O CPF deve conter apenas dígitos."
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                ></br-message>
                <br-message
                  state="info"
                  is-feedback
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                >
                  <span
                    >Os arquivos devem ser no formato PNG, JPG, PDF e ter no
                    máximo 1GB.</span
                  >
                </br-message>
              </div>
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-message
                  state="success"
                  message-title="Success!"
                  message="Campo correto."
                  is-inline
                  is-closable
                  auto-remove
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                ></br-message>
                <br-message
                  state="warning"
                  message-title="Warning!"
                  is-inline
                  auto-remove
                  message="This is a warning message."
                  is-closable
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                ></br-message>
                <br-message
                  state="danger"
                  message-title="Error!"
                  is-inline
                  message="Something went wrong."
                  is-closable
                  auto-remove
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                ></br-message>
                <br-message
                  message-title="Informação."
                  is-inline
                  is-closable
                  auto-remove
                  show-icon
                  aria-label="Mensagem do aria-label para acessibilidade"
                >
                  <span
                    >Seus dados só serão salvos após o preenchimento do primeiro
                    campo do formulário.</span
                  >
                </br-message>
              </div>

              <p>
                <b>Radio</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <p class="label mb-0">Rótulo</p>
                <p class="help-text">Informações adicionais</p>
                <br-radio class="mb-1" name="radio-group" value="option1"
                  >Option 1</br-radio
                >
                <br-radio class="mb-1" name="radio-group" value="option2"
                  >Option 2</br-radio
                >
                <br-radio class="mb-1" name="radio-group" value="option3"
                  >Option 3</br-radio
                >
                <br-radio class="mb-1" name="radio-group" value="option4"
                  >Option 4</br-radio
                >
              </div>

              <p>
                <b>Select</b>
              </p>
              <hr />
              <div class="d-flex justify-content-evenly mt-5 p-4">
                <br-select
                  show-search-icon
                  label="Label"
                  placeholder="Selecione uma opção"
                  options='[
                { "label": "Opção 1", "value": "1", "selected": false },
                { "label": "Opção 2", "value": "2", "selected": false },
                { "label": "Opção 3", "value": "3", "selected": false }
              ]'
                ></br-select>
              </div>
              <div class="d-flex justify-content-evenly mt-5 p-4">
                <br-select
                  label="Label"
                  select-all-label="Marcar Todos"
                  unselect-all-label="Desmarcar todos"
                  show-search-icon
                  is-multiple
                  placeholder="Selecione uma opção"
                  options='[
                { "label": "Opção 1", "value": "1", "selected": false },
                { "label": "Opção 2", "value": "2", "selected": false },
                { "label": "Opção 3", "value": "3", "selected": false }
              ]'
                ></br-select>
              </div>

              <p>
                <b>Switch</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-switch id="switch-small" density="small" checked
                  >Densidade Alta</br-switch
                >
                <br-switch id="switch-medium" checked
                  >Densidade Média (Padrão)</br-switch
                >
                <br-switch id="switch-large" checked density="large"
                  >Densidade Baixa</br-switch
                >
              </div>

              <p>
                <b>Tag</b>
              </p>
              <hr />
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-tag
                  label="Texto e Ícone"
                  color="bg-orange-vivid-50"
                  icon-name="fa-solid:car"
                  density="small"
                ></br-tag>
                <br-tag
                  label="Texto"
                  color="bg-green-warm-vivid-50"
                  density="large"
                ></br-tag>
                <br-tag
                  label="Jhon Doe"
                  color="bg-indigo-warm-vivid-50"
                  density="large"
                ></br-tag>
              </div>
              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-tag label="1" color="bg-danger" shape="rounded"></br-tag>
                <br-tag label="10" color="bg-danger" shape="rounded"></br-tag>
                <br-tag label="130" color="bg-danger" shape="rounded"></br-tag>
                <br-tag label="999+" color="bg-danger" shape="rounded"></br-tag>
              </div>

              <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
                <br-tag label="1" color="bg-danger" shape="rounded"></br-tag>
                <br-tag label="10" color="bg-danger" shape="rounded"></br-tag>
                <br-tag label="130" color="bg-danger" shape="rounded"></br-tag>
                <br-tag label="999+" color="bg-danger" shape="rounded"></br-tag>
              </div>
            </div>

            <p>
              <b>Textarea</b>
            </p>
            <hr />
            <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
              <br-textarea
                label="Densidade baixa"
                density="small"
                class="mr-2"
                placeholder="Digite somente números"
              ></br-textarea>
              <br-textarea
                label="Densidade alta"
                density="large"
                class="mr-2"
                placeholder="Digite somente números"
              >
              </br-textarea>
            </div>
            <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
              <br-textarea
                class="mr-2"
                show-counter
                density="small"
                maxlength="100"
                label="Textarea com contador"
                defaultId="meu-textarea-contador"
                placeholder="Digite somente números"
              ></br-textarea>
            </div>

            <p>
              <b>Upload</b>
            </p>
            <hr />
            <div class="d-flex flex-wrap justify-content-evenly mt-5 p-4">
              <br-upload label="Envio de arquivo"></br-upload>
            </div>
            <div class="d-flex flex-column justify-content-evenly mt-5 p-4">
              <br-upload
                label="Envio de arquivo"
                state="danger"
                accept="image/png, image/jpeg"
              ></br-upload>
              <br-message
                class="spacing-feedback"
                state="danger"
                is-feedback
                message="Os arquivos devem ser no formato PNG ou JPG e ter no máximo 100MB."
                show-icon
                aria-label="Os arquivos devem ser no formato PNG ou JPG e ter no máximo 100MB."
              ></br-message>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- <Footer></Footer> -->
  </div>
</template>
