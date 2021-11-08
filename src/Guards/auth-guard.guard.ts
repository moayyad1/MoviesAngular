import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinner } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor( private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token: any = localStorage.getItem('userToken');
    //appply path to all paths of movies
    if (state.url.indexOf('movies') >= 0) {
      //if there is a token in local storage
      if (token) {
        let role = localStorage.getItem('userRole');

        //check his role if it 2 'customer'
        if ((role = '2')) {
          return true;
        }

        //if role isnt customer maybe admin/accontant
        else
           return false;
      }
      
      else {
        //this will appear if he tries to access by url , need token so routing him to login page
        alert('login pls');
        this.route.navigate([''])
         return false;
      }
    }
    //if maybe an admin tries to get to customer by using url
    else {
      alert('this is only for customers ');
      return false;
    }
  }
}
