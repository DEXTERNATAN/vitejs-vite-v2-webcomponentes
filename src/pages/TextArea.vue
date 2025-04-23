<template>
  <div class="textarea-container" role="main">
    <h1>Textarea</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-textarea&gt;</code>, que
      permite a inserção de textos em múltiplas linhas com diferentes estados visuais,
      densidades e recursos adicionais.
    </p>

    <br-message
      state="danger"
      message="As propriedades row e col não estão podendo ser definidas."
      show-icon
      class="mb-4"
    />

    <!-- Grupo 1: Densidade -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Variações de Densidade</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly p-4">
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
        ></br-textarea>
      </div>
    </div>

    <!-- Grupo 2: Com contador de caracteres -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Com contador de caracteres</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly p-4">
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
    </div>

    <!-- Grupo 3: Label à esquerda (inline) com ajuda -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Inline com ajuda</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly p-4">
        <br-textarea
          is-inline
          density="small"
          state="success"
          label="Label a esquerda"
          placeholder="Exemplo de textarea com sucesso"
        >
          <p class="text-base mt-1">Texto auxiliar ao preenchimento.</p>
        </br-textarea>
      </div>
    </div>

    <!-- Grupo 4: Estados visuais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Estados visuais</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly p-4">
        <br-textarea
          state="success"
          density="small"
          class="mr-2"
          placeholder="Exemplo de textarea com sucesso"
        ></br-textarea>

        <br-textarea
          state="danger"
          density="large"
          class="mr-2"
          placeholder="Exemplo de textarea com erro"
        ></br-textarea>

        <br-textarea
          density="large"
          class="mr-2"
          disabled
          placeholder="Exemplo de textarea desabilitado"
        ></br-textarea>
      </div>
    </div>

    <!-- Grupo 5: Validação dinâmica com feedback -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Interação com validação dinâmica</div>
      </div>
      <div class="card-content p-4">
        <br-textarea
          label="Comentário"
          placeholder="Digite ao menos 10 caracteres..."
          v-model="comentario"
          @input="validarComentario"
          :state="comentarioState"
        ></br-textarea>

        <p
          class="mt-2"
          :style="{ color: comentarioState === 'danger' ? '#c53030' : '#2e7d32' }"
        >
          {{ mensagemValidacao }}
        </p>
      </div>
    </div>

    <!-- Grupo 6: Exemplo básico com v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Exemplo básico com v-model</div>
      </div>
      <div class="card-content p-4">
        <br-textarea
          label="Textarea (v-model)"
          placeholder="Digite algo aqui..."
          v-model="texto"
        ></br-textarea>
        <p class="mt-2">
          Você digitou: <strong>{{ texto }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const comentario = ref("");
const comentarioState = ref<"success" | "danger" | undefined>(undefined);
const mensagemValidacao = ref("");

const texto = ref(""); // nova ref para v-model básico

function validarComentario() {
  if (comentario.value.trim().length < 10) {
    comentarioState.value = "danger";
    mensagemValidacao.value = "Comentário muito curto. Mínimo de 10 caracteres.";
  } else {
    comentarioState.value = "success";
    mensagemValidacao.value = "Comentário válido!";
  }
}
</script>

<style scoped>
.textarea-container {
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

.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-content-evenly {
  justify-content: space-evenly;
}

.p-4 {
  padding: 1.5rem;
}

.mr-2 {
  margin-right: 1rem;
}

.mt-1 {
  margin-top: 0.5rem;
}

.mt-2 {
  margin-top: 0.75rem;
}
</style>
