import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Rutas de Pages
import { PagesRoutes } from './pages.routing';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoComponent } from '../components/grafico/grafico.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficoComponent,
        AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
],
    exports:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        PagesRoutes,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule{}