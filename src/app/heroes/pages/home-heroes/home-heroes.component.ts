import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home-heroes',
  templateUrl: './home-heroes.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `
  ]
})
export class HomeHeroesComponent implements OnInit {
  
  get auth(){
    return this.authService.auth;
  }

  constructor( 
    private _router: Router,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this._router.navigate(['/auth'])
  }
}
