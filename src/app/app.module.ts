import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';

import { DemoMaterialModule } from './demo-material-module';
import { AppRoutingModule } from './app-routing.module';
import { entityConfig } from './entity-metadata';
import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    DemoMaterialModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}