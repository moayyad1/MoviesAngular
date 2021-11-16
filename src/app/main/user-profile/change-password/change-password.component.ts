import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route:Router,public moviedetails:MovieServiceService) { }

  CustomerData:any=[{}];
  Customers:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');

  ngOnInit(): void {
    this.GetCustomerById();
    this.GetCustomers();    
  }
  GetCustomers()
  {
    this.moviedetails.GetCustomers().subscribe((res:any) =>{(this.Customers=res)},
    err => {console.log(err)})
  }
  GetCustomerById()
  {
    this.moviedetails.GetCustomerById(this.customerId).subscribe((res:any) =>{(this.CustomerData=res)},
    err => {console.log(err)})
  }
  goToFav()
  {
    this.route.navigate(['movies/user_favouraties']);
  }
  goToAccount()
  {
    this.route.navigate(['movies/user_profile']);
  }
  goaddBalance()
  {
    this.route.navigate(['movies/add_balance']);

  }
  goTochangePass()
  {
    this.route.navigate(['movies/change_pass']);

  }

}
