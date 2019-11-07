import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  public states = Object.values(State);
  public title: string;
  public label: string;
  public labelBtn: string;
  public routeBtn: string;
  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.collection = this.prestationService.collection;
    // console.log(this.prestationService.collection);
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];

    this.labelBtn = 'Ajouter une prestation';
    this.routeBtn = 'add';

    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });
  }

  public update(item: any, event: any) {
    this.prestationService.update(item, event.target.value);
  }
}
