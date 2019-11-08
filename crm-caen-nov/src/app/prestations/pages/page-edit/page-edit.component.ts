import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { PrestationsService } from '../../services/prestations.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit, OnDestroy {
  public title: string;
  public label: string;
  public id: string;
  private routeSub: Subscription;
  item$: Observable<Prestation>;
  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
    });

    this.routeSub = this.route.params.subscribe(params => {
       this.item$ = this.prestationService.getPrestation(params['id']);
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  public edit(item: Prestation) {
    item.id = this.id;
    this.prestationService.update(item).then((res) => {
      // res étant la réponse de l'api
      // this.router.navigate(['prestations']);
      // redirection relative par rapport à la route sur laquelle vous êtes.
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

}
