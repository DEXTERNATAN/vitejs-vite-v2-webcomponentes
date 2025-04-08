<template>
  <div class="row mb-4">
    <div class="col-md-12">
      <div class="graficos-container">
        <h1>Gráficos</h1>
        <p>
          Nesta página você encontra uma coleção de gráficos interativos, desenvolvidos
          com Chart.js e integrados ao Design System BR. Os exemplos a seguir demonstram
          como exibir e analisar dados de forma dinâmica e intuitiva, permitindo a
          visualização de informações em diferentes formatos, desde análises comparativas
          até distribuição e tendências.
        </p>

        <!-- Seção de Análise -->
        <div class="section-title mb-3">
          <h2>Análise de Dados</h2>
        </div>
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="br-card screen-preview">
              <div class="screen-header">
                <div class="screen-title">Gráfico de Barras</div>
                <div class="card-actions">
                  <br-button
                    emphasis="tertiary"
                    shape="circle"
                    size="small"
                    aria-label="Atualizar dados"
                    @click="updateBarData"
                  >
                    <i
                      class="fas fa-sync-alt"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                  </br-button>
                </div>
              </div>
              <div class="card-content">
                <div class="chart-container">
                  <canvas ref="barChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="br-card screen-preview">
              <div class="screen-header">
                <div class="screen-title">Gráfico de Linha</div>
                <div class="card-actions">
                  <br-button
                    shape="circle"
                    size="small"
                    aria-label="Atualizar dados"
                    @click="updateLineData"
                  >
                    <i
                      class="fas fa-sync-alt"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                  </br-button>
                </div>
              </div>
              <div class="card-content">
                <div class="chart-container">
                  <canvas ref="lineChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Seção de Distribuição -->
        <div class="section-title mb-3">
          <h2>Distribuição</h2>
        </div>
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="br-card screen-preview">
              <div class="screen-header">
                <div class="screen-title">Gráfico de Pizza</div>
                <div class="card-actions">
                  <br-button
                    shape="circle"
                    size="small"
                    aria-label="Atualizar dados"
                    @click="updatePieData"
                  >
                    <i
                      class="fas fa-sync-alt"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                  </br-button>
                </div>
              </div>
              <div class="card-content">
                <div class="chart-container">
                  <canvas ref="pieChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="br-card screen-preview">
              <div class="screen-header">
                <div class="screen-title">Gráfico de Área</div>
                <div class="card-actions">
                  <br-button
                    shape="circle"
                    size="small"
                    aria-label="Atualizar dados"
                    @click="updateAreaData"
                  >
                    <i
                      class="fas fa-sync-alt"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                  </br-button>
                </div>
              </div>
              <div class="card-content">
                <div class="chart-container">
                  <canvas ref="areaChart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Seção de Comparação -->
        <div class="section-title mb-3">
          <h2>Comparação</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="br-card screen-preview">
              <div class="screen-header">
                <div class="screen-title">Gráfico de Radar</div>
                <div class="card-actions">
                  <br-button
                    shape="circle"
                    size="small"
                    aria-label="Atualizar dados"
                    @click="updateRadarData"
                  >
                    <i
                      class="fas fa-sync-alt"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                  </br-button>
                </div>
              </div>
              <div class="card-content">
                <div class="chart-container">
                  <canvas ref="radarChart"></canvas>
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
import { ref, onMounted, reactive } from "vue";
import Chart from "chart.js/auto";

// Referências para os canvas dos gráficos
const barChart = ref<HTMLCanvasElement | null>(null);
const lineChart = ref<HTMLCanvasElement | null>(null);
const pieChart = ref<HTMLCanvasElement | null>(null);
const areaChart = ref<HTMLCanvasElement | null>(null);
const radarChart = ref<HTMLCanvasElement | null>(null);

// Instâncias dos gráficos para permitir atualizações
const chartInstances = reactive({
  bar: null as Chart | null,
  line: null as Chart | null,
  pie: null as Chart | null,
  area: null as Chart | null,
  radar: null as Chart | null,
});

// Função para gerar dados aleatórios
const generateRandomData = (min: number, max: number, count: number) => {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

// Dados para os gráficos
const barData = reactive({
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Vendas 2023",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const lineData = reactive({
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Receita 2023",
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Despesas 2023",
      data: [28, 48, 40, 19, 86, 27],
      fill: false,
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
});

const pieData = reactive({
  labels: ["Vermelho", "Azul", "Amarelo", "Verde", "Roxo", "Laranja"],
  datasets: [
    {
      label: "Distribuição de Cores",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

const areaData = reactive({
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  datasets: [
    {
      label: "Crescimento 2023",
      data: [65, 59, 80, 81, 56, 55],
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});

const radarData = reactive({
  labels: ["Vendas", "Marketing", "Desenvolvimento", "Suporte", "Financeiro", "RH"],
  datasets: [
    {
      label: "Departamento A",
      data: [65, 59, 90, 81, 56, 55],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Departamento B",
      data: [28, 48, 40, 19, 96, 27],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
});

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: { font: { size: 12 } },
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null)
            label += new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(context.parsed.y);
          return label;
        },
      },
    },
  },
  interaction: { mode: "nearest" as const, axis: "x" as const, intersect: false },
};

const updateBarData = () => {
  if (chartInstances.bar) {
    barData.datasets[0].data = generateRandomData(5, 30, 6);
    chartInstances.bar.update();
  }
};

const updateLineData = () => {
  if (chartInstances.line) {
    lineData.datasets[0].data = generateRandomData(40, 90, 6);
    lineData.datasets[1].data = generateRandomData(20, 80, 6);
    chartInstances.line.update();
  }
};

const updatePieData = () => {
  if (chartInstances.pie) {
    pieData.datasets[0].data = generateRandomData(2, 20, 6);
    chartInstances.pie.update();
  }
};

const updateAreaData = () => {
  if (chartInstances.area) {
    areaData.datasets[0].data = generateRandomData(40, 90, 6);
    chartInstances.area.update();
  }
};

const updateRadarData = () => {
  if (chartInstances.radar) {
    radarData.datasets[0].data = generateRandomData(40, 100, 6);
    radarData.datasets[1].data = generateRandomData(20, 90, 6);
    chartInstances.radar.update();
  }
};

onMounted(() => {
  if (barChart.value) {
    chartInstances.bar = new Chart(barChart.value, {
      type: "bar",
      data: barData,
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { callback: (value: any) => "R$ " + value },
          },
        },
      },
    });
  }
  if (lineChart.value) {
    chartInstances.line = new Chart(lineChart.value, {
      type: "line",
      data: lineData,
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { callback: (value: any) => "R$ " + value },
          },
        },
      },
    });
  }
  if (pieChart.value) {
    chartInstances.pie = new Chart(pieChart.value, {
      type: "pie",
      data: pieData,
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          tooltip: {
            callbacks: {
              label: function (context: any) {
                const label = context.label || "";
                const value = context.parsed || 0;
                const total = context.dataset.data.reduce(
                  (a: number, b: number) => a + b,
                  0
                );
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
    });
  }
  if (areaChart.value) {
    chartInstances.area = new Chart(areaChart.value, {
      type: "line",
      data: areaData,
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { callback: (value: any) => "R$ " + value },
          },
        },
      },
    });
  }
  if (radarChart.value) {
    chartInstances.radar = new Chart(radarChart.value, {
      type: "radar",
      data: radarData,
      options: {
        ...commonOptions,
        scales: {
          r: { beginAtZero: true, max: 100 },
        },
      },
    });
  }
});
</script>

<style scoped>
.graficos-container {
  padding: 20px;
}

.section-title {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-top: 20px;
}

.section-title h2 {
  font-size: 1.5rem;
  color: #1351b4;
  margin-bottom: 0;
}

/* Estilo unificado de header baseado em Telas.vue */
.screen-header {
  background-color: #1351b4;
  color: #fff;
  padding: 10px 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.screen-title {
  font-size: 1.2rem;
  margin: 0;
}

.br-card {
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.br-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-content {
  padding: 15px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-container {
  position: relative;
  height: 250px;
  width: 100%;
}

canvas {
  max-width: 100%;
  max-height: 100%;
}

@media (max-width: 768px) {
  .chart-container {
    height: 200px;
  }
}

.screen-preview {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
