const { Chart } = require("chart.js");

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '44 Votos',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 4
    }]
    },

    options: {
    scales: {y: {beginAtZero: true}}
    }
});

const tela = document.querySelector('.tela')

new Chart(ctx,{
    
}

);