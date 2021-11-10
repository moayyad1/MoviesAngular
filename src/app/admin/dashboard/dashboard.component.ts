import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProfit=0
  CustomersCount=0
  moveisCount=0
  categoriesCount=0
  newistMovies:any[]=[]
  
  constructor(private route:Router,private servie:MyServiceService) { 

   servie.requestCall("https://localhost:44391/api/Payment/GetSumOfpayments","Get")?.subscribe(
     data =>{this.totalProfit=data}
   )
   servie.requestCall("https://localhost:44391/api/Movie/GetMovie","Get")?.subscribe(
     data=>{
      let list:any[]=data
      this.moveisCount=list.length
      
     }
  

   )

   servie.requestCall("https://localhost:44391/api/Customer/GetCustomer","Get")?.subscribe(
    data=>{
     let list:any[]=data
     this.CustomersCount=list.length
     
    }
   )
   servie.requestCall("https://localhost:44391/api/Category/GetCategory","Get")?.subscribe(
    data=>{
     let list:any[]=data
     this.categoriesCount=list.length
     
    }
   )
   servie.requestCall("https://localhost:44391/api/Movie/getMovie","Get")?.subscribe(
    data=>{
     this.newistMovies=data
      
     this.newistMovies.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
     console.warn((this.newistMovies));
    

     
    }
   )
 


  }

  ngOnInit(): void {
  }
  GoToMovies()
  {
   this.route.navigate(['Admin/moviesData'])
  }
 
}

