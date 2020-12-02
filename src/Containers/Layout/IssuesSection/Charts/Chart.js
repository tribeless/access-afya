import React,{Component} from "react";
import Chart from 'react-apexcharts'

class Charts extends Component{

    state={
      options: {
        chart: {
          id: 'apexchart-example',
          type:"line",
          toolbar:false
        },
        xaxis: {
            show:false,
            labels:{show:false},
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            tooltip:{enabled:false},
            axisBorder:{show:false}
        },
        dataLabels:{
            enabled:false
        },
        stroke:{
            curve:"smooth",
            lineCap: 'round',
            colors: this.props.color,
            width: 1,
        },
        yaxis:{
            show:false,
            labels:{show:false},
            tooltip:{enabled:false}
        },
        grid:{
            show:false
        }
      },
      series: [{
        name: 'series-1',
        data: this.props.dataset
      }]
    }

    render(){
        return (
            <Chart options={this.state.options} series={this.state.series} type="line" width={150} height={80} />
        )
    }
}

export default Charts;