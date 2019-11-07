import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public title: string;
  public label: string;
  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });
  }

  public add(item: Client) {
    this.clientService.add(item);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
