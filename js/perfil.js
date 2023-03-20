function funcao1()
{
var r=confirm("Deseja desconectar?");
if (r==true)
  {
    window.location.href = "logout.php"
  }
}

/*const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Acertos','Erros'],
        datasets: [{
            label: 'Acertos:',
            data: [12, 19],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',               
            ],
            borderColor: [               
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        maintainAspectRatio: false,
        aspectRatio: 1,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Enem Exatas 2021',
                position: 'bottom'
            }
        }
    }
    
});*/
