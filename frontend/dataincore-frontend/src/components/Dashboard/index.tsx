import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import "./Dashboard.css"
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

// Chart.register(CategoryScale);
const Dashboard: React.FC = () => {
    Chart.register(CategoryScale);

    // Stacked Bar Chart Data
    const stackedBarChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Engineers',
                backgroundColor: '#c5a269',
                data: [10, 12, 8, 15, 20],
            },
            {
                label: 'Designers',
                backgroundColor: '#d9dfab',
                data: [5, 8, 12, 10, 15],
            },
            {
                label: 'Managers',
                backgroundColor: '#064420',
                data: [8, 10, 15, 12, 18],
            },
        ],
    };


    const pieChartData = {
        labels: ['Engineers', 'Designers', 'Managers', 'lawyers'],
        datasets: [
            {
                data: [12, 19, 3, 5],
                backgroundColor: ['#064420', '#f8f9f2', '#c5a269', '#d9dfab'],
            },
        ],
    };

    const customChartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Personnel Number',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                data: [1000, 1200, 1200, 1300, 1100],
            },
        ],
    };

    return (
        <div className="dashboard-container">
            <div className="chart-container">
                <h2>Employee Distribution</h2>
                <Bar options={{


                    scales: {
                        x: { stacked: true },
                        y: { stacked: true },
                    },

                }} data={stackedBarChartData} />
            </div>

            <div className="chart-container">
                <h2>Employee Pie</h2>
                <Pie options={{

                }} data={pieChartData} />
            </div>

            <div className="chart-container">
                <h2>Personnel Number</h2>
                <Line options={{

                }} data={customChartData} />
            </div>
        </div>
    );
};

export default Dashboard;
