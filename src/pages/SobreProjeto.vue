<template>
  <div
    class="sobre-projeto container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
    aria-labelledby="titulo-principal"
  >
    <h1 id="titulo-principal">Sobre o Projeto</h1>

    <br-message state="info" show-icon class="mb-4">
      <strong class="font-semibold">Nota:</strong> Veja abaixo os principais recursos
      utilizados nesta aplicação.
    </br-message>

    <div class="br-card bg-card-pesquisa text-gray-800 leading-relaxed mb-4 py-2 px-6">
      <p>
        Este projeto é um <strong>showcase completo</strong> desenvolvido para demonstrar
        a utilização de <em>webcomponents</em> dentro de uma aplicação Vue 3 com Vite,
        aplicando o Design System do Governo.
      </p>
    </div>

    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Tecnologias Utilizadas</div>
      </div>
      <div class="card-content">
        <section
          aria-labelledby="tech-vue"
          class="tecnologia-item mb-4"
          data-testid="tech-vue"
        >
          <h2 id="tech-vue" class="text-xl font-bold text-primary mb-2">
            Framework Principal
          </h2>
          <p class="mb-2">
            <strong>Vue.js 3</strong> - Framework progressivo para construção de
            interfaces de usuário.
          </p>
          <p class="text-secondary">
            Framework JavaScript que permite a construção de interfaces de usuário
            complexas com uma arquitetura baseada em componentes reativos.
          </p>
          <div class="mt-3">
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              <i class="fas fa-external-link-alt mr-1" aria-hidden="true"></i>
              Documentação Vue.js
            </a>
          </div>
        </section>

        <section
          aria-labelledby="tech-vite"
          class="tecnologia-item mb-4"
          data-testid="tech-vite"
        >
          <h2 id="tech-vite" class="text-xl font-bold text-primary mb-2">Build Tool</h2>
          <p class="mb-2">
            <strong>Vite</strong> - Ferramenta de build moderna e rápida para
            desenvolvimento frontend.
          </p>
          <p class="text-secondary">
            Ferramenta de compilação que oferece um ambiente de desenvolvimento
            extremamente rápido graças ao seu servidor de desenvolvimento com Hot Module
            Replacement.
          </p>
          <div class="mt-3">
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              <i class="fas fa-external-link-alt mr-1" aria-hidden="true"></i>
              Documentação Vite
            </a>
          </div>
        </section>

        <section
          aria-labelledby="tech-ds"
          class="tecnologia-item mb-4"
          data-testid="tech-ds"
        >
          <h2 id="tech-ds" class="text-xl font-bold text-primary mb-2">Design System</h2>
          <p class="mb-2">
            <strong>Design System</strong> (versão 3.6.1) - Sistema de design para manter
            consistência visual.
          </p>
          <p class="text-secondary">
            Sistema completo de design do governo, o GovBR, que define padrões,
            componentes e estilos para garantir uma experiência de usuário consistente.
          </p>
          <div class="mt-3">
            <a
              href="https://www.gov.br/ds/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              <i class="fas fa-external-link-alt mr-1" aria-hidden="true"></i>
              Documentação GovBR
            </a>
          </div>
        </section>

        <section
          aria-labelledby="tech-wc"
          class="tecnologia-item mb-4"
          data-testid="tech-wc"
        >
          <h2 id="tech-wc" class="text-xl font-bold text-primary mb-2">Web Components</h2>
          <p class="mb-2">
            <strong>Web Components</strong> (versão 2.0.0-next.40) - Biblioteca de
            componentes reutilizáveis.
          </p>
          <p class="text-secondary">
            Coleção de componentes web padronizados e reutilizáveis que fazem parte do
            Design System (GovBR) e podem ser incorporados em qualquer aplicação web
            independente do framework.
          </p>
          <div class="mt-3">
            <a
              href="https://govbr-ds.gitlab.io/bibliotecas/wbc/govbr-ds-wbc/docs/webcomponents/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              <i class="fas fa-external-link-alt mr-1" aria-hidden="true"></i>
              Documentação Web Components
            </a>
          </div>
        </section>
      </div>
    </div>

    <!-- Seção de Recursos Adicionais -->
    <div class="br-card screen-preview mb-4">
      <div class="screen-header">
        <div class="screen-title">Recursos Adicionais</div>
      </div>
      <div class="card-content">
        <section aria-labelledby="resources" class="tecnologia-item mb-4">
          <h2 id="resources" class="text-xl font-bold text-primary mb-2">
            Como Contribuir
          </h2>
          <p class="mb-2">
            Este projeto é open source e aceita contribuições da comunidade. Para
            contribuir:
          </p>
          <ol class="list-decimal pl-5 mb-4">
            <li class="mb-1">Faça um fork do repositório</li>
            <li class="mb-1">
              Crie uma branch para sua feature (<code
                >git checkout -b feature/nova-feature</code
              >)
            </li>
            <li class="mb-1">
              Faça commit das suas alterações (<code
                >git commit -m 'Adiciona nova feature'</code
              >)
            </li>
            <li class="mb-1">
              Faça push para a branch (<code>git push origin feature/nova-feature</code>)
            </li>
            <li>Abra um Pull Request</li>
          </ol>

          <h3 class="text-lg font-bold text-primary mb-2">Links Úteis</h3>
          <ul class="list-disc pl-5">
            <li class="mb-1">
              <a
                href="https://github.com/seu-usuario/seu-repositorio"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                Repositório no GitHub
              </a>
            </li>
            <li class="mb-1">
              <a
                href="https://www.gov.br/ds/docs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                Guia de Estilo GovBR
              </a>
            </li>
            <li>
              <a
                href="https://vuejs.org/guide/introduction.html"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                Guia Vue.js
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log('Página "Sobre o Projeto" carregada.');
});
</script>

<style scoped>
.sobre-projeto {
  padding-top: 20px;
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

.tecnologia-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.tecnologia-item:last-child {
  border-bottom: none;
}

.text-primary {
  color: #1351b4;
}

.text-secondary {
  color: #666666;
}

.bg-card-pesquisa {
  background: linear-gradient(135deg, rgba(148, 226, 240, 0.36), rgba(1, 193, 214, 0.36));
}

.code-example {
  font-family: monospace;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .sobre-projeto {
    padding-top: 10px;
  }

  .card-content {
    padding: 15px;
  }

  .tecnologia-item {
    padding: 10px;
  }
}
</style>
