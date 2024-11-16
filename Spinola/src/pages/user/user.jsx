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