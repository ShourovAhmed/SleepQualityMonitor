import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent{
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chart2options: Partial<ChartOptions>;
  
  //Deze data komt van de HRM en wordt uit de database gehaald, wanneer dit uiteindelijk lukt
  DB_Timestamps = ["05:58", "06:03", "06:08", "06:13", "06:18", "06:23", "06:28", "06:33", "06:38", "06:43", "06:48", "06:53", "06:58", "07:03", "07:08", "07:13", "07:18", "07:23", "07:28", "07:33", "07:38", "07:43", "07:48", "07:53", "07:58"]
  DB_BPM = [59, 63, 64, 62, 61, 65, 57, 61, 65, 58, 61, 58, 54, 56, 53, 60, 55, 57, 58, 47, 50, 57, 54, 68, 81]
  
  public get avg_BPM(){
    let som = 0
    for (let index = 0; index < this.DB_BPM.length; index++) {
      som += this.DB_BPM[index];
    }
    return som/this.DB_BPM.length
  } 
  

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "29/04/2021",
          data: this.DB_BPM
        },
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Average Heart Rate: " + this.avg_BPM,
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.DB_Timestamps,
        title: {
          text: "Time"
        }
      },
      yaxis: {
        title: {
          text: "BPM"
        },
        min: 45,
        max: 85
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };

    this.chart2options = {
      series: [
        {
          name: "chart2",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 30
            }
          )
        }
      ],
      chart: {
        id: "tw",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#546E7A"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };
  }

  public generateDayWiseTimeSeries(baseval, count, yrange): any[] {
    let i = 0;
    let series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}


