import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';

function CharBar() {

  const [series, setSeries] = useState([{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }])
  
  const [options, setOptions] = useState({
    chart: { height: 200, type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: ["blue", 'red'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'], 
      ],
      labels: {
        style: {
          colors: ["blue", 'red'],
          fontSize: '12px'
        }
      }
    }
  })

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={200} />
    </div>
  )
}

export default CharBar;