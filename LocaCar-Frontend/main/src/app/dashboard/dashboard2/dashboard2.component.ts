import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
  lineBarChart = EChartOption;
  ebarChart = EChartOption;
  percentageValue: (value: number) => string;
  gaugeValues: any = {
    1: 100
  };
  interval: any;

  constructor() {
    this.percentageValue = function (value: number): string {
      return `${Math.round(value)} / ${this['max']}`;
    };
  }

  ngOnInit() {
    this.lineChart();
    this.barChart();

    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100)
      };
    };

    const INTERVAL: number = 3000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();
  }

  // Charts
  private lineChart() {
    // line bar chart
    this.lineBarChart = {
      grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25'
      },
      xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018'],
        axisLine: {
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        }
      },
      tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: false,
        triggerOn: 'mousemove',
        trigger: 'axis'
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#eaeaea'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        }
      },
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [11, 14, 8, 16, 11, 13]
        },
        {
          name: 'profit',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          },
          data: [10, 7, 17, 11, 15],
          symbolSize: 10
        },
        {
          name: 'growth',
          type: 'bar',
          data: [10, 14, 10, 15, 9, 25]
        }
      ],
      color: ['#9f78ff', '#fa626b', '#32cafe']
    };
  }

  private barChart() {
    this.ebarChart = {
      grid: { show: false },
      xAxis: {
        data: [
          '2007',
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018'
        ],
        show: false,
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        }
      },
      tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: false,
        triggerOn: 'mousemove',
        trigger: 'axis'
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        },
        show: false,
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [13, 14, 10, 16, 11, 13, 13, 14, 10, 16, 11, 13],
          barMaxWidth: 10
        },

        {
          name: 'growth',
          type: 'bar',
          data: [10, 14, 10, 15, 9, 25, 10, 14, 10, 15, 9, 25],
          barMaxWidth: 10
        }
      ],
      color: ['#A3A09D', '#32cafe']
    };
  }
}
