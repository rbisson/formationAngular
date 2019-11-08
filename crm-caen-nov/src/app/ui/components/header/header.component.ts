import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Aurelia\'s app';
  public version$: BehaviorSubject<number>;
  constructor(
    private service: VersionService
    ) {
  }

  ngOnInit() {
    this.version$ = this.service.version$;
  }

}
