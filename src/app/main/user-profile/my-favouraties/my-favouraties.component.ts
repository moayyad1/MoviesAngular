import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-my-favouraties',
  templateUrl: './my-favouraties.component.html',
  styleUrls: ['./my-favouraties.component.css']
})
export class MyFavouratiesComponent implements OnInit {

  constructor(private route:Router,public moviedetails:MovieServiceService,private myservice:MyServiceService,private spinner:NgxSpinnerService,private toast:ToastrService) {
   }
  GetAllMovies:any=[{}];
  GetFav:any=[{}];
  CustomerData:any=[{}];
  Customers:any=[{}];
  CustomersFav:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');

  ngOnInit(): void {
    this.GetCustomerById();
    this.GetCustomers();    
    this.GetFavourites();
    this.GetMovies();
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
GetMovies()
{
    this.moviedetails.getAllMovies().subscribe((res:any) => { (this.GetAllMovies=res) },
  err => { console.log(err) })  
}
GetFavourites()
{
  this.moviedetails.GetFavourites().subscribe((res:any) => { (this.GetFav=res) },
  err => { console.log(err) })  
}
Delete(id:any){
  this.spinner.show();
  console.warn(id);
  this.myservice.requestCall("https://localhost:44391/api/CustomerList/DeleteCustomerList/"+id,"Delete")?.subscribe(   
      (data) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
     this.toast.success('Deleted successfully');
     this.GetFavourites();
      },
      (err) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
       this.toast.error('Error While Deleting')
      }
    );
  
 }

}
