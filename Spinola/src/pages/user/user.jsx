import { Link } from "react-router-dom";

import "./user.scss"
export default function User() {
    // var barGraph = new Chart(document.getElementById('barGraph').getContext('2d'), {
    //     type: 'line',
    //     data: {
    //         datasets: [{
    //             label: 'Exercices',
    //             borderColor: '#63B1BC',
    //             backgroundColor: '#0762C8'
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             x: {
    //                 beginAtZero: true
    //             },
    //             y: {
    //                 title: {
    //                     display: true,
    //                     text: '(%)'
    //                 },
    //                 beginAtZero: true
    //             }
    //         }
    //     },

    // });

    // function obterDados(grafico, endpoint) {
    //     fetch('http://localhost:3300//verify-exercice/' + endpoint)
    //         .then(response => response.json())
    //         .then(valores => {
    //             if (paginacao[endpoint] == null) {
    //                 paginacao[endpoint] = 0;
    //             }
    //             if (tempo[endpoint] == null) {
    //                 tempo[endpoint] = 0;
    //             }

    //             var ultimaPaginacao = paginacao[endpoint];
    //             paginacao[endpoint] = valores.length;
    //             valores = valores.slice(ultimaPaginacao);

    //             valores.forEach((valor) => {
    //                 if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
    //                     grafico.data.labels.shift();
    //                     grafico.data.datasets[0].data.shift();
    //                 }

    //                 grafico.data.labels.push(tempo[endpoint]++);
    //                 grafico.data.datasets[0].data.push(parseFloat(valor));
    //                 grafico.update();
    //             });
    //         })
    //         .catch(error => console.error('Erro ao obter dados:', error));
    // }

    // obterDados(sensorTemperatura, 'sensorTemperaturaDHT11');


    return (
        <div className="container_user">
            <aside>
                <h1 className="aside_logo">Spínola</h1>
                <Link>Home</Link>
                <Link>User</Link>
                <Link>Configuration</Link>
                <Link>IDK</Link>
            </aside >

            <div className="grid_graph">
                <div>
                    <div>
                        <canvas id="barGraph"></canvas>
                    </div>
                    <div>
                        <canvas id="barGraph"></canvas>
                    </div>
                </div>

            </div>
        </div>
    )
}