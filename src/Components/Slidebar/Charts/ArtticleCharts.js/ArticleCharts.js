import React from "react";
import { Box} from '@mui/material'
import Chart from 'react-apexcharts'

export default function ArticleCharts() {
 const charts =  {
          
    series: [44, 55, 41, 17],
    options: {
      chart: {
        type: 'donut',
        
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'top'
          }
        }
      }],
      labels: ["طلا", "نفت", "مس", "سرب"],
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },

    },
  
  
  };

      return (
        <Box  component="div" id="chart" className="w-1/2 h-full ">
           <Chart  options={charts.options} series={charts.series} type="donut" />
        </Box>
      );
}

