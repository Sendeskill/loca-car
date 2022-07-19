import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTooltip,
  ApexPlotOptions,
  ApexDataLabels,
  ApexYAxis,
  ApexXAxis,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexResponsive,
  ChartComponent,
  ApexFill
} from 'ng-apexcharts';

export type smallBarChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
};

export type smallAreaChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};
export type smallColumn = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

export type smallLineChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public smallBarChart: any;
  public smallAreaChart: any;
  public smallColumnChart: any;
  public smallLineChart: any;

  public areaChartOptions: any;
  public areaChartData: any;
  public areaChartLabels: any;
  public areaChartPlugins: any;

  public radarChartLabels: any;
  public radarChartData: any;
  public radarChartType: any;
  public radarChartColors: any;
  public radarChartOptions: any;
  public radarChartPlugins: any;
  public sampleData = [
    31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77, 31, 40, 28, 44, 60, 55
  ];
  constructor() {}

  ngOnInit() {
    this.cardChart1();
    this.cardChart2();
    this.cardChart3();
    this.cardChart4();
    this.chart1();
    this.chart2();
  }
  private cardChart1() {
    this.smallBarChart = {
      chart: {
        type: 'bar',
        width: 200,
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      series: [
        {
          name: 'income',
          data: this.sampleData
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {},
        marker: {
          show: false
        }
      }
    };
  }
  private cardChart2() {
    this.smallAreaChart = {
      series: [
        {
          name: 'order',
          data: this.sampleData
        }
      ],
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight'
      },
      colors: ['#00E396'],
      xaxis: {
        labels: {
          show: false
        }
      },
      legend: {
        show: false
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      }
    };
  }
  private cardChart3() {
    this.smallColumnChart = {
      chart: {
        type: 'bar',
        width: 200,
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      series: [
        {
          name: 'income',
          data: this.sampleData
        }
      ],

      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {},
        marker: {
          show: false
        }
      }
    };
  }
  private cardChart4() {
    this.smallLineChart = {
      series: [
        {
          name: 'Users',
          data: this.sampleData
        }
      ],
      chart: {
        type: 'line',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        colors: ['#FEB019'],
        width: 4
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      },
      xaxis: {
        labels: {
          show: false
        }
      },
      legend: {
        show: false
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      }
    };
  }

  private chart1() {
    this.areaChartOptions = {
      elements: {
        point: {
          radius: 0,
          hitRadius: 5,
          hoverRadius: 5
        }
      },
      legend: {
        display: true,
        labels: {
          fontColor: '#9aa0ac'
        },
        position: 'top'
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    this.areaChartPlugins = [
      {
        afterLayout: (chart) => {
          const ctx = chart.chart.ctx;
          const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset = chart.data.datasets[0];

          gradientStroke.addColorStop(0, '#5555FF');
          gradientStroke.addColorStop(1, '#9787FF');
          dataset.backgroundColor = gradientStroke;
          dataset.borderColor = 'transparent';
          dataset.pointBorderColor = 'transparent';
          dataset.pointBackgroundColor = 'transparent';
          dataset.lineTension = '0.4';

          const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset2 = chart.data.datasets[1];
          gradientStroke2.addColorStop(0, '#FF55B8');
          gradientStroke2.addColorStop(1, '#FF8787');
          dataset2.backgroundColor = gradientStroke2;
          dataset2.borderColor = 'transparent';
          dataset2.pointBorderColor = 'transparent';
          dataset2.pointBackgroundColor = 'transparent';
          dataset2.lineTension = '0.4';
        }
      }
    ];

    this.areaChartData = [
      {
        label: 'Foods',
        data: [24, 18, 16, 18, 24, 36, 28]
      },
      {
        label: 'Electronics',
        data: [20, 22, 30, 22, 18, 22, 30]
      }
    ];

    this.areaChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    // area chart end
  }

  private chart2() {
    this.radarChartPlugins = [
      {
        afterLayout: (chart) => {
          const ctx = chart.chart.ctx;
          const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset = chart.data.datasets[0];

          gradientStroke.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
          gradientStroke.addColorStop(1, 'rgba(151, 135, 255, 0.8)');
          dataset.backgroundColor = gradientStroke;
          dataset.borderColor = 'transparent';
          dataset.pointBackgroundColor = 'transparent';
          dataset.pointBorderColor = 'transparent';
          dataset.pointHoverBackgroundColor = 'transparent';
          dataset.pointHoverBorderColor = 'transparent';
          dataset.pointHitRadius = 50;

          const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset2 = chart.data.datasets[1];
          gradientStroke2.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
          gradientStroke2.addColorStop(1, 'rgba(255, 135, 135, 0.8)');
          dataset2.backgroundColor = gradientStroke2;
          dataset2.borderColor = 'transparent';
          dataset2.pointBackgroundColor = 'transparent';
          dataset2.pointBorderColor = 'transparent';
          dataset2.pointHoverBackgroundColor = 'transparent';
          dataset2.pointHoverBorderColor = 'transparent';
          dataset2.pointHitRadius = 50;
        },
        beforeDatasetsDraw: (chart) => {
          chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
          chart.ctx.shadowBlur = 40;
        },
        afterDatasetsDraw: (chart) => {
          chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
          chart.ctx.shadowBlur = 0;
        }
      }
    ];

    this.radarChartLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    this.radarChartData = [
      { data: [25, 59, 90, 81, 60, 82, 52], label: 'Product', fill: true },
      { data: [40, 100, 40, 90, 40, 90, 84], label: 'Services', fill: true }
    ];
    this.radarChartType = 'radar';
    this.radarChartColors = [
      {
        backgroundColor: ['rgba(109, 144, 232,0.8)']
      },
      {
        backgroundColor: ['rgba(255, 140, 96,0.8)']
      }
    ];
    this.radarChartOptions = {
      legend: {
        display: true,
        labels: {
          fontColor: '#9aa0ac'
        },
        position: 'top'
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false
        }
      }
    };
    // end radar chart
  }
}
