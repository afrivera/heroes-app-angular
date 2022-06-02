import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';



@NgModule({
  declarations: [
    AddHeroesComponent,
    SearchHeroesComponent,
    HeroesComponent,
    HomeHeroesComponent,
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
