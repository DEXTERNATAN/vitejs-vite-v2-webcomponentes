<template>
  <div class="cores-container">
    <header class="page-header">
      <div class="framework-logo">
        <img src="https://vuejs.org/images/logo.png" alt="Vue.js Logo" class="vue-logo" />
      </div>
      <h1>Cores do Design System</h1>
      <p class="subtitle">Explore nossa paleta de cores e copie os valores facilmente</p>
    </header>

    <div class="controls-container">
      <div class="search-wrapper">
        <div class="search-input-container">
          <br-input
            type="text"
            v-model="searchTerm"
            id="inputButtonRight"
            placeholder="Buscar por nome, hex ou token..."
          >
            <br-icon
              slot="action"
              icon-name="fa-solid:search"
              height="16"
              aria-hidden="true"
            />
          </br-input>
          <p v-if="!searchTerm">Total de cores na paleta: {{ filteredColors.length }}</p>
          <p v-if="searchTerm && filteredColors.length !== 0">
            Total de cores encontradas na busca: {{ filteredColors.length }}
          </p>
        </div>
      </div>
    </div>

    <br-message
      v-if="mensagemVisivel"
      state="info"
      :message="mensagemTexto"
      is-inline
      is-closable
      show-icon
      aria-label="info: Cor copiada com sucesso"
      @click="mensagemVisivel = false"
    ></br-message>

    <br-message
      v-if="searchTerm && filteredColors.length === 0"
      state="warning"
      is-inline
      show-icon
      aria-label="info: Cor copiada com sucesso"
    >
      Nenhuma cor encontrada para a busca: "{{ searchTerm }}"
    </br-message>

    <div class="colors-grid" role="grid">
      <div
        v-for="color in filteredColors"
        :key="color.nome"
        class="color-card"
        :style="{ backgroundColor: color.hex }"
        @click="handleCardClick(color)"
        :class="{ 'card-clicked': clickedCard === color.nome }"
        role="gridcell"
        tabindex="0"
        @keypress.enter="handleCardClick(color)"
        :aria-label="'Cor ' + color.nome + '. Pressione Enter para copiar'"
      >
        <div class="color-preview" :style="{ backgroundColor: color.hex }"></div>
        <div class="color-info">
          <h3>{{ color.nome }}</h3>
          <p class="hex-value">{{ color.hex }}</p>
          <p class="token-value">{{ color.token }}</p>
          <span class="copy-hint">Clique para copiar</span>
        </div>
      </div>
    </div>

    <!-- <footer class="page-footer">
      <p>Total de cores: {{ filteredColors.length }}</p>
    </footer> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { colors } from "../data/cores";

const searchTerm = ref("");
const clickedCard = ref<string | null>(null);
const mensagemVisivel = ref(false);
const mensagemTexto = ref("");

const filteredColors = computed(() => {
  return colors.filter((color) => {
    const matchesSearch =
      !searchTerm.value ||
      color.nome.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      color.token?.toLowerCase().includes(searchTerm.value.toLowerCase());

    return matchesSearch;
  });
});

function handleCardClick(color: { nome: string; hex: string; token?: string }) {
  clickedCard.value = color.nome;

  const texto = `\nNome: ${color.nome}\nHexadecimal: ${color.hex}\nToken: ${
    color.token || "N/A"
  }`;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      mensagemTexto.value = `Cor copiada com sucesso!\n${texto}`;
      mensagemVisivel.value = true;
    })
    .catch((err) => {
      console.error("Erro ao copiar:", err);
      mensagemTexto.value = "Erro ao copiar a cor. Por favor, tente novamente.";
      mensagemVisivel.value = true;
    });

  setTimeout(() => {
    clickedCard.value = null;
  }, 500);
}
</script>

<style scoped>
.cores-container {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2rem;
  text-align: center;
}

.subtitle {
  color: #666;
  margin-top: 0.5rem;
}

.controls-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.search-wrapper {
  flex: 1;
  min-width: 300px;
}

.search-input-container {
  position: relative;
  width: 100%;
}

.search-input-container p {
  margin-top: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
}

@media (max-width: 1200px) {
  .colors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .colors-grid {
    grid-template-columns: 1fr;
  }

  .controls-container {
    flex-direction: column;
  }
}

.color-card {
  height: 180px;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.color-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.color-card:hover .copy-hint {
  opacity: 1;
}

.color-card:focus {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}

.card-clicked {
  animation: clickAnimation 0.5s ease;
}

.copy-hint {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

.color-info {
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  padding: 1rem;
  margin: -1.5rem;
  margin-top: auto;
}

.color-info h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.color-info p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-info p:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: currentColor;
  border-radius: 50%;
}

.framework-logo {
  margin-bottom: 1.5rem;
  text-align: center;
}

.vue-logo {
  height: 120px;
  width: auto;
}
</style>
