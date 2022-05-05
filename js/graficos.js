
/*Grafico da tela de resultados */
const ctxResult = document.getElementById('chartResult') // Requisitando os dados do HTML

//Dados que serão apresentados no resultado
const dataResult = {
    labels: [
        'Respondidas',
        'Acertos',
        'Erros'
    ],
    datasets: [{
        label: 'Resultado',
        data: [5, 20, 5],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
        ],
        hoverOffset: 10,
     
    }]
}

//Configuração do tipo do Grafico e dados que serão apresentados
const configResult ={
    type: 'doughnut',
    data: dataResult,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Gráfico de resultados'
            }
        },
    }
}

//Consolidado os dados e as configurções aplicadas no gráfico
const chartResult = new Chart(ctxResult, configResult)


// Grafico de Idade
const ctxIdade = document.getElementById('chartIdade').getContext("2d")
const gradient = ctxIdade.createLinearGradient(0,0,0, 500)
gradient.addColorStop(0, '#5cffca')
gradient.addColorStop(1, '#66ff')
const dataIdade = {
    labels: [
        'Menor 16',
        '17',
        '18',
        '19',
        '20',
        '21 a 30',
        '31 a 59',
        '60',
    ],
    datasets:[{
        data: [69.107, 243.178, 651.606, 637.608, 349.767, 215.663, 618.006, 250.369, 5.603 ],
        label: "Quantidade ",
        fill: true,
        backgroundColor: gradient,
        

    }]
}
const configIdade ={
    type: 'line',
    data: dataIdade,
    options: {
        responsive: true,
        radius: 7,
        hoverRadius:10,
        plugins: {
            title: {
                display: true,
                text: 'Inscrições por Faixa etária'
            }
        },
        scales:{
            y:{
                ticks: {
                    callback: function(value){
                        return value + ' milhões'
                    }
                }
            }
        }
    }
}
const chartIdade = new Chart(ctxIdade, configIdade)

/*---------------------GRAFICO QUESTÃO 1 ------------------------------*/
const ctxQ1 = document.getElementById('chartQ1') // Requisitando os dados do HTML
const dataQ1 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [39,18,22,6,15],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
//Configuração do tipo do Grafico e dados que serão apresentados
const configQ1 ={
    type: 'doughnut',
    data: dataQ1,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 1'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
                formatter: (value, ctxQ1) => {
                   let sum = 0;
                   let dataArr = ctxQ1.chartQ1.dataQ1.datasets[0].dataQ1;
                   dataArr.map(dataQ1 => {
                       sum += dataQ1;
                   });
                   let percentage = (value*100 / sum).toFixed(2)+"%";
                   return percentage;
                }
            }   
        },
    }
}
const chartQ1 = new Chart(ctxQ1, configQ1)

/*---------------------GRAFICO QUESTÃO 2 ------------------------------*/
const ctxQ2 = document.getElementById('chartQ2')
const dataQ2 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [61,6,21,7,5],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ2={
    type: 'doughnut',
    data: dataQ2,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 2'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
                backgroundColor: function(context) {
                    return context.dataset.backgroundColor;
                  },
                display: function(ctx) {
                    var dataset = ctx.dataset;
                    // var count = datasets.data.length;
                    var value = dataset.data[ctx.dataIndex];
                    return value; 
                    //> count * 1.5;
                },
              
            },
        },
    }
}
const chartQ2 = new Chart(ctxQ2, configQ2)

/*---------------------GRAFICO QUESTÃO 3 ------------------------------*/
const ctxQ3 = document.getElementById('chartQ3') 
const dataQ3 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [28,2,12,3,9],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ3={
    type: 'doughnut',
    data: dataQ3,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 3'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
                backgroundColor: function(context) {
                    return context.dataset.backgroundColor;
                  },
                display: function(ctx) {
                    var dataset = ctx.dataset;
                    // var count = datasets.data.length;
                    var value = dataset.data[ctx.dataIndex];
                    return value; 
                    //> count * 1.5;
                },
              
            },
        },
    }
}
const chartQ3 = new Chart(ctxQ3, configQ3)

/*---------------------GRAFICO QUESTÃO 4 ------------------------------*/
const ctxQ4 = document.getElementById('chartQ4') // Requisitando os dados do HTML
const dataQ4 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [9,52,6,24,9],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ4={
    type: 'doughnut',
    data: dataQ4,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 4'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
                backgroundColor: function(context) {
                    return context.dataset.backgroundColor;
                  },
                display: function(ctx) {
                    var dataset = ctx.dataset;
                    // var count = datasets.data.length;
                    var value = dataset.data[ctx.dataIndex];
                    return value; 
                    //> count * 1.5;
                },
              
            },
        },
    }
}
const chartQ4 = new Chart(ctxQ4, configQ4)

/*---------------------GRAFICO QUESTÃO 5 ------------------------------*/
const ctxQ5 = document.getElementById('chartQ5')
const dataQ5 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [2,62,6,11,18],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ5={
    type: 'doughnut',
    data: dataQ5,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 5'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ5 = new Chart(ctxQ5, configQ5)

/*---------------------GRAFICO QUESTÃO 6 ------------------------------*/
const ctxQ6 = document.getElementById('chartQ6') 
const dataQ6 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [14,62,12,4,8],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ6={
    type: 'doughnut',
    data: dataQ6,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 6 '
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ6 = new Chart(ctxQ6, configQ6)

/*---------------------GRAFICO QUESTÃO 7 ------------------------------*/
const ctxQ7 = document.getElementById('chartQ7')
const dataQ7 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [19,21,26,2,14],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ7={
    type: 'doughnut',
    data: dataQ7,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 7 '
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ7 = new Chart(ctxQ7, configQ7)

/*---------------------GRAFICO QUESTÃO 8  ------------------------------*/
const ctxQ8 = document.getElementById('chartQ8') 
const dataQ8 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [25,18,26,21,11],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ8={
    type: 'doughnut',
    data: dataQ8,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 8 '
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ8 = new Chart(ctxQ8, configQ8)

/*---------------------GRAFICO QUESTÃO 9 ------------------------------*/
const ctxQ9 = document.getElementById('chartQ9')
const dataQ9 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [16,18,25,27,14],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ9={
    type: 'doughnut',
    data: dataQ9,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 9'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ9 = new Chart(ctxQ9, configQ9)

/*---------------------GRAFICO QUESTÃO 10  ------------------------------*/
const ctxQ10 = document.getElementById('chartQ10') 
const dataQ10 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [29,12,5,7,46],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ10={
    type: 'doughnut',
    data: dataQ10,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 10'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ10 = new Chart(ctxQ10, configQ10)

/*---------------------GRAFICO QUESTÃO 11 ------------------------------*/
const ctxQ11 = document.getElementById('chartQ11')
const dataQ11 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [58,9,18,1,5],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ11={
    type: 'doughnut',
    data: dataQ11,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 11'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ11 = new Chart(ctxQ11, configQ11)

/*---------------------GRAFICO QUESTÃO 12------------------------------*/
const ctxQ12 = document.getElementById('chartQ12') 
const dataQ12 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [25,14,9,42,1],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ12={
    type: 'doughnut',
    data: dataQ12,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 12'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ12 = new Chart(ctxQ12, configQ12)

/*---------------------GRAFICO QUESTÃO 13 ------------------------------*/
const ctxQ13 = document.getElementById('chartQ13')
const dataQ13 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [2,3,89,3,3],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ13={
    type: 'doughnut',
    data: dataQ13,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 13'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}

const chartQ13 = new Chart(ctxQ13, configQ13)

/*---------------------GRAFICO QUESTÃO 14 ------------------------------*/
const ctxQ14 = document.getElementById('chartQ14')
const dataQ14 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [13,11,17,21,37],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ14={
    type: 'doughnut',
    data: dataQ14,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 14'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ14 = new Chart(ctxQ14, configQ14)

/*---------------------GRAFICO QUESTÃO 15 ------------------------------*/
const ctxQ15 = document.getElementById('chartQ15')
const dataQ15 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [29,9,2,15,27],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ15={
    type: 'doughnut',
    data: dataQ15,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 15'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ15 = new Chart(ctxQ15, configQ15)

/*---------------------GRAFICO QUESTÃO 16 ------------------------------*/
const ctxQ16 = document.getElementById('chartQ16')
const dataQ16 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [7,6,16,8,9],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ16={
    type: 'doughnut',
    data: dataQ16,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 16'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ16 = new Chart(ctxQ16, configQ16)

/*---------------------GRAFICO QUESTÃO 17 ------------------------------*/
const ctxQ17 = document.getElementById('chartQ17') 
const dataQ17 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [27,12,7,17,36],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ17={
    type: 'doughnut',
    data: dataQ17,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 17'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ17 = new Chart(ctxQ17, configQ17)


/*---------------------GRAFICO QUESTÃO  18------------------------------*/
const ctxQ18 = document.getElementById('chartQ18')
const dataQ18 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [3,5,14,43,7],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ18 ={
    type: 'doughnut',
    data: dataQ18,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 18'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ18 = new Chart(ctxQ18, configQ18)


/*---------------------GRAFICO QUESTÃO 19 ------------------------------*/
const ctxQ19 = document.getElementById('chartQ19') 
const dataQ19 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [3,5,4,54,34],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ19={
    type: 'doughnut',
    data: dataQ19,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 19'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ19 = new Chart(ctxQ19, configQ19)
// AQUI
/*---------------------GRAFICO QUESTÃO 20 ------------------------------*/
const ctxQ20 = document.getElementById('chartQ20')
const dataQ20 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [23,31,15,11,2],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ20={
    type: 'doughnut',
    data: dataQ20,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 20'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ20 = new Chart(ctxQ20, configQ20)

/*---------------------GRAFICO QUESTÃO 21 ------------------------------*/
const ctxQ21 = document.getElementById('chartQ21') 
const dataQ21 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [21,12,24,9,33],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ21={
    type: 'doughnut',
    data: dataQ21,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 21'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ21 = new Chart(ctxQ21, configQ21)

/*---------------------GRAFICO QUESTÃO 22 ------------------------------*/
const ctxQ22 = document.getElementById('chartQ22') 
const dataQ22 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [21,32,31,1,5],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ22={
    type: 'doughnut',
    data: dataQ22,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 22'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ22 = new Chart(ctxQ22, configQ22)

/*---------------------GRAFICO QUESTÃO  23------------------------------*/
const ctxQ23 = document.getElementById('chartQ23') 
const dataQ23 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [1,21,17,19,33],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ23={
    type: 'doughnut',
    data: dataQ23,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 23'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ23 = new Chart(ctxQ23, configQ23)

/*---------------------GRAFICO QUESTÃO 24 ------------------------------*/
const ctxQ24 = document.getElementById('chartQ24')
const dataQ24 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [18,6,1,3,9],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ24={
    type: 'doughnut',
    data: dataQ24,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 24'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ24 = new Chart(ctxQ24, configQ24)

/*---------------------GRAFICO QUESTÃO 25 ------------------------------*/
const ctxQ25 = document.getElementById('chartQ25')
const dataQ25 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [16,37,12,14,2],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ25={
    type: 'doughnut',
    data: dataQ25,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 25'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ25 = new Chart(ctxQ25, configQ25)

/*---------------------GRAFICO QUESTÃO 26 ------------------------------*/
const ctxQ26 = document.getElementById('chartQ26')
const dataQ26 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [13,8,35,22,21],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ26={
    type: 'doughnut',
    data: dataQ26,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 26'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ26 = new Chart(ctxQ26, configQ26)


/*---------------------GRAFICO QUESTÃO 27 ------------------------------*/
const ctxQ27 = document.getElementById('chartQ27')
const dataQ27 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [21,19,17,2,22],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ27={
    type: 'doughnut',
    data: dataQ27,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 27'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ27 = new Chart(ctxQ27, configQ27)

/*---------------------GRAFICO QUESTÃO 28 ------------------------------*/
const ctxQ28 = document.getElementById('chartQ28')
const dataQ28 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [2,55,5,16,4],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ28={
    type: 'doughnut',
    data: dataQ28,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 28'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ28 = new Chart(ctxQ28, configQ28)

/*---------------------GRAFICO QUESTÃO 29 ------------------------------*/
const ctxQ29 = document.getElementById('chartQ29')
const dataQ29 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [6,1,6,14,11],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ29={
    type: 'doughnut',
    data: dataQ29,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 29'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ29 = new Chart(ctxQ29, configQ29)

/*---------------------GRAFICO QUESTÃO 30 ------------------------------*/
const ctxQ30 = document.getElementById('chartQ30')
const dataQ30 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [21,18,15,16,29],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ30={
    type: 'doughnut',
    data: dataQ30,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 30'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ30 = new Chart(ctxQ30, configQ30)

/*---------------------GRAFICO QUESTÃO 31 ------------------------------*/
const ctxQ31 = document.getElementById('chartQ31')
const dataQ31 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [26,2,2,21,12],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ31={
    type: 'doughnut',
    data: dataQ31,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 31'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ31 = new Chart(ctxQ31, configQ31)

/*---------------------GRAFICO QUESTÃO 32------------------------------*/
const ctxQ32 = document.getElementById('chartQ32')
const dataQ32 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [12,15,19,39,15],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ32={
    type: 'doughnut',
    data: dataQ32,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 32'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ32 = new Chart(ctxQ32, configQ32)

/*---------------------GRAFICO QUESTÃO 33 ------------------------------*/
const ctxQ33 = document.getElementById('chartQ33')
const dataQ33 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [4,29,21,3,7],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ33={
    type: 'doughnut',
    data: dataQ33,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 33'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ33 = new Chart(ctxQ33, configQ33)

/*---------------------GRAFICO QUESTÃO 34 ------------------------------*/
const ctxQ34 = document.getElementById('chartQ34')
const dataQ34 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [19,38,14,7,21],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ34={
    type: 'doughnut',
    data: dataQ34,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 34'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ34 = new Chart(ctxQ34, configQ34)

/*---------------------GRAFICO QUESTÃO 35 ------------------------------*/
const ctxQ35 = document.getElementById('chartQ35')
const dataQ35 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [45,1,7,3,28],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ35={
    type: 'doughnut',
    data: dataQ35,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 35'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ35 = new Chart(ctxQ35, configQ35)

/*---------------------GRAFICO QUESTÃO 36 ------------------------------*/
const ctxQ36 = document.getElementById('chartQ36')
const dataQ36 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [9,64,6,9,12],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ36={
    type: 'doughnut',
    data: dataQ36,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 36'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ36 = new Chart(ctxQ36, configQ36)

/*---------------------GRAFICO QUESTÃO 37 ------------------------------*/
const ctxQ37 = document.getElementById('chartQ37')
const dataQ37 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [48,9,15,16,12],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ37={
    type: 'doughnut',
    data: dataQ37,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 37'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ37 = new Chart(ctxQ37, configQ37)

/*---------------------GRAFICO QUESTÃO 38 ------------------------------*/
const ctxQ38 = document.getElementById('chartQ38')
const dataQ38 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [6,11,47,2,17],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ38={
    type: 'doughnut',
    data: dataQ38,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 38'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ38 = new Chart(ctxQ38, configQ38)

/*---------------------GRAFICO QUESTÃO 39 ------------------------------*/
const ctxQ39 = document.getElementById('chartQ39')
const dataQ39 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [2,8,44,17,11],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ39={
    type: 'doughnut',
    data: dataQ39,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 39'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ39 = new Chart(ctxQ39, configQ39)

/*---------------------GRAFICO QUESTÃO 40 ------------------------------*/
const ctxQ40 = document.getElementById('chartQ40')
const dataQ40 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [46,9,14,17,14],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ40={
    type: 'doughnut',
    data: dataQ40,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 40'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ40 = new Chart(ctxQ40, configQ40)

/*---------------------GRAFICO QUESTÃO 41 ------------------------------*/
const ctxQ41 = document.getElementById('chartQ41')
const dataQ41 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [17,11,13,49,9],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ41={
    type: 'doughnut',
    data: dataQ41,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 41'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ41 = new Chart(ctxQ41, configQ41)

/*---------------------GRAFICO QUESTÃO 42 ------------------------------*/
const ctxQ42 = document.getElementById('chartQ42')
const dataQ42 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [11,19,35,11,24],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ42={
    type: 'doughnut',
    data: dataQ42,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 42'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ42 = new Chart(ctxQ42, configQ42)

/*---------------------GRAFICO QUESTÃO 43 ------------------------------*/
const ctxQ43 = document.getElementById('chartQ43')
const dataQ43 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [14,9,16,43,17],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ43={
    type: 'doughnut',
    data: dataQ43,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 43'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ43 = new Chart(ctxQ43, configQ43)

/*---------------------GRAFICO QUESTÃO 44 ------------------------------*/
const ctxQ44 = document.getElementById('chartQ44')
const dataQ44 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [11,7,6,44,32],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ44={
    type: 'doughnut',
    data: dataQ44,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 44'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ44 = new Chart(ctxQ44, configQ44)

/*---------------------GRAFICO QUESTÃO 45 ------------------------------*/
const ctxQ45 = document.getElementById('chartQ45')
const dataQ45 = {
    labels: [
        'A',
        'B',
        'C',
        'D',
        'E',
    ],
    datasets: [{
        label: 'Resultado',
        data: [9,19,53,11,8],
        backgroundColor: [  
            '#005f85',
            '#5F9EA0',
            '#ff0000',
            '#ffd700',
            '#FF7F00'
        ],  
        hoverOffset: 10
    }]
}
const configQ45={
    type: 'doughnut',
    data: dataQ45,
    options: {
        responsive: true,
        cutoutPercentage:50,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas de acertos e erros - Questão 45'
            },
            legend: {
                position: 'bottom',
            },
            datalabels: {
              
            },
        },
    }
}
const chartQ45 = new Chart(ctxQ45, configQ45)