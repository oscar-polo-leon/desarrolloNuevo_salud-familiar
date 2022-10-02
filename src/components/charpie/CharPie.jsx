import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function CharPie() {

  const [series, setSeries] = useState([44, 55, 13, 43, 22])

  const [options, setOptions] = useState({
    chart: { width: 380, type: 'pie', },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{ breakpoint: 480, options: { chart: { width: 200 }, legend: { position: 'bottom' } } }]
  })

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" height={250}  />
    </div>
  )
}

export default CharPie;