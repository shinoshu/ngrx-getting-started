import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './hero/heroes.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent },
  { path: 'heroes/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
