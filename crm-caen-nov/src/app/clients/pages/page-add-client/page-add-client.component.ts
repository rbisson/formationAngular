import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });
  }
}
