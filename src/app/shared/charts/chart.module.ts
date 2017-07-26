import { LineChart } from './line/line.component';
import { DonoughtChart } from './donought/donought.component';
import { PieChart } from './pie/pie.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[PieChart, DonoughtChart, LineChart],
    exports:[PieChart, DonoughtChart, LineChart]
})
export class ChartModule{

}