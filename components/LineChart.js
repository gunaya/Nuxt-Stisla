import { Line } from "vue-chartjs";

export default {
    extends: Line,
    props: ['data', 'options'],
    data() {
        return {
            chartData: this.data,
            chartOptions: this.options
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.chartOptions)
    },
};