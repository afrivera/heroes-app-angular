import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 10px;
    }
  `
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
      private router: Router,
      private snackBar: MatSnackBar,
      private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit')) {
      return;
    }
    
    this.activateRoute.params
      .pipe( 
        switchMap( ({ id })=> this.heroeService.getHeroeById( id ) )
      )
      .subscribe( heroe => this.heroe = heroe )
    

    }

  save(){
    if( this.heroe.superhero.trim().length === 0) return;

    if( this.heroe.id ){
      // update
      this.heroeService.updateHeroe( this.heroe )
        .subscribe( heroe => {
          this.showSnackBar('Heroe updated');
          // this.router.navigate(['/heroes', heroe.id])
        })
    } else {
      // add
      this.heroeService.addHeroe( this.heroe )
        .subscribe( heroe => {
          this.showSnackBar('Heroe Add');
          // this.router.navigate(['/heroes/list'])
        })

    }
  }

  deleteHeroe(){
    const dialog = this.dialog.open( ConfirmComponent, {
      width: '250px',
      data: { ...this.heroe }
    })

    dialog.afterClosed()
      .subscribe( result => {
        if( result ){
          this.heroeService.deleteHeroe( this.heroe.id! )
            .subscribe( resp => {
              this.router.navigate(['/heroes'])
            })
        }
      })
  }

  showSnackBar( message: string) {
    this.snackBar.open( message, 'Cerrar', { 
      duration: 2000
    })
  }

}
