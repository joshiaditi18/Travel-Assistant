const tourists = [
  { name: "Neha Mehta", location: "Kaziranga", score: 82, risk: "Medium" },
  { name: "Ravi Kumar", location: "Shillong", score: 65, risk: "High" },
  { name: "Meera Shah", location: "Tawang", score: 92, risk: "Low" }
];

const incidents = [
  "Altercation at Shillong Market",
  "SOS triggered near Kaziranga riverbank",
  "Lost tourist found near Tawang trail",
  "Medical emergency reported at Guwahati station",
  "Unauthorized drone activity near Bhalukpong"
];

function loadTouristData() {
  const table = document.getElementById("tourist-table");
  tourists.forEach(t => {
    const row = `<tr>
      <td>${t.name}</td>
      <td>${t.location}</td>
      <td>${t.score}</td>
      <td>${t.risk}</td>
    </tr>`;
    table.innerHTML += row;
  });

  const list = document.getElementById("incident-list");
  incidents.forEach(i => {
    list.innerHTML += `<li>${i}</li>`;
  });

  renderChart();
}

function renderChart() {
  const ctx = document.getElementById("crowdChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Kaziranga", "Shillong", "Tawang"],
      datasets: [{
        label: "Crowd Density",
        data: [120, 180, 60],
        backgroundColor: ["#0077b6", "#d00000", "#90be6d"]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

function sendSOS() {
  const status = document.getElementById("sos-status");
  status.textContent = "🚨 SOS Alert Sent!";
  status.style.color = "red";

  setTimeout(() => {
    status.textContent = "✅ Response team dispatched.";
    status.style.color = "green";
  }, 3000);
}

function submitIncident(event) {
  event.preventDefault();
  const desc = document.getElementById("incident-desc").value;
  const list = document.getElementById("incident-list");
  list.innerHTML += `<li>${desc}</li>`;
  document.getElementById("report-status").textContent = "Incident submitted successfully!";
  document.getElementById("incident-desc").value = "";
}

window.onload = loadTouristData;
