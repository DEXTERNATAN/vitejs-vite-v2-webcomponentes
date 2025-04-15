<template>
  <div class="telas-container" role="main">
    <h1>Telas de Exemplo</h1>

    <!-- Seção de Telas de Login -->
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="br-card">
          <div class="card-header">
            <h2>Telas de Login</h2>
          </div>
          <div class="card-content">
            <div class="row">
              <div class="col-md-6">
                <div class="screen-preview">
                  <div class="screen-header">
                    <div class="screen-title">Login Padrão</div>
                  </div>
                  <div class="screen-body">
                    <div class="login-form">
                      <div class="br-input mb-3">
                        <br-input
                          id="login-email"
                          type="email"
                          label="E-mail"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                      <div class="br-input input-button mb-3">
                        <br-input
                          id="login-password"
                          type="password"
                          label="Senha"
                          placeholder="Digite sua senha"
                        />
                      </div>
                      <div class="d-flex justify-content-between mb-3">
                        <div class="br-checkbox">
                          <input id="remember-me" type="checkbox" />
                          <label for="remember-me">Lembrar-me</label>
                        </div>
                        <a href="#" class="text-primary">Esqueceu a senha?</a>
                      </div>
                      <br-button emphasis="primary" shape="block">Entrar</br-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="screen-preview">
                  <div class="screen-header">
                    <div class="screen-title">Login com Redes Sociais</div>
                  </div>
                  <div class="screen-body">
                    <div class="login-form">
                      <div class="br-input mb-3">
                        <br-input
                          id="login-email-2"
                          type="email"
                          label="E-mail"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                      <div class="br-input input-button mb-3">
                        <br-input
                          id="login-password-2"
                          type="password"
                          label="Senha"
                          placeholder="Digite sua senha"
                        />
                      </div>
                      <button class="br-button primary block mb-3">Entrar</button>
                      <div class="divider">
                        <span>ou entre com</span>
                      </div>
                      <div class="social-login">
                        <br-button shape="circle" aria-label="Entrar com Google">
                          <i class="fab fa-google" aria-hidden="true"></i>
                        </br-button>
                        <br-button shape="circle" aria-label="Entrar com Facebook">
                          <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </br-button>
                        <br-button shape="circle" aria-label="Entrar com Twitter">
                          <i class="fab fa-twitter" aria-hidden="true"></i>
                        </br-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de Telas de Dashboard -->
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="br-card">
          <div class="card-header">
            <h3>Telas de Dashboard</h3>
          </div>
          <div class="card-content">
            <div class="row">
              <div class="col-md-6">
                <div class="screen-preview">
                  <div class="screen-header">
                    <div class="screen-title">Dashboard Principal</div>
                  </div>
                  <div class="screen-body">
                    <div class="dashboard-layout">
                      <div class="dashboard-header">
                        <div class="dashboard-title">Bem-vindo, Usuário</div>
                        <div class="dashboard-actions">
                          <button class="br-button circle" aria-label="Notificações">
                            <i class="fas fa-bell" aria-hidden="true"></i>
                          </button>
                          <button class="br-button circle" aria-label="Configurações">
                            <i class="fas fa-cog" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                      <div class="dashboard-stats">
                        <div class="stat-card">
                          <div class="stat-icon">
                            <i class="fas fa-users" aria-hidden="true"></i>
                          </div>
                          <div class="stat-info">
                            <div class="stat-value">1,234</div>
                            <div class="stat-label">Usuários</div>
                          </div>
                        </div>
                        <div class="stat-card">
                          <div class="stat-icon">
                            <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                          </div>
                          <div class="stat-info">
                            <div class="stat-value">567</div>
                            <div class="stat-label">Pedidos</div>
                          </div>
                        </div>
                        <div class="stat-card">
                          <div class="stat-icon">
                            <i class="fas fa-chart-line" aria-hidden="true"></i>
                          </div>
                          <div class="stat-info">
                            <div class="stat-value">R$ 12.345</div>
                            <div class="stat-label">Receita</div>
                          </div>
                        </div>
                      </div>
                      <div class="dashboard-chart">
                        <canvas id="salesChart"></canvas>
                      </div>
                      <div class="dashboard-table">
                        <canvas id="performanceChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="screen-preview">
                  <div class="screen-header">
                    <div class="screen-title">Dashboard de Análise</div>
                  </div>
                  <div class="screen-body">
                    <div class="dashboard-layout">
                      <div class="dashboard-header">
                        <div class="dashboard-title">Análise de Desempenho</div>
                        <div class="dashboard-filter">
                          <br-select
                            density="small"
                            show-search-icon
                            label="Label"
                            placeholder="Selecione uma opção"
                            options='[
                              { "label": "Últimos 7 dias", "value": "7", "selected": false },
                              { "label": "Últimos 30 dias", "value": "30", "selected": false },
                              { "label": "Últimos 90 dias", "value": "90", "selected": false }
                            ]'
                          ></br-select>
                        </div>
                      </div>
                      <div class="dashboard-chart-large">
                        <!-- <div class="chart-placeholder">Gráfico de Desempenho</div> -->
                        <canvas id="analysisChart"></canvas>
                      </div>
                      <div class="dashboard-metrics">
                        <div class="metric-card">
                          <div class="metric-title">Taxa de Conversão</div>
                          <div class="metric-value">3.2%</div>
                          <div class="metric-change positive">+0.5%</div>
                        </div>
                        <div class="metric-card">
                          <div class="metric-title">Tempo Médio</div>
                          <div class="metric-value">2m 45s</div>
                          <div class="metric-change negative">-15s</div>
                        </div>
                        <div class="metric-card">
                          <div class="metric-title">Taxa de Rejeição</div>
                          <div class="metric-value">42%</div>
                          <div class="metric-change negative">+2%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de Telas de Formulários -->
    <div class="row">
      <div class="col-md-12">
        <div class="br-card">
          <div class="card-header">
            <h3>Telas de Formulários</h3>
          </div>
          <div class="card-content">
            <div class="row">
              <div class="col-md-6">
                <div class="screen-preview">
                  <div class="screen-header">
                    <div class="screen-title">Formulário de Cadastro</div>
                  </div>
                  <div class="screen-body">
                    <div class="form-layout">
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="form-name"
                            type="text"
                            label="Nome Completo"
                            placeholder="Digite seu nome completo"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="form-email"
                            type="email"
                            label="E-mail"
                            placeholder="seu.email@exemplo.com"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="form-cpf"
                            type="text"
                            label="CPF"
                            placeholder="000.000.000-00"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="form-phone"
                            type="text"
                            label="Telefone"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="form-address"
                            type="text"
                            label="Endereço"
                            placeholder="Rua, número, complemento"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class="br-input">
                            <br-input
                              id="form-city"
                              type="text"
                              label="Cidade"
                              placeholder="Sua cidade"
                            />
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="br-input">
                            <br-select
                              id="form-state"
                              density="small"
                              show-search-icon
                              label="Estado"
                              placeholder="Selecione uma opção"
                              options='[
                                { "label": "Selecione", "value": "" },
                                { "label": "São Paulo", "value": "SP" },
                                { "label": "Rio de Janeiro", "value": "RJ" },
                                { "label": "Minas Gerais", "value": "MG" }
                              ]'
                            ></br-select>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="form-zip"
                            type="text"
                            label="CEP"
                            placeholder="00000-000"
                          />
                        </div>
                      </div>
                      <div class="form-actions">
                        <button class="br-button secondary">Cancelar</button>
                        <button class="br-button primary">Cadastrar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="screen-preview">
                  <div class="screen-header">
                    <div class="screen-title">Formulário de Pesquisa</div>
                  </div>
                  <div class="screen-body">
                    <div class="form-layout">
                      <div class="form-group">
                        <div class="br-input">
                          <br-input
                            id="search-query"
                            type="text"
                            label="Termo de Pesquisa"
                            placeholder="Digite o que você procura"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="form-label d-block mb-2">Categorias</label>
                        <div class="d-flex flex-column gap-2">
                          <br-checkbox
                            class="mb-1"
                            id="cat-1"
                            name="categorias"
                            label="Eletrônicos"
                          />
                          <br-checkbox
                            class="mb-1"
                            id="cat-2"
                            name="categorias"
                            label="Roupas"
                          />
                          <br-checkbox
                            class="mb-1"
                            id="cat-3"
                            name="categorias"
                            label="Livros"
                          />
                          <br-checkbox
                            class="mb-1"
                            id="cat-4"
                            name="categorias"
                            label="Esportes"
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <label>Faixa de Preço</label>
                        <div class="price-range">
                          <div class="br-input">
                            <br-input
                              id="price-min"
                              type="number"
                              label="Mín"
                              placeholder="Mín"
                            />
                          </div>
                          <span>até</span>
                          <div class="br-input">
                            <br-input
                              id="price-max"
                              type="number"
                              label="Máx"
                              placeholder="Máx"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-label d-block mb-2">Ordenar por</label>
                        <div class="d-flex flex-column gap-2">
                          <br-radio
                            class="mb-1"
                            id="sort-1"
                            name="sort"
                            value="relevancia"
                            label="Relevância"
                          />
                          <br-radio
                            class="mb-1"
                            id="sort-2"
                            name="sort"
                            value="menor-maior"
                            label="Preço: Menor para Maior"
                          />
                          <br-radio
                            class="mb-1"
                            id="sort-3"
                            name="sort"
                            value="maior-menor"
                            label="Preço: Maior para Menor"
                          />
                          <br-radio
                            class="mb-1"
                            id="sort-4"
                            name="sort"
                            value="avaliacoes"
                            label="Avaliações"
                          />
                        </div>
                      </div>

                      <!-- <div class="form-group">
                        <label>Ordenar por</label>
                        <div class="br-radio">
                          <input id="sort-1" type="radio" name="sort" />
                          <label for="sort-1">Relevância</label>
                        </div>
                        <div class="br-radio">
                          <input id="sort-2" type="radio" name="sort" />
                          <label for="sort-2">Preço: Menor para Maior</label>
                        </div>
                        <div class="br-radio">
                          <input id="sort-3" type="radio" name="sort" />
                          <label for="sort-3">Preço: Maior para Menor</label>
                        </div>
                        <div class="br-radio">
                          <input id="sort-4" type="radio" name="sort" />
                          <label for="sort-4">Avaliações</label>
                        </div>
                      </div> -->
                      <div class="form-actions">
                        <button class="br-button secondary">Limpar</button>
                        <button class="br-button primary">Pesquisar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

onMounted(() => {
  // Gráfico de Vendas (Barra)
  const salesCtx = document.getElementById("salesChart") as HTMLCanvasElement;
  new Chart(salesCtx, {
    type: "bar",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [
        {
          label: "Vendas",
          data: [500, 800, 650, 900, 1200, 1000],
          backgroundColor: "#1351b4",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Gráfico de Desempenho (Linha)
  const performanceCtx = document.getElementById("performanceChart") as HTMLCanvasElement;
  new Chart(performanceCtx, {
    type: "line",
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Desempenho",
          data: [70, 75, 80, 78, 85, 88, 90],
          borderColor: "#1351b4",
          backgroundColor: "rgba(19, 81, 180, 0.1)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Gráfico de Desempenho do Dashboard de Análise (Linha)
  const analysisCtx = document.getElementById("analysisChart") as HTMLCanvasElement;
  new Chart(analysisCtx, {
    type: "line",
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Acessos",
          data: [120, 150, 180, 170, 200, 220, 240],
          borderColor: "#1351b4",
          backgroundColor: "rgba(19, 81, 180, 0.1)",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#1351b4",
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Quantidade",
          },
        },
        x: {
          title: {
            display: true,
            text: "Dias da Semana",
          },
        },
      },
    },
  });
});
</script>

<style scoped>
.telas-container {
  padding: 20px;
}

.br-card {
  height: 100%;
  margin-bottom: 20px;
}

.card-content {
  padding: 20px;
}

/* Estilos para as telas de preview */
.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  background-color: #f5f5f5;
}

.screen-header {
  background-color: #1351b4;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
}

.screen-body {
  padding: 15px;
  background-color: white;
  height: calc(100% - 40px);
  overflow-y: auto;
}

/* Estilos para formulários de login */
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 15px 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
}

.divider span {
  padding: 0 10px;
  color: #666;
  font-size: 0.9rem;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

/* Estilos para dashboard */
.dashboard-layout {
  height: 100%;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dashboard-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.dashboard-actions {
  display: flex;
  gap: 10px;
}

.dashboard-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stat-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  width: 30%;
}

.stat-icon {
  background-color: #e9ecef;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #1351b4;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: bold;
}

.stat-label {
  font-size: 0.8rem;
  color: #6c757d;
}

.dashboard-chart {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-placeholder {
  color: #6c757d;
  font-style: italic;
}

.dashboard-chart-large {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  height: 250px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-metrics {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.metric-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  width: 30%;
}

.metric-title {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 5px;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.metric-change {
  font-size: 0.8rem;
}

.metric-change.positive {
  color: #28a745;
}

.metric-change.negative {
  color: #dc3545;
}

.dashboard-table {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-placeholder {
  color: #6c757d;
  font-style: italic;
}

/* Estilos para formulários */
.form-layout {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.price-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-range .br-input {
  width: 100px;
}
</style>
