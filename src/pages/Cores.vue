<template>
  <div class="cores-container">
    <h1>Cores do Design System</h1>

    <div class="search-container">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Buscar cor..."
        class="search-input"
      />
    </div>

    <br-message
      v-if="mensagemVisivel"
      type="success"
      role="status"
      aria-live="polite"
      class="mensagem-copiada"
    >
      Cor copiada: {{ mensagemTexto }}
    </br-message>

    <div class="colors-grid">
      <div
        v-for="color in filteredColors"
        :key="color.nome"
        class="color-card"
        :style="{ backgroundColor: color.hex }"
        @click="handleCardClick(color)"
        :class="{ 'card-clicked': clickedCard === color.nome }"
      >
        <div class="color-info">
          <h3>{{ color.nome }}</h3>
          <p>{{ color.hex }}</p>
        </div>
      </div>
    </div>
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
  return colors.filter(
    (color) =>
      color.nome.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

function handleCardClick(color: { nome: string; hex: string }) {
  clickedCard.value = color.nome;

  const texto = `${color.nome} - ${color.hex}`;
  navigator.clipboard.writeText(texto).then(() => {
    mensagemTexto.value = texto;
    mensagemVisivel.value = true;
    setTimeout(() => mensagemVisivel.value = false, 2000);
  }).catch((err) => {
    console.error("Erro ao copiar:", err);
  });

  setTimeout(() => {
    clickedCard.value = null;
  }, 500);
}
</script>

<style scoped>
.cores-container {
  padding: 2rem;
}

.search-container {
  margin: 2rem 0;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.mensagem-copiada {
  margin-bottom: 1rem;
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* fixando em 4 colunas */
  gap: 1rem;
}

.color-card {
  height: 150px;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}

.color-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-clicked {
  animation: clickAnimation 0.5s ease;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.color-info {
  width: 100%;
}

.color-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
}

.color-info p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.9;
  color: #fff;
}
</style>