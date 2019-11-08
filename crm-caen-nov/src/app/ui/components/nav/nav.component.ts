import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public version$: BehaviorSubject<number>;
  constructor(
    private service: VersionService
    ) {
  }

  ngOnInit() {
    this.version$ = this.service.version$;
  }

  upgradeVersion() {
    this.service.upgrade();
  }

}
