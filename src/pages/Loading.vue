<template>
  <div class="loading-container" role="main">
    <h1>Demonstração do Componente &lt;br-loading&gt;</h1>
    <p>
      Esta página demonstra diferentes usos do componente <code>&lt;br-loading&gt;</code>,
      utilizado para indicar visualmente o carregamento de dados ou o progresso de
      processos no sistema.
    </p>

    <br-message state="danger" show-icon class="mb-4">
      <ul class="mb-0">
        <li>
          O <code>v-model</code> não está funcionando corretamente no componente
          <code>&lt;br-loading&gt;</code>.
        </li>
        <li>
          A barra de progresso não atualiza dinamicamente e a animação fica inconsistente.
        </li>
      </ul>
    </br-message>

    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Loading Padrão com Texto</div>
      </div>
      <div class="card-content">
        <p class="mb-3">Exemplo básico de um loading com texto descritivo.</p>
        <div class="d-flex flex-wrap justify-content-evenly p-3">
          <br-loading label="Carregando dados..." is-medium />
        </div>
      </div>
    </div>

    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Loading com Barra de Progresso (Estático)</div>
      </div>
      <div class="card-content">
        <p class="mb-3">Exemplo de loading com barra de progresso, exibindo 100%.</p>
        <div class="d-flex flex-wrap justify-content-evenly p-3">
          <br-loading is-progress progress-percent="100" />
        </div>
      </div>
    </div>

    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Loading com Barra de Progresso (Dinâmico)</div>
      </div>
      <div class="card-content">
        <p class="mb-3">
          Exemplo de loading cuja barra de progresso é controlada dinamicamente.
        </p>
        <div class="d-flex flex-column align-items-center gap-3 mt-3 p-4">
          <br-loading
            is-progress
            :progress-percent="progress"
            :label="progress < MAX_PROGRESS ? 'Processando...' : 'Concluído!'"
          />
          <div class="d-flex gap-2 mt-2">
            <br-button
              type="button"
              :disabled="progress >= MAX_PROGRESS"
              @click="aumentarProgresso"
              density="small"
            >
              {{
                progress < MAX_PROGRESS
                  ? `Aumentar (${PROGRESS_INCREMENT}%)`
                  : "Completo!"
              }}
            </br-button>
            <br-button
              type="button"
              variant="secondary"
              density="small"
              :disabled="progress === 0"
              @click="resetarProgresso"
            >
              Resetar
            </br-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Exemplo 4: v-model de progresso -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Exemplo 4: v-model de progresso</div>
      </div>
      <div class="card-content">
        <br-message state="info" class="mb-4" show-icon>
          Controle de barra via <code>v-model</code>.
        </br-message>

        <br-loading
          is-progress
          :progress-percent="vmProgress"
          v-model="vmProgress"
          :label="`${vmProgress}%`"
        />

        <div class="d-flex gap-2 mt-3">
          <br-button
            type="button"
            density="small"
            :disabled="vmProgress >= MAX"
            @click="increment"
          >
            Aumentar ({{ vmProgress }}%)
          </br-button>
          <br-button
            type="button"
            density="small"
            variant="secondary"
            :disabled="vmProgress === 0"
            @click="vmProgress = 0"
          >
            Resetar
          </br-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// --- Constantes ---
const MAX_PROGRESS = 100;
const PROGRESS_INCREMENT = 10;
const INITIAL_PROGRESS = 0;

const MAX = 100;
const STEP = 10;
const vmProgress = ref(0);

// --- Estado Reativo ---
const progress = ref<number>(INITIAL_PROGRESS);

// --- Funções ---
const aumentarProgresso = () => {
  if (progress.value < MAX_PROGRESS) {
    progress.value = Math.min(progress.value + PROGRESS_INCREMENT, MAX_PROGRESS);
  }
};

const resetarProgresso = () => {
  progress.value = INITIAL_PROGRESS;
};

function increment() {
  vmProgress.value = Math.min(vmProgress.value + STEP, MAX);
}
</script>

<style scoped>
.loading-container {
  padding: 20px;
  max-width: 900px; /* Opcional: Limita a largura para melhor leitura */
  margin: auto; /* Opcional: Centraliza o container */
}

/*
  Sugestão: Verifique a documentação do <br-card>.
  Talvez seja possível usar slots (ex: <template #header>)
  ou props para definir o título e o conteúdo,
  reduzindo a necessidade das classes .screen-preview,
  .screen-header, .screen-title e .card-content.
*/
.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f5f5f5;
  overflow: hidden;
  margin-bottom: 1.5rem; /* Aumentei um pouco o espaçamento */
}

.screen-header {
  background-color: #1351b4; /* Cor GOV.BR Azul */
  color: white;
  padding: 12px 18px;
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

.card-content p {
  /* Estilo para parágrafos dentro do card */
  color: #555;
  font-size: 0.95rem;
}

/* Ajustes finos opcionais */
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}
</style>
