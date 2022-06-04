import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styles: [
  ]
})
export class SearchHeroesComponent implements OnInit {

  term: string = '';
  heroes: Heroe[] = [];
  heroeSelected!: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  searchHero(){
    this.heroesService.getHeroBySugges( this.term.trim() )
      .subscribe( heroes => this.heroes = heroes);
  }

  optionSelected( option: MatAutocompleteSelectedEvent ){
    if( option.option.value === ''){
      this.heroeSelected = undefined
      return;
    } 
    const heroe: Heroe = option.option.value
   
    this.term = heroe.superhero;
    this.heroesService.getHeroeById( heroe.id! )
      .subscribe( heroe => this.heroeSelected = heroe )
  }

}
