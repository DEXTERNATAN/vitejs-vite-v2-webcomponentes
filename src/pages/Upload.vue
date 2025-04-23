<template>
  <div class="upload-container" role="main">
    <h1>Upload</h1>
    <p>
      Esta página demonstra o uso do componente <code>&lt;br-upload&gt;</code>, com
      exemplos de estados, validação, preview, envio e loading.
    </p>

    <br-message
      show-icon
      class="mb-4"
      state="danger"
      message="V-model não está funcionando corretamente"
    />

    <!-- 1. Upload simples -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Upload simples</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly p-4">
        <br-upload label="Envio de arquivo"></br-upload>
      </div>
    </div>

    <!-- 2. Upload com validação e feedback -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Com validação e feedback</div>
      </div>
      <div class="card-content d-flex flex-column justify-content-evenly p-4">
        <br-upload
          label="Envio de arquivo"
          state="danger"
          accept="image/png, image/jpeg"
        ></br-upload>
        <br-message
          class="spacing-feedback mt-2"
          state="danger"
          is-feedback
          message="Os arquivos devem ser no formato PNG ou JPG e ter no máximo 100MB."
          show-icon
          aria-label="Os arquivos devem ser no formato PNG ou JPG e ter no máximo 100MB."
        ></br-message>
      </div>
    </div>

    <!-- 3. Upload múltiplo -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Upload múltiplo</div>
      </div>
      <div class="card-content d-flex flex-wrap justify-content-evenly p-4">
        <br-upload label="Envio de arquivos" multiple></br-upload>
      </div>
    </div>

    <!-- 4. Upload desabilitado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Upload desabilitado</div>
      </div>
      <div class="card-content d-flex flex-column justify-content-evenly p-4">
        <br-upload label="Envio de arquivo" disabled></br-upload>
        <br-message
          class="spacing-feedback mt-2"
          state="warning"
          is-feedback
          message="Upload desabilitado"
          show-icon
          aria-label="Upload desabilitado"
        ></br-message>
      </div>
    </div>

    <!-- 5. Upload com preview, validação e envio -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">5. Upload com preview e envio</div>
      </div>
      <div class="card-content d-flex flex-column justify-content-evenly p-4">
        <br-upload
          label="Selecione uma imagem (JPG ou PNG, até 5MB)"
          accept="image/png, image/jpeg"
          @change="handleFile"
          ref="uploadRef"
          multiple
        ></br-upload>

        <img
          v-if="previewUrl"
          :src="previewUrl"
          alt="Pré-visualização"
          class="img-preview mt-3"
        />

        <br-message
          v-if="mensagem"
          class="mt-2"
          :state="estadoMensagem"
          is-feedback
          :message="mensagem"
          show-icon
          :aria-label="mensagem"
        ></br-message>

        <button
          v-if="arquivoValido && !isLoading"
          class="br-button mt-3"
          @click="enviarArquivo"
        >
          Enviar arquivo
        </button>

        <div v-if="isLoading" class="mt-3">
          <br-loading label="Enviando arquivo..." is-medium></br-loading>
        </div>
      </div>
    </div>

    <!-- 6. Exemplo com v-model -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">6. Exemplo com v-model</div>
      </div>
      <div class="card-content d-flex flex-column justify-content-evenly p-4">
        <br-upload label="Envio via v-model" v-model="arquivos" multiple></br-upload>

        <p class="mt-3"><strong>Arquivos selecionados:</strong></p>
        <ul>
          <li v-for="file in arquivos" :key="file.name">
            {{ file.name }} — {{ (file.size / 1024 / 1024).toFixed(2) }} MB
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mensagem = ref("");
const estadoMensagem = ref<"success" | "danger" | "warning">("success");
const uploadRef = ref();
const previewUrl = ref("");
const arquivoSelecionado = ref<File | null>(null);
const isLoading = ref(false);
const arquivoValido = ref(false);

// Nova referência para v-model
const arquivos = ref<File[]>([]);

function handleFile(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  previewUrl.value = "";
  arquivoValido.value = false;
  mensagem.value = "";

  if (!file) return;

  const tiposPermitidos = ["image/jpeg", "image/png"];
  const tamanhoMaxMB = 5;

  if (!tiposPermitidos.includes(file.type)) {
    estadoMensagem.value = "danger";
    mensagem.value = "Formato inválido. Apenas JPG e PNG são permitidos.";
    return;
  }

  const tamanhoMB = file.size / (1024 * 1024);
  if (tamanhoMB > tamanhoMaxMB) {
    estadoMensagem.value = "danger";
    mensagem.value = "Arquivo muito grande. O limite é de 5MB.";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    previewUrl.value = reader.result as string;
  };
  reader.readAsDataURL(file);

  arquivoSelecionado.value = file;
  arquivoValido.value = true;
  estadoMensagem.value = "success";
  mensagem.value = `Arquivo "${file.name}" válido e pronto para envio.`;
}

async function enviarArquivo() {
  if (!arquivoSelecionado.value) return;

  isLoading.value = true;
  mensagem.value = "";
  previewUrl.value = "";

  const formData = new FormData();
  formData.append("file", arquivoSelecionado.value);

  try {
    const resposta = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    });

    if (!resposta.ok) throw new Error("Erro no envio.");

    estadoMensagem.value = "success";
    mensagem.value = "Arquivo enviado com sucesso!";
  } catch (err) {
    estadoMensagem.value = "danger";
    mensagem.value = "Erro ao enviar o arquivo. Tente novamente.";
  } finally {
    isLoading.value = false;
    arquivoSelecionado.value = null;
    arquivoValido.value = false;
    uploadRef.value?.clearFiles?.();
  }
}
</script>

<style scoped>
.upload-container {
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
.flex-column {
  flex-direction: column;
}
.justify-content-evenly {
  justify-content: space-evenly;
}
.p-4 {
  padding: 1.5rem;
}
.mt-2 {
  margin-top: 0.75rem;
}
.mt-3 {
  margin-top: 1rem;
}
.mb-4 {
  margin-bottom: 1.5rem;
}
.img-preview {
  max-width: 300px;
  max-height: 200px;
  border-radius: 6px;
  border: 1px solid #ccc;
  object-fit: contain;
}
</style>
