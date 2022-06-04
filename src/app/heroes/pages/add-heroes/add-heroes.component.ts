import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styles: [
  ]
})
export class AddHeroesComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    alter_ego: '',
    superhero: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor( 
      private heroeService: HeroesService,
      private activateRoute: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {
    if( this.heroe.id ){
      this.activateRoute.params
        .pipe( 
          switchMap( ({ id })=> this.heroeService.getHeroeById( id ) )
        )
        .subscribe( heroe => this.heroe = heroe )
    }

    }

  save(){
    if( this.heroe.superhero.trim().length === 0) return;

    if( this.heroe.id ){
      // update
      this.heroeService.updateHeroe( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes', heroe.id])
        })
    } else {
      // add
      this.heroeService.addHeroe( this.heroe )
        .subscribe( heroe => {
          this.router.navigate(['/heroes/list'])
        })

    }
  }

}
