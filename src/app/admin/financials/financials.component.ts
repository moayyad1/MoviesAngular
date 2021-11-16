import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {
  MonthlyGains:any=[]
  totalTickets=0
  totalGains=0
  
  constructor(private myService:MyServiceService) { 
    this.totalTickets=0
    this.totalGains=0

 myService.requestCall("https://localhost:44391/api/payment/getPayment","Get")?.subscribe(data=>{this.totalTickets=data})

 myService.requestCall("https://localhost:44391/api/payment/getMonthlyGains","Get")?.subscribe(data=>{
   
   this.MonthlyGains=data

   let count=0
   this.MonthlyGains.forEach((element:any) => {
     
     
         this.totalGains+=parseInt(element.total)
         count+=parseInt(element.moviesBought)
  });

  this.totalTickets=count
   

})





  }

  ngOnInit(): void {

   
  }

}
