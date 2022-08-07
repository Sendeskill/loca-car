import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeModule } from 'angular-gauge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SolicitacoesPendentesComponent } from './main/components/solicitacoes-pendentes/solicitacoes-pendentes.component';
import { StatusVeiculosChartComponent } from './main/components/status-veiculos-chart/status-veiculos-chart.component';
import { VeiculosDisponiveisComponent } from './main/components/veiculos-disponiveis/veiculos-disponiveis.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    MainComponent, 
    Dashboard2Component, 
    Dashboard3Component, 
    SolicitacoesPendentesComponent, 
    StatusVeiculosChartComponent, 
    VeiculosDisponiveisComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    PerfectScrollbarModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    GaugeModule.forRoot(),
    MatProgressBarModule
  ]
})
export class DashboardModule {}
