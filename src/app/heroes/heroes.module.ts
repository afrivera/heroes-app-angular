import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

import { ImagePipe } from './pipes/image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    AddHeroesComponent,
    SearchHeroesComponent,
    HeroesComponent,
    HomeHeroesComponent,
    ListHeroesComponent,
    HeroCardComponent,

    ImagePipe,
     ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
