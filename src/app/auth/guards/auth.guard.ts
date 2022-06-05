import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( 
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if ( this.authService.auth.id ){
      //   return true
      // }
      // console.log('Bloqueado por guard - CanActivate')
      // return false
      return this.authService.verifyAuth()
                  .pipe(
                    tap( isAuth => {
                      if( !isAuth ){
                        this.router.navigate(['./auth'])
                      }
                    })
                  )
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
      // console.log('canload:', false)
      // console.log(route);
      // console.log(segments)

      return this.authService.verifyAuth()
                .pipe(
                  tap( isAuth => {
                    if( !isAuth ){
                      this.router.navigate(['./auth'])
                    }
                  })
                )
      // if ( this.authService.auth.id ){
      //   return true
      // }
      // console.log('Bloqueado por guard - CanLoad')
      // return false;
  }
}
