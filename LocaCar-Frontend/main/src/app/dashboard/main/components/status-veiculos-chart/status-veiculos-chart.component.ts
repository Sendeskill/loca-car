import { Component, Input, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { VeiculoService } from 'src/app/veiculos/services/veiculo.service';

@Component({
  selector: 'app-status-veiculos-chart',
  templateUrl: './status-veiculos-chart.component.html',
  styleUrls: ['./status-veiculos-chart.component.sass']
})
export class StatusVeiculosChartComponent implements OnInit {




  donut_chart: EChartOption;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getChart();
  }

  getChart() {
    this.veiculoService.getVeiculos()
        .subscribe((result) => {
          this.donut_chart =  {
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              data: ['Liberado', 'Em manutenção',],
              textStyle: {
                color: '#9aa0ac',
                padding: [10, 15]
              }
            },
            series: [
              {
                name: 'Status dos veículos',
                type: 'pie',
                radius: ['35%', '55%'],
                itemStyle: {
                  normal: {
                    label: {
                      show: !0
                    },
                    labelLine: {
                      show: !0
                    }
                  },
                  emphasis: {
                    label: {
                      show: !0,
                      position: 'center',
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal'
                      }
                    }
                  }
                },
                data: [
                  {
                    value: result.filter((f) => f.status == 1).length,
                    name: 'Liberado'
                  },
                  {
                    value: result.filter((f) => f.status == 2).length,
                    name: 'Em manutenção'
                  },
                ]
              }
            ],
            color: ['#1A7A30', '#B41313']
          };
        });
  }

}
