<template>
  <section class="container mx-auto px-4 max-w-4xl">
    <!-- Mensagem de atenção -->
    <br-message state="info" show-icon class="mb-4">
      <strong class="font-semibold">Atenção:</strong> confira as informações abaixo!
    </br-message>

    <!-- Card de apresentação -->
    <div
      class="br-card rounder-md shadow-md py-2 px-6 bg-card-pesquisa text-gray-800 leading-relaxed"
    >
      <!-- <h2 class="text-xl font-bold mb-3">Sobre o Projeto</h2> -->
      <p>
        Este projeto é um <strong>showcase completo</strong> desenvolvido para demonstrar
        e testar os <em>webcomponents</em> criados com <strong>StencilJS</strong>.
      </p>
      <p class="mt-3">
        Inspirado em modelos modernos como o <strong>template AdminLTE</strong>, nossa
        intenção é fornecer uma <em>referência prática e elegante</em> para
        desenvolvedores.
      </p>
      <p class="mt-3">
        Com foco em <strong>integração, customização e reutilização</strong>, este projeto
        visa acelerar a adoção dos componentes em diferentes aplicações.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-card-pesquisa {
  background: linear-gradient(135deg, rgb(148, 226, 240, 0.36), rgb(1, 193, 214, 0.36));
}
</style>
