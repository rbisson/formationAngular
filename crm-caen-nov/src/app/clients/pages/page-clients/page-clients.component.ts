import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];
  public states = Object.values(StateClient);
  public title: string;
  public label: string;
  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.collection = this.clientsService.collection;

    this.headers = [
      'Name',
      'Email',
      'State'
    ];

    this.title = 'Clients';
    this.label = 'Tous les clients';
  }

  public update(item: any, event: any) {
    this.clientsService.update(item, event.target.value);
  }
}
