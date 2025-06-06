<template>
  <div class="avatar-container" role="main">
    <h1>Avatar</h1>
    <p>
      Esta página apresenta variações e usos do componente <code>&lt;br-avatar&gt;</code>,
      que permite representar usuários por meio de imagem, ícone ou iniciais. Também é
      possível ajustar densidade, acessibilidade e estados visuais.
    </p>

    <!-- Aviso sobre erro conhecido -->
    <br-message
      state="danger"
      message="Erro na dimensão do ícone quando utilizado com botão do tipo circle. Com propriedades width e height."
      show-icon
      class="mb-4"
    />

    <!-- Tipos principais -->
    <section aria-labelledby="tipo-avatar" class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">1. Tipos Principais (Densidade Média)</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Demonstração dos tipos <code>src</code>, <code>isIconic</code> e
          <code>text</code>.
        </p>
        <div class="avatar-group" role="group" aria-label="Avatares principais">
          <br-avatar
            src="https://picsum.photos/id/1062/80"
            density="medium"
            alt="Foto de perfil (mulher com câmera)"
            title="Tipo: src (Imagem)"
            aria-label="Avatar tipo imagem"
          />
          <br-avatar
            is-iconic
            density="medium"
            alt="Ícone de usuário genérico"
            title="Tipo: isIconic (Ícone)"
          />
          <br-avatar
            text="DG"
            density="medium"
            alt="Iniciais DG"
            title="Tipo: text (Letra)"
          />
        </div>
      </div>
    </section>

    <!-- Densidades -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">2. Variações de Densidade (Imagem)</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Demonstração dos tamanhos disponíveis via propriedade <code>density</code>.
        </p>
        <div class="avatar-group">
          <br-avatar
            src="https://picsum.photos/id/1062/80"
            density="small"
            title="Densidade: small"
            alt="Imagem pequena"
          />
          <br-avatar
            src="https://picsum.photos/id/1062/80"
            density="medium"
            title="Densidade: medium"
            alt="Imagem média"
          />
          <br-avatar
            src="https://picsum.photos/id/1062/80"
            density="large"
            title="Densidade: large"
            alt="Imagem grande"
          />
        </div>
      </div>
    </div>

    <!-- Estado desabilitado -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">3. Estado Desabilitado</div>
      </div>
      <div class="card-content">
        <p class="card-text">Demonstra o uso da propriedade <code>disabled</code>.</p>
        <div class="avatar-group">
          <br-avatar text="OK" density="medium" title="Habilitado" />
          <br-avatar text="OK" density="medium" disabled title="Desabilitado" />
          <br-avatar is-iconic density="medium" disabled title="Ícone desabilitado" />
        </div>
      </div>
    </div>

    <!-- Ajustes finos -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">4. Ajustes em Ícones</div>
      </div>
      <div class="card-content">
        <p class="card-text">
          Exemplo de personalização com <code>icon-width</code> e
          <code>icon-height</code>.
        </p>
        <div class="avatar-group">
          <br-avatar is-iconic density="large" title="Padrão" />
          <br-avatar
            is-iconic
            density="large"
            icon-width="32px"
            icon-height="32px"
            title="32px"
          />
          <br-avatar
            is-iconic
            density="large"
            icon-width="16px"
            icon-height="16px"
            title="16px"
          />
        </div>
        <p class="card-text mt-3">
          <small
            ><em>Dica: use <code>iconMarginTop</code> para ajustes verticais.</em></small
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.avatar-container {
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

.avatar-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
</style>
