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

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroListComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}