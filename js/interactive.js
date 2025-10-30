// Spin the Wheel
const cases = [
  "Illegal betting ring bust 2019",
  "Cyber gambling fraud 2021",
  "Underage gambling enforcement 2020",
  "Organized crime and casino laundering 2018",
  "Match-fixing scandal 2022"
];
document.getElementById("spinBtn").addEventListener("click", () => {
  const result = cases[Math.floor(Math.random() * cases.length)];
  document.getElementById("caseOutput").textContent = result;
});

// Chart.js neon chart
const ctx = document.getElementById('crimeChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Gambling-related arrests',
      data: [50, 65, 60, 80, 70],
      backgroundColor: '#00ff00',
      borderColor: '#00ff00',
      borderWidth: 2
    },{
      label: 'Gambling prevalence (%)',
      data: [12, 14, 15, 16, 15],
      backgroundColor: '#ff00ff',
      borderColor: '#ff00ff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: 'white' } } },
    scales: {
      x: { ticks: { color: 'white' }, grid: { color: '#222' } },
      y: { ticks: { color: 'white' }, grid: { color: '#222' } }
    }
  }
});
