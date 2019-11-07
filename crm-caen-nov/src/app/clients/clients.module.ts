import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageClientsComponent, PageAddClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
