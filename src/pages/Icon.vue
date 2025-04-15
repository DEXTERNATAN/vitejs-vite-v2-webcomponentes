<template>
  <div class="icon-container" role="main">
    <h1>Icon</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-icon&gt;</code>, que permite
      utilizar uma ampla variedade de ícones vetoriais com opções de estilo, rotação e
      alinhamento.
    </p>

    <!-- Exemplo 1: Ícones com flip -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Flip (horizontal e vertical)</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <br-icon icon-name="fa6-solid:f" />
          <br-icon icon-name="fa6-solid:f" flip="horizontal" />
          <br-icon icon-name="fa6-solid:f" flip="vertical" />
        </div>
      </div>
    </div>

    <!-- Exemplo 2: Variações de fontes -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Fontes diferentes</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <br-icon icon-name="fa-brands:chromecast" />
          <br-icon icon-name="fa-regular:envelope" />
          <br-icon icon-name="fa-solid:camera" />
        </div>
      </div>
    </div>

    <!-- Exemplo 3: Ícone inline com texto -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Ícone inline com texto</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <p>
            Ícone alinhado
            <br-icon icon-name="fa-solid:eye" is-inline />
            verticalmente ao texto
          </p>
        </div>
      </div>
    </div>

    <!-- Exemplo 4: Rotação -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Rotação de ícones</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <br-icon icon-name="fa-solid:biking" />
          <br-icon icon-name="fa-solid:biking" rotate="90deg" />
          <br-icon icon-name="fa-solid:biking" rotate="180deg" />
          <br-icon icon-name="fa-solid:biking" rotate="270deg" />
        </div>
      </div>
    </div>

    <!-- Exemplo 5: Dimensões personalizadas -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Dimensões personalizadas</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <br-icon icon-name="fa-regular:comment-dots" width="72" height="48" />
        </div>
      </div>
    </div>

    <!-- Exemplo 6: Outras variações de propriedades -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Outras variações de uso</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly gap-4 mt-3 p-2">
          <!-- Ícone com customId -->
          <div class="text-center">
            <br-icon icon-name="fa-solid:id-badge" custom-id="user-icon-123" />
            <p class="mt-2 small">Custom ID: user-icon-123</p>
          </div>

          <!-- Ícone inline com texto -->
          <div class="text-center">
            <p>
              Alinhado ao texto:
              <br-icon icon-name="fa-solid:smile" is-inline />
            </p>
          </div>

          <!-- Ícone com width e height customizados -->
          <div class="text-center">
            <br-icon icon-name="fa-solid:compass" width="3rem" height="3rem" />
            <p class="mt-2 small">Tamanho 3rem × 3rem</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 7: Variação de cor -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Variação de cor</div>
      </div>
      <div class="card-content">
        <div class="d-flex flex-wrap justify-content-evenly mt-3 p-2">
          <div class="text-center">
            <br-icon
              icon-name="fa-solid:check-circle"
              css-classes="text-success"
              width="32"
              height="32"
            />
            <p class="mt-2 small">Verde (Sucesso)</p>
          </div>

          <div class="text-center">
            <br-icon
              icon-name="fa-solid:exclamation-triangle"
              css-classes="text-warning"
              width="32"
              height="32"
            />
            <p class="mt-2 small">Amarelo (Alerta)</p>
          </div>

          <div class="text-center">
            <br-icon
              icon-name="fa-solid:times-circle"
              css-classes="text-danger"
              width="32"
              height="32"
            />
            <p class="mt-2 small">Vermelho (Erro)</p>
          </div>

          <div class="text-center">
            <br-icon
              icon-name="fa-solid:info-circle"
              css-classes="text-primary"
              width="32"
              height="32"
            />
            <p class="mt-2 small">Azul (Informativo)</p>
          </div>

          <div class="text-center">
            <br-icon
              icon-name="fa-solid:bolt"
              css-classes="text-purple"
              width="32"
              height="32"
            />
            <p class="mt-2 small">Roxo (Energia)</p>
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
.icon-container {
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

/* Exemplo se não houver uma classe como text-purple no seu design system */
.text-purple {
  color: #8000ff;
}
</style>
