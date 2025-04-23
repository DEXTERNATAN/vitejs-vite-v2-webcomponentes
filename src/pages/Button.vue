<template>
  <div class="button-container" role="main">
    <h1>Button</h1>
    <p>
      Componente responsável por acionar ações e interações no sistema. Suporta diferentes
      variações de estilo, formato, densidade e estado.
    </p>

    <!-- Mensagem de feedback -->
    <br-message
      show-icon
      class="mb-4"
      state="danger"
      message="V-model não está funcionando corretamente"
    />

    <!-- 1. Densidade -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Exemplos de Densidade (Ênfase Secundária)</div>
      </div>
      <div class="card-content">
        <p class="card-text">Mostra o efeito do atributo <code>density</code>.</p>
        <div class="button-group">
          <br-button emphasis="secondary" density="small">Pequeno</br-button>
          <br-button emphasis="secondary" density="medium">Médio</br-button>
          <br-button emphasis="secondary" density="large">Grande</br-button>
        </div>
      </div>
    </div>

    <!-- 2. Ênfase e Tipo -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Exemplos de Ênfase e Tipo (Densidade Média)</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Mostra os atributos <code>emphasis</code> e <code>type</code>.
        </p>
        <div class="button-group">
          <br-button emphasis="primary" density="medium">Primário (button)</br-button>
          <br-button emphasis="secondary" density="medium">Secundário (button)</br-button>
          <br-button emphasis="tertiary" density="medium">Terciário (button)</br-button>
          <br-button emphasis="primary" type="submit" density="medium"
            >Enviar (submit)</br-button
          >
          <br-button emphasis="secondary" type="reset" density="medium"
            >Limpar (reset)</br-button
          >
        </div>
      </div>
    </div>

    <!-- 3. Estados e Modo Escuro -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Exemplos de Estados e Modo Escuro</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Mostra os estados <code>disabled</code>, <code>isLoading</code>,
          <code>isActive</code> e o modo <code>colorMode="dark"</code>.
        </p>
        <div class="button-group">
          <br-button emphasis="primary" density="medium" disabled>Desabilitado</br-button>
          <br-button emphasis="primary" density="medium" is-loading>Carregando</br-button>
          <br-button emphasis="secondary" density="medium" is-active>Ativo</br-button>
        </div>
        <div class="button-group dark-mode">
          <br-button emphasis="primary" density="medium" color-mode="dark"
            >Modo Escuro</br-button
          >
          <br-button emphasis="secondary" density="medium" color-mode="dark"
            >Modo Escuro</br-button
          >
        </div>
      </div>
    </div>

    <!-- 4. Formatos -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Exemplos de Formato (Densidade Média)</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Mostra o atributo <code>shape</code> (pill, circle, block).
        </p>
        <div class="button-group">
          <br-button emphasis="primary" density="medium" shape="pill"
            >Formato Pill</br-button
          >

          <!-- Corrigido: botão icônico com aria-label válido -->
          <br-button
            emphasis="secondary"
            density="medium"
            shape="circle"
            aria-label="Favoritar"
          >
            <br-icon icon-name="fa6-solid:heart" />
          </br-button>

          <br-button emphasis="secondary" density="medium">Formato Padrão</br-button>
        </div>

        <p class="card-text mt-3">
          <small
            >O formato <code>block</code> ocupa toda a largura disponível do
            container.</small
          >
        </p>
        <div class="button-group block-example">
          <br-button emphasis="primary" density="medium" shape="block"
            >Botão Block (Ocupa Largura)</br-button
          >
        </div>
      </div>
    </div>

    <!-- 5. Combinações Avançadas -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Combinações Avançadas</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Combinações de múltiplos atributos para cenários mais específicos.
        </p>
        <div class="button-group">
          <br-button emphasis="primary" density="medium" shape="pill" is-loading
            >Carregando (pill)</br-button
          >

          <!-- Corrigido: botão icônico com aria-label válido -->
          <br-button
            emphasis="secondary"
            density="medium"
            shape="circle"
            is-active
            color-mode="dark"
            aria-label="Favorito ativo escuro"
          >
            <br-icon icon-name="fa6-solid:star" />
          </br-button>

          <br-button
            emphasis="tertiary"
            density="large"
            shape="block"
            is-loading
            color-mode="dark"
          >
            Carregando Block Dark
          </br-button>

          <br-button emphasis="primary" density="small" disabled shape="block">
            Desabilitado Block
          </br-button>
        </div>
      </div>
    </div>

    <!-- 6. Exemplo de v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Exemplo de v-model</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Vinculação bidirecional de estado com <code>v-model</code>.
        </p>
        <!-- v-model no br-button -->
        <br-button v-model="pressed" emphasis="primary" density="medium">
          {{ pressed ? "Desativar" : "Ativar" }}
        </br-button>

        <p class="mt-3">
          Estado atual: <strong>{{ pressed }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pressed = ref(false);
</script>

<style scoped>
.button-container {
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

.button-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.dark-mode {
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.block-example {
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
</style>
