import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
