import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( 
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    // go backen
 
    // go user
    this.authService.login()
      .subscribe( res => {
        if( res.id){
          this.router.navigate(['/heroes'])

        }
      })
  }

  loginFalse(){
    this.authService.logout();
    this.router.navigate(['/heroes'])
  }

}
