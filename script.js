let chart = null;

window.onload = function() {
    const ctx = document.getElementById('expense-chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05'],
            datasets: [{
                label: 'Groceries',
                data: [200, 300, 400, 150, 1250],
                borderColor: '#2ecc71',
                fill: false
            }, {
                label: 'Utilities',
                data: [100, 150, 120, 200, 320],
                borderColor: '#e74c3c',
                fill: false
            }, {
                label: 'Leisure',
                data: [50, 100, 150, 200, 750],
                borderColor: '#9b59b6',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};