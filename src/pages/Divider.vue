<template>
  <div class="divider-container" role="main">
    <h1>Divider</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-divider&gt;</code>, utilizado
      para criar separações visuais entre conteúdos.
    </p>

    <br-message
      state="success"
      message="Nenhuma inconsistência encontrada neste componente."
      show-icon
      class="mb-4"
    />

    <!-- Exemplo 1: Divider padrão e modo escuro -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo básico e modo escuro</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly">
          <div class="row p-3">
            <div class="col">
              <p>
                O componente divider é uma linha neutra que separa conteúdos, sessões ou
                temas afins.
              </p>
              <br-divider class="my-3" />
              <p>
                Este é um exemplo do divider padrão com estilo solid e espessura small.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="bg-secondary-07 text-secondary-01 p-3">
                <p>
                  Em fundos escuros, o divider mantém sua funcionalidade de separação
                  visual e seu contraste garante boa visibilidade.
                </p>
                <br-divider class="my-3" is-dark-mode />
                <p>Este divider utiliza o modo escuro para adaptar-se ao fundo escuro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 2: Orientação vertical -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Divider vertical</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly">
          <div class="p-3 mb-2">
            <p>
              O divider vertical é útil para criar separações entre elementos que estão
              dispostos lado a lado.
            </p>
            <br-divider orientation="vertical" class="mx-3" />
            <p>Esta orientação é eficaz em layouts horizontais.</p>
          </div>

          <div class="bg-secondary-07 text-secondary-01 p-3">
            <p>
              Em fundos escuros, o divider vertical mantém sua função de separação e o
              contraste deve garantir que seja visível.
            </p>
            <br-divider orientation="vertical" is-dark-mode class="mx-3" />
            <p>Essa combinação cria uma separação elegante e clara.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 3: Estilo da borda -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Estilo da borda</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly">
          <div class="row">
            <div class="col">
              <p>
                O divider com estilo <strong>solid</strong> cria uma linha contínua e
                consistente.
              </p>
              <br-divider border-style="solid" class="my-3" />
              <p>Este estilo é o padrão e o mais utilizado.</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>
                O divider com estilo <strong>dashed</strong> traz um visual diferenciado.
              </p>
              <br-divider border-style="dashed" class="my-3" />
              <p>Útil para destacar quebras menos rígidas na estrutura do conteúdo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 4: Espessuras -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Espessura</div>
      </div>
      <div class="card-content">
        <div class="row p-3">
          <div class="col">
            <p>
              Espessura <strong>small</strong>: separação sutil entre conteúdos
              relacionados.
            </p>
            <br-divider thickness="small" class="my-3" />
            <p>Útil quando o distanciamento por si só não é suficiente.</p>
          </div>
          <div class="col">
            <p>Espessura <strong>medium</strong>: separação mais visível entre seções.</p>
            <br-divider thickness="medium" class="my-3" />
            <p>Equilibra visibilidade e discrição.</p>
          </div>
          <div class="col">
            <p>
              Espessura <strong>large</strong>: divisão forte entre blocos de conteúdo.
            </p>
            <br-divider thickness="large" class="my-3" />
            <p>Indicado para mudanças estruturais importantes.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 5: Bleed -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Divider com bleed</div>
      </div>
      <div class="card-content">
        <div class="panel">
          <div class="container mt-3">
            <p>Exemplo de um divider que ignora o padding do container pai:</p>
            <br-divider bleed />
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 6: Alinhamento de conteúdo -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Conteúdo no divider</div>
      </div>
      <div class="card-content">
        <div class="panel">
          <br-divider align="center">Conteúdo centralizado</br-divider>
          <br-divider align="right">Conteúdo à direita</br-divider>
          <br-divider align="left">Conteúdo à esquerda</br-divider>
        </div>
      </div>
    </div>

    <!-- Exemplo 7: Cores personalizadas -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Cores personalizadas</div>
      </div>
      <div class="card-content">
        <div class="row p-3">
          <div class="col">
            <p>Divider vermelho.</p>
            <br-divider color="#ff0000" class="my-3" />
            <p>Útil para destaques ou alertas visuais.</p>
          </div>
          <div class="col">
            <p>Divider verde.</p>
            <br-divider color="#00ff00" class="my-3" />
            <p>Representa sucesso ou aprovação.</p>
          </div>
          <div class="col">
            <p>Divider azul com foco em acessibilidade.</p>
            <br-divider
              color="#0000ff"
              class="my-3"
              aria-label="Separador azul decorativo"
            />
            <p>Inclui atributo <code>aria-label</code> para acessibilidade.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nenhuma lógica reativa necessária neste exemplo
</script>

<style scoped>
.divider-container {
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
