import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PageNotFoundRoutingModule { }
