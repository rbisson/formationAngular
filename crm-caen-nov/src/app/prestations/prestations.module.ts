import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
