const labels = [];
const dados = [];

const ctx = document.getElementById('grafico').getContext('2d');
const grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Valores',
      data: dados,
      backgroundColor: '#007bff'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function adicionarDado() {
  const nome = document.getElementById('labelInput').value.trim();
  const valor = parseFloat(document.getElementById('valueInput').value);

  if (nome && !isNaN(valor)) {
    labels.push(nome);
    dados.push(valor);
    grafico.update();

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${valor}</td>`;
    document.querySelector('#tabelaDados tbody').appendChild(novaLinha);

    document.getElementById('labelInput').value = '';
    document.getElementById('valueInput').value = '';
  }
}
