<script setup lang="ts">
// Assumindo que os web components <br-*> estão registrados globalmente.
</script>

<template>
  <div class="template-base">
    <main class="d-flex flex-fill mb-5" id="main">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="main-content-showcase pt-4 px-sm-3">
              <h1 class="mb-3">Showcase de Componentes</h1>
              <p class="lead mb-5">Demonstração dos Web Componentes `br-*` (v. 2.0.0-next.26), focando nas 3 densidades (`small`, `medium`, `large`) quando aplicável e outros atributos relevantes.</p>

              {/* Seção Avatar */}
              <div class="card mb-4">
                <div class="card-header">
                  <h2 class="h5 mb-0">Avatar</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Exibe representações visuais (imagem, ícone ou letra). Atributos chave incluem:
                    <code>src</code> (imagem), <code>isIconic</code> (ícone), <code>text</code> (letra),
                    <code>density</code> (tamanho/espaçamento), <code>alt</code> (acessibilidade), e <code>disabled</code> (estado).
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade (Tipo: Letra)</h3>
                  <p class="card-text"><small>Mostra o efeito do atributo <code>density</code>.</small></p>
                  <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4">
                    <br-avatar text="S" density="small" alt="Avatar Pequeno (Letra S)" title="Densidade: small"></br-avatar>
                    <br-avatar text="M" density="medium" alt="Avatar Médio (Letra M)" title="Densidade: medium"></br-avatar>
                    <br-avatar text="L" density="large" alt="Avatar Grande (Letra L)" title="Densidade: large"></br-avatar>
                  </div>
                  <h3 class="h6 mt-4">2. Exemplos de Tipos e Estados (Densidade: Média)</h3>
                  <p class="card-text"><small>Mostra os tipos (<code>src</code>, <code>isIconic</code>) e o estado <code>disabled</code>, usando <code>density="medium"</code> como base.</small></p>
                  <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4">
                    <br-avatar src="https://picsum.photos/id/1027/80" density="medium" alt="Avatar Médio (Tipo Imagem - Cachorro)" title="Tipo: Imagem (src)"></br-avatar>
                    <br-avatar is-iconic density="medium" alt="Avatar Médio (Tipo Ícone)" title="Tipo: Ícone (isIconic)"></br-avatar>
                    <br-avatar src="https://picsum.photos/id/1005/80" density="medium" disabled alt="Avatar Médio Desabilitado (Tipo Imagem - Mulher)" title="Estado: Desabilitado (disabled)"></br-avatar>
                  </div>
                   <p class="card-text mt-3">
                     <small><em>Nota: O atributo <code>alt</code> é crucial para acessibilidade em avatares de imagem e ícone. Atributos como <code>iconWidth</code>, <code>iconHeight</code> e <code>iconMarginTop</code> permitem ajustes finos no tipo icônico.</em></small>
                   </p>
                </div>
              </div>

              {/* Seção Button */}
              <div class="card mb-4">
                <div class="card-header">
                  <h2 class="h5 mb-0">Button</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Botão para acionar ações. Atributos chave incluem:
                    <code>emphasis</code> (primary, secondary, tertiary), <code>density</code>, <code>disabled</code>,
                    <code>isLoading</code>, <code>isActive</code>, <code>shape</code> (pill, circle, block), <code>type</code> (button, submit, reset),
                    e <code>colorMode</code> (dark).
                  </p>
                  <h3 class="h6 mt-4">1. Exemplos de Densidade (Ênfase Secundária)</h3>
                  <p class="card-text"><small>Mostra o efeito do atributo <code>density</code>.</small></p>
                  <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4">
                    <br-button emphasis="secondary" density="small">Pequeno</br-button>
                    <br-button emphasis="secondary" density="medium">Médio</br-button>
                    <br-button emphasis="secondary" density="large">Grande</br-button>
                  </div>
                  <h3 class="h6 mt-4">2. Exemplos de Ênfase e Tipo (Densidade Média)</h3>
                   <p class="card-text"><small>Mostra os atributos <code>emphasis</code> e <code>type</code>.</small></p>
                  <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4">
                    <br-button emphasis="primary" density="medium">Primário (button)</br-button>
                    <br-button emphasis="secondary" density="medium">Secundário (button)</br-button>
                    <br-button emphasis="tertiary" density="medium">Terciário (button)</br-button>
                    <br-button emphasis="primary" type="submit" density="medium">Enviar (submit)</br-button>
                    <br-button emphasis="secondary" type="reset" density="medium">Limpar (reset)</br-button>
                  </div>
                  <h3 class="h6 mt-4">3. Exemplos de Estados e Modo (Densidade Média)</h3>
                  <p class="card-text"><small>Mostra os estados <code>disabled</code>, <code>isLoading</code>, <code>isActive</code> e o modo <code>colorMode="dark"</code>.</small></p>
                  <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4">
                     <br-button emphasis="primary" density="medium" disabled>Desabilitado</br-button>
                     <br-button emphasis="primary" density="medium" is-loading>Carregando</br-button>
                     <br-button emphasis="secondary" density="medium" is-active>Ativo</br-button>
                  </div>
                  <div class="bg-dark p-3 rounded mt-3">
                     <br-button emphasis="primary" density="medium" color-mode="dark">Modo Escuro</br-button>
                     <br-button emphasis="secondary" density="medium" color-mode="dark" class="ms-3">Modo Escuro</br-button>
                  </div>
                  <h3 class="h6 mt-4">4. Exemplos de Formato (Densidade Média)</h3>
                  <p class="card-text"><small>Mostra o atributo <code>shape</code> (pill, circle, block).</small></p>
                  <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-2 gap-4">
                     <br-button emphasis="primary" density="medium" shape="pill">Formato Pill</br-button>
                     <br-button emphasis="secondary" density="medium" shape="circle" aria-label="Formato Círculo">
                        <br-icon icon-name="fa6-solid:heart"></br-icon>
                     </br-button>
                      <br-button emphasis="secondary" density="medium" >Formato Padrão</br-button>
                  </div>
                   <p class="card-text mt-3"><small>O formato <code>block</code> ocupa toda a largura disponível do container.</small></p>
                   <div class="p-3 border rounded mt-2 bg-lightest">
                     <br-button emphasis="primary" density="medium" shape="block">Botão Block (Ocupa Largura)</br-button>
                   </div>
                </div>
              </div>

             {/* Seção Breadcrumb */}
             <div class="card mb-4">
               <div class="card-header">
                 <h2 class="h5 mb-0">Breadcrumb</h2>
               </div>
               <div class="card-body">
                  <p class="card-text">
                    Componente de navegação estrutural. Utiliza <code>crumbs</code>, um Array de objetos (ou JSON string) no formato <code>[{ label: string, url: string, active?: boolean, target?: string }]</code>. O <code>target</code> (ex: '_self', '_blank') define onde o link abre. O atributo <code>homeUrl</code> define o link da "Home" (padrão: '/'). Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">Exemplo 1: Caminho Longo e <code>homeUrl="/dashboard"</code></h3>
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
                 <h3 class="h6 mt-4">Exemplo 2: Com <code>homeUrl</code> padrão ('/') e <code>target</code></h3>
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

              {/* Seção Checkbox */}
              <div class="card mb-4">
                <div class="card-header">
                  <h2 class="h5 mb-0">Checkbox</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                      Componente para seleção de uma ou mais opções. Atributos chave: <code>name</code> (obrigatório),
                      <code>label</code> (ou slot), <code>checked</code>, <code>disabled</code>, <code>indeterminate</code>,
                      <code>state</code> (valid/invalid), <code>hasHiddenLabel</code>, <code>value</code>. Densidade não aplicável.
                  </p>
                  <h3 class="h6 mt-4">1. Estados Básicos</h3>
                  <p class="card-text"><small>Demonstra <code>checked</code> e <code>disabled</code>.</small></p>
                  <div class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4">
                      <br-checkbox name="basic-states-ck" label="Padrão"></br-checkbox>
                      <br-checkbox name="basic-states-ck" label="Marcado" checked></br-checkbox>
                      <br-checkbox name="basic-states-ck" label="Desabilitado" disabled></br-checkbox>
                      <br-checkbox name="basic-states-ck" label="Marcado Desabilitado" checked disabled></br-checkbox>
                  </div>
                  <h3 class="h6 mt-4">2. Estados Indeterminado e Validação</h3>
                  <p class="card-text"><small>Demonstra <code>indeterminate</code> e <code>state</code>.</small></p>
                  <div class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4">
                      <br-checkbox name="inter-valid-states-ck" label="Indeterminado" indeterminate></br-checkbox>
                      <br-checkbox name="inter-valid-states-ck" label="Válido" checked state="valid"></br-checkbox>
                      <br-checkbox name="inter-valid-states-ck" label="Inválido" state="invalid"></br-checkbox>
                  </div>
                  <h3 class="h6 mt-4">3. Visibilidade e Conteúdo do Label</h3>
                   <p class="card-text"><small>Demonstra <code>hasHiddenLabel</code> e uso de slot para label.</small></p>
                  <div class="d-flex flex-wrap justify-content-start align-items-center p-3 border rounded mt-2 gap-4">
                      <br-checkbox name="label-vis-slot-ck" has-hidden-label aria-label="Checkbox com Label Oculto"></br-checkbox>
                      <span>(Label Oculto)</span>
                      <br-checkbox name="label-vis-slot-ck">
                          <span slot="label">Label <strong>via Slot</strong></span>
                      </br-checkbox>
                  </div>
                   <p class="card-text mt-3">
                     <small><em>Nota: O atributo <code>value</code> é usado para envio em formulários, não afeta a aparência. <code>name</code> é obrigatório.</em></small>
                   </p>
                </div>
              </div>

              {/* Seção Checkgroup */}
              <div class="card mb-4">
                <div class="card-header">
                  <h2 class="h5 mb-0">Checkgroup</h2>
                </div>
                <div class="card-body">
                  <p class="card-text">
                      Agrupa múltiplos <code>br-checkbox</code>, provendo um controle mestre. Atributos chave:
                      <code>label</code> (título do grupo), <code>labelSelecionado</code> (texto mestre qdo selecionado, padrão: 'Desselecionar tudo'),
                      <code>labelDesselecionado</code> (texto mestre qdo não selecionado, padrão: 'Selecionar tudo'),
                      <code>indeterminate</code> (força estado visual indeterminado no mestre). Densidade não aplicável.
                  </p>
                   <h3 class="h6 mt-4">1. Exemplo Básico (Labels Padrão)</h3>
                   <p class="card-text"><small>Master control inicia com 'Selecionar tudo'.</small></p>
                  <div class="p-3 border rounded mt-2">
                    <br-checkgroup label="Opções Disponíveis (Padrão)">
                      <br-checkbox name="cg-default" label="Item 1" class="mb-1"></br-checkbox>
                      <br-checkbox name="cg-default" label="Item 2" class="mb-1"></br-checkbox>
                      <br-checkbox name="cg-default" label="Item 3"></br-checkbox>
                    </br-checkgroup>
                  </div>
                  <h3 class="h6 mt-4">2. Labels Customizados e Estado Inicial</h3>
                  <p class="card-text"><small>Textos do master control alterados e um item pré-selecionado.</small></p>
                  <div class="p-3 border rounded mt-2">
                    <br-checkgroup
                      label="Minhas Tarefas (Custom)"
                      label-selecionado="Desmarcar Tarefas"
                      label-desselecionado="Marcar Tarefas"
                    >
                      <br-checkbox name="cg-custom" label="Tarefa A" class="mb-1"></br-checkbox>
                      <br-checkbox name="cg-custom" label="Tarefa B" class="mb-1" checked></br-checkbox>
                      <br-checkbox name="cg-custom" label="Tarefa C"></br-checkbox>
                    </br-checkgroup>
                  </div>
                  <h3 class="h6 mt-4">3. Estado Indeterminado Forçado</h3>
                  <p class="card-text"><small>Usando o atributo <code>indeterminate</code> no grupo.</small></p>
                   <div class="p-3 border rounded mt-2">
                     <br-checkgroup
                       label="Seleção Parcial (Forçada)"
                       indeterminate
                     >
                       <br-checkbox name="cg-indet" label="Opção X" class="mb-1"></br-checkbox>
                       <br-checkbox name="cg-indet" label="Opção Y" class="mb-1"></br-checkbox>
                       <br-checkbox name="cg-indet" label="Opção Z"></br-checkbox>
                     </br-checkgroup>
                   </div>
                    <p class="card-text mt-3">
                     <small><em>Nota: A aparência do estado indeterminado no controle mestre depende da implementação visual do componente.</em></small>
                   </p>
                </div>
              </div>


              {/* Seção Collapse (REVISADA) */}
              <div class="card mb-4">
                   <div class="card-header d-flex justify-content-between align-items-center">
                    <h2 class="h5 mb-0">Collapse</h2>
                     <span class="badge bg-warning text-dark">Problema no CSS (?)</span>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                        Pode ser simples (independente) ou agrupado como Accordion (usando <code>accordion-group</code>).
                        Atributos: <code>open</code> (inicia aberto), <code>icon-position</code>, <code>icon-to-show</code>, <code>icon-to-hide</code>.
                        Densidade se aplica aos itens internos (ex: <code>br-item</code>).
                    </p>

                    <h3 class="h6 mt-4">1. Exemplo Accordion</h3>
                    <p class="card-text"><small>Apenas um item aberto por vez no grupo "acc-1".</small></p>
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
                    <p class="card-text"><small>Sem <code>accordion-group</code>, cada um abre/fecha livremente.</small></p>
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
                    <p class="card-text"><small>Demonstra <code>icon-position</code> e ícones customizados.</small></p>
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
              {/* Fim da Seção Collapse Revisada */}

              {/* Seção Divider */}
              <div class="card mb-4">
                  <div class="card-header d-flex justify-content-between align-items-center">
                    <h2 class="h5 mb-0">Divider</h2>
                    <span class="badge bg-warning text-dark">Problema no CSS (?)</span>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Separador de conteúdo. O atributo `density` não é aplicável.</p>
                    <div class="p-3 border rounded mt-3">
                      <p>Conteúdo A</p>
                      <br-divider class="my-3"></br-divider>
                      <p>Conteúdo B</p>
                    </div>
                  </div>
                </div>

              {/* Seção Dropdown */}
                <div class="card mb-4">
                   <div class="card-header d-flex justify-content-between align-items-center">
                    <h2 class="h5 mb-0">Dropdown</h2>
                     <span class="badge bg-warning text-dark">Ajustar Responsividade (?)</span>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Menu suspenso. A densidade se aplica aos `br-item` internos. Abaixo, um Dropdown com itens de densidade small, medium e large.</p>
                    <div class="p-3 border rounded mt-3">
                       <br-dropdown>
                        <br-button slot="trigger" aria-label="Abrir menu de opções">Opções <br-icon icon-name="fa6-solid:caret-down"></br-icon></br-button>
                        <br-list slot="target">
                          <br-item role="menuitem" density="small"><br-icon slot="start" icon-name="fa6-solid:compress"></br-icon> Item Pequeno</br-item>
                          <span class="br-divider my-1"></span>
                          <br-item role="menuitem" density="medium"><br-icon slot="start" icon-name="fa6-solid:arrows-left-right"></br-icon> Item Médio</br-item>
                           <span class="br-divider my-1"></span>
                          <br-item role="menuitem" density="large"><br-icon slot="start" icon-name="fa6-solid:expand"></br-icon> Item Grande</br-item>
                        </br-list>
                      </br-dropdown>
                    </div>
                  </div>
                </div>

              {/* Seção Icon */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Icon</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Exibe ícones. O atributo `density` não é aplicável (tamanho controlado por `size`, `width`, `height` ou CSS).</p>
                    <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-3 gap-4">
                      <br-icon icon-name="fa6-solid:star" size="sm" aria-label="Ícone Pequeno"></br-icon>
                      <br-icon icon-name="fa6-solid:star" aria-label="Ícone Médio (padrão)"></br-icon>
                      <br-icon icon-name="fa6-solid:star" size="lg" aria-label="Ícone Grande"></br-icon>
                    </div>
                  </div>
                </div>

              {/* Seção Input */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Input</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Campo de entrada de texto. Três exemplos, um para cada densidade.</p>
                     <div class="p-3 border rounded mt-3 d-flex flex-column gap-3">
                       <br-input id="input-small-density-i-full" label="Input Pequeno" placeholder="Densidade: small" density="small"></br-input>
                       <br-input id="input-medium-density-i-full" label="Input Médio" placeholder="Densidade: medium" density="medium"></br-input>
                       <br-input id="input-large-density-i-full" label="Input Grande" placeholder="Densidade: large" density="large"></br-input>
                     </div>
                  </div>
                </div>

              {/* Seção Item */}
                 <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Item</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Item individual de lista/menu. Três exemplos standalone, um para cada densidade.</p>
                    <div class="p-3 border rounded mt-3 d-flex flex-column gap-2">
                       <br-item density="small"><br-icon slot="start" icon-name="fa6-solid:compress"></br-icon>Item Pequeno<span slot="end">S</span></br-item>
                       <br-divider class="my-1"></br-divider>
                       <br-item density="medium"><br-icon slot="start" icon-name="fa6-solid:arrows-left-right"></br-icon>Item Médio<span slot="end">M</span></br-item>
                       <br-divider class="my-1"></br-divider>
                       <br-item density="large"><br-icon slot="start" icon-name="fa6-solid:expand"></br-icon>Item Grande<span slot="end">L</span></br-item>
                    </div>
                  </div>
                </div>

              {/* Seção List */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">List</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Agrupador de Itens. A densidade se aplica aos `br-item` internos. Abaixo, uma Lista com itens de densidade small, medium e large.</p>
                    <div class="p-3 border rounded mt-3">
                      <br-list role="list" header="Lista com Densidades Variadas">
                          <br-item role="listitem" density="small"><br-icon slot="start" icon-name="fa6-solid:compress"></br-icon>Item Pequeno<span slot="end">S</span></br-item>
                          <span class="br-divider my-1"></span>
                           <br-item role="listitem" density="medium"><br-icon slot="start" icon-name="fa6-solid:arrows-left-right"></br-icon>Item Médio<span slot="end">M</span></br-item>
                          <span class="br-divider my-1"></span>
                           <br-item role="listitem" density="large"><br-icon slot="start" icon-name="fa6-solid:expand"></br-icon>Item Grande<span slot="end">L</span></br-item>
                       </br-list>
                    </div>
                  </div>
                </div>

              {/* Seção Loading */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Loading</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Indicador de carregamento. O atributo `density` não é aplicável.</p>
                    <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-3 gap-5">
                       <br-loading label="Carregando..." is-medium></br-loading>
                    </div>
                  </div>
                </div>

              {/* Seção Message */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Message</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Exibe mensagens de feedback/alerta. O atributo `density` não é aplicável.</p>
                     <div class="d-flex flex-column p-3 border rounded mt-3 gap-2">
                       <br-message state="info" is-feedback message="Mensagem informativa." show-icon aria-label="Informação"></br-message>
                    </div>
                  </div>
                </div>

              {/* Seção Radio */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Radio</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Componente de seleção única. O atributo `density` não é aplicável.</p>
                    <div class="p-3 border rounded mt-3">
                        <p class="label mb-1">Opção Única:</p>
                        <br-radio class="mb-1" name="radio-single-example-s-full" value="opt1-s-full" label="Alternativa 1"></br-radio>
                    </div>
                  </div>
                </div>

              {/* Seção Select */}
                 <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Select</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Campo de seleção suspensa. Três exemplos, um para cada densidade.</p>
                    <div class="p-3 border rounded mt-3 d-flex flex-column gap-3">
                       <br-select id="select-small-density-s-full" label="Select Pequeno" placeholder="Densidade: small" density="small" options='[{ "label": "Opção S", "value": "s" }]'></br-select>
                       <br-select id="select-medium-density-s-full" label="Select Médio" placeholder="Densidade: medium" density="medium" options='[{ "label": "Opção M", "value": "m" }]'></br-select>
                       <br-select id="select-large-density-s-full" label="Select Grande" placeholder="Densidade: large" density="large" options='[{ "label": "Opção L", "value": "l" }]'></br-select>
                     </div>
                  </div>
                </div>

              {/* Seção Switch */}
                 <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Switch</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Controle liga/desliga. Três exemplos, um para cada densidade.</p>
                    <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-3 gap-4">
                      <br-switch id="switch-small-density-sw-full" density="small" label="Switch Pequeno"></br-switch>
                      <br-switch id="switch-medium-density-sw-full" density="medium" label="Switch Médio"></br-switch>
                      <br-switch id="switch-large-density-sw-full" density="large" label="Switch Grande"></br-switch>
                    </div>
                  </div>
                </div>

              {/* Seção Tag */}
                 <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Tag</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Etiqueta informativa. Três exemplos (tag simples), um para cada densidade.</p>
                     <div class="d-flex flex-wrap justify-content-evenly align-items-center p-3 border rounded mt-3 gap-3">
                       <br-tag label="Tag Pequena" density="small" color="bg-gray-30"></br-tag>
                       <br-tag label="Tag Média" density="medium" color="bg-gray-30"></br-tag>
                       <br-tag label="Tag Grande" density="large" color="bg-gray-30"></br-tag>
                     </div>
                  </div>
                </div>

              {/* Seção Textarea */}
                 <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Textarea</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Campo de texto multilinha. Três exemplos, um para cada densidade.</p>
                     <div class="p-3 border rounded mt-3 d-flex flex-column gap-3">
                       <br-textarea id="textarea-small-density-t-full" label="Textarea Pequena" placeholder="Densidade: small" density="small" rows="2"></br-textarea>
                       <br-textarea id="textarea-medium-density-t-full" label="Textarea Média" placeholder="Densidade: medium" density="medium" rows="2"></br-textarea>
                       <br-textarea id="textarea-large-density-t-full" label="Textarea Grande" placeholder="Densidade: large" density="large" rows="2"></br-textarea>
                     </div>
                  </div>
                </div>

              {/* Seção Upload */}
               <div class="card mb-4">
                  <div class="card-header">
                    <h2 class="h5 mb-0">Upload</h2>
                  </div>
                  <div class="card-body">
                    <p class="card-text">Componente para envio de arquivos. O atributo `density` não é aplicável.</p>
                    <div class="p-3 border rounded mt-3">
                       <br-upload label="Selecione ou arraste arquivos" id="upload-example-s-full"></br-upload>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 1rem; }
.gap-4 { gap: 1.5rem; }
.gap-5 { gap: 2rem; }

.mb-4 { margin-bottom: 1.5rem !important; }
.mb-5 { margin-bottom: 3rem !important; }
.mt-4 { margin-top: 1.5rem !important; }
.mt-3 { margin-top: 1rem !important; }
.mt-2 { margin-top: 0.5rem !important; }
.ms-3 { margin-left: 1rem !important; }


.d-flex .br-input,
.d-flex .br-select,
.d-flex .br-textarea,
.d-flex.flex-column .br-input,
.d-flex.flex-column .br-select,
.d-flex.flex-column .br-textarea {
  flex-grow: 1;
  width: 100%;
  min-width: 150px;
}

.card-header .badge { font-size: 0.75em; }

.main-content-showcase {
  max-width: 1200px;
  margin: 0 auto;
}

.card-body .br-breadcrumb {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 5px;
}

.d-flex.justify-content-evenly {
    justify-content: space-around !important;
}
.d-flex.align-items-center {
    align-items: center !important;
}
.d-flex.align-items-end {
    align-items: flex-end !important;
}

.d-flex.flex-column > * {
    width: 100%;
}

.card-body h3.h6 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.25rem;
    margin-top: 1.5rem;
}
.card-body h3.h6:first-of-type {
    margin-top: 1rem;
}


.card-body p.card-text > small {
    font-size: 0.875em;
    color: #6c757d;
    display: block;
    margin-top: 0.1rem;
    margin-bottom: 0.5rem;
}
.card-body p.card-text > em {
    font-size: 0.85em;
    color: #6c757d;
    display: block;
}

.br-list .br-item, .br-dropdown .br-item {
    width: 100%;
    display: flex;
}

.bg-dark {
  background-color: #343a40 !important;
}

.bg-lightest {
    background-color: #f8f9fa;
}

.d-flex > span {
    font-style: italic;
    color: #6c757d;
    margin-left: -0.5rem;
    margin-right: 1rem;
}

</style>