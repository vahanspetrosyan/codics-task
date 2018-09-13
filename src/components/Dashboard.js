import React, { PureComponent } from 'react'
import { Line, Pie } from 'react-chartjs-2'


import './Dashboard.css';
class Dashboard extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                
                labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k'],
                datasets: [{
                    label: '1',
                    backgroundColor: 'rgba(76, 153, 230, 0.5)',
                    borderColor: 'transparent',
                    data: [
                        20,
                        40,
                        25,
                        30,
                        90,
                        60,
                        30,
                        20
                    ],
                    fill: 'start'
                },
                {
                    label: '2',
                    backgroundColor: 'rgba(250, 196, 94, 0.5)',
                    borderColor: 'transparent',
                    data: [
                        20,
                        60,
                        30,
                        50,
                        30,
                        35,
                        40,
                        20
                    ],
                    fill: 'start'
                }]
            },
            pieData: {
                datasets: [{
                    label: '3',
                    data: [
                        19,
                        40,
                        21,
                        19,
                        19
                    ],
                    backgroundColor: [
                        'rgba(76, 153, 230, 0.4)',
                        'rgba(76, 153, 230, 1)',
                        'rgba(76, 153, 230, 0.5)',
                        'rgba(76, 153, 230, 0.6)',
                        'rgba(76, 153, 230, 0.3)'
                    ]
                }],
                labels: [
                    'Natural',
                    'Satisfied',
                    'Very satisfied',
                    'Unsatisfied',
                    'Very Unsatisfied'
                ]
            }
        }
    };
    render() {
        return (
            <div>
                <div className="first-chart">
                    <h2 className="chartTitle">Onboarded Customers</h2>
                    <Line
                        height={250}
                        data={this.state.chartData}
                        options={{
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: true,
                            elements: {
                                line: {
                                    tension: 0.4
                                }
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 20,
                                        max: 100,
                                        stepSize: 20
                                    },
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                    }
                                }],
                                xAxes: [{
                                    gridLines: {
                                        color: "rgba(0, 0, 0, 0)",
                                    }
                                }]
                            }
                        }}
                    />
                </div>
                <div className="second-chart">
                    <h2 className="chartTitle">Consumer Base</h2>
                    <Pie
                        height={250}
                        data={this.state.pieData}
                        options={{
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: true
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
