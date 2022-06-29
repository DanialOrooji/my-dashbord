import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Box} from '@mui/material'


export default function ArticleCharts() {
    const myData = [
        { title: "Dogs", value: 100, color: "orange" },
        { title: "Cats", value: 50, color: "green" },
        { title: "Dragons", value: 15, color: "purple" },
      ];
      return (
        <Box  component="div" className="w-1/2 h-full flex items-center mx-auto">
          <PieChart className="h-1/2"
            // your data
            data={myData}
            // width and height of the view box
            fill={false}
          />
        </Box>
      );
}

