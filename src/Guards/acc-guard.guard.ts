import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccGuardGuard implements CanActivate {
  constructor( private route: Router,private toatstr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token: any = localStorage.getItem('userToken');
      console.warn(localStorage.getItem('userToken'));
      
      //appply path to all paths of movies
      if (state.url.indexOf('Accountant') >= 0) {
        //if there is a token in local storage
        if (token) {
          let role = localStorage.getItem('userRole');
  
          //check his role if it 2 'customer'
          if ((role == '4')) {
            return true;
          }
  
          //if role isnt customer maybe admin
          else{
            this.toatstr.error("Access Denied this for Accountants")
            this.route.navigate(['/Admin'])
            return false;
          }
            
        }
        
        else {
          //this will appear if he tries to access by url , need token so routing him to login page
          this.toatstr.error("Please Login to access the page")
          this.route.navigate([''])
           return false;
        }
      }
      //if maybe an admin tries to get to customer by using url
      else {
        this.toatstr.error("this page only for Accountans")
        return false;
      }



  }
  
}
