import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  websiteData:any = [{}];
  CustomerData:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');
  constructor(private route:Router,private movieService:MovieServiceService ) { }

  ngOnInit(): void {
    this.getWebSiteDetails();
    this.GetCustomerById();
  }
  GetCustomerById()
  {
    this.movieService.GetCustomerById(this.customerId).subscribe((res:any) =>{this.CustomerData=res},
    err => {console.log(err)});
   
  }
  gotobest()
  {
this.route.navigate(["movies/best"])
  }
  gotohome()
  {
    this.route.navigate(["movies/home"])
  }
  gotoabout()
  {
    this.route.navigate(["movies/about"])
  }
  gotoacontact()
  {
    this.route.navigate(["movies/contact"])
  }
  getWebSiteDetails()
  { 
      this.movieService.getWebSiteDetails().subscribe((res:any) => { (this.websiteData=res)},
      err => { console.log(err) })   
  }
  logOutBtn(){ 
    localStorage.removeItem('userToken')
    this.route.navigate([''])
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
  gototestimonial()
  {
    this.route.navigate(['movies/add_testimonial']);
  }
}

