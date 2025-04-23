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

    <div class="colors-grid">
      <div
        v-for="color in filteredColors"
        :key="color.name"
        class="color-card"
        :style="{ backgroundColor: color.value }"
        @click="handleCardClick(color)"
        :class="{ 'card-clicked': clickedCard === color.name }"
      >
        <div class="color-info">
          <h3>{{ color.name }}</h3>
          <p>{{ color.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const searchTerm = ref("");
const clickedCard = ref<string | null>(null);

const colors = [
  { name: "Primary", value: "#007bff" },
  { name: "Secondary", value: "#6c757d" },
  { name: "Success", value: "#28a745" },
  { name: "Danger", value: "#dc3545" },
  { name: "Warning", value: "#ffc107" },
  { name: "Info", value: "#17a2b8" },
  { name: "Light", value: "#f8f9fa" },
  { name: "Dark", value: "#343a40" },
];

const filteredColors = computed(() => {
  return colors.filter(
    (color) =>
      color.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      color.value.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

function handleCardClick(color: { name: string; value: string }) {
  clickedCard.value = color.name;

  // Resetar o estado após a animação
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

.colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
}

.color-info p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>
