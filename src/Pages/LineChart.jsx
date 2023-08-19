import React from 'react';
import Style from './maps.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    // ... Your existing options ...
};

export async function fetchData() {
    try {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export async function getChartData() {
    const historicalData = await fetchData();
    if (historicalData) {
        const labels = Object.keys(historicalData.cases);
        const dataset1Data = Object.values(historicalData.cases);
        const dataset2Data = Object.values(historicalData.deaths);

        const data = {
            labels,
            datasets: [
                {
                    label: 'Cases',
                    data: dataset1Data,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    yAxisID: 'y',
                },
                {
                    label: 'Deaths',
                    data: dataset2Data,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    yAxisID: 'y1',
                },
            ],
        };

        return data;
    }
    return null;
}

export function LineChart () {
    const [chartData, setChartData] = React.useState(null);

    React.useEffect(() => {
        async function fetchDataAndSetChartData() {
            const data = await getChartData();
            setChartData(data);
        }
        fetchDataAndSetChartData();
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    return <div className={Style.linecontainer}><Line options={options} data={chartData} />;</div>
}