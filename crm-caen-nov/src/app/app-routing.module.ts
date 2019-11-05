import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  //  { path: 'hero/:id',      component: HeroDetailComponent },
 /* {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  */
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ]
})
export class AppRoutingModule { }
