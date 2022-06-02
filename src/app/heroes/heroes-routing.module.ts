import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeHeroesComponent } from './pages/home-heroes/home-heroes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeHeroesComponent,
    children: [
      {
        path: 'list',
        component: ListHeroesComponent
      },
      {
        path: 'add',
        component: AddHeroesComponent
      },
      {
        path: 'edit/:id',
        component: AddHeroesComponent
      },
      {
        path: 'search',
        component: SearchHeroesComponent
      },
      {
        path: ':id',
        component: HeroesComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
