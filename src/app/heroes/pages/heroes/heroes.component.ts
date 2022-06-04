import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id })=> this.heroeService.getHeroeById( id ))
      )
      .subscribe( heroe => this.heroe = heroe );
  }

}
