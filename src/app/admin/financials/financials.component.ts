import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {
  totalTickets:any=[]
  
  constructor(private myService:MyServiceService) { 

 myService.requestCall("https://localhost:44391/api/payment/getPayment","Get")?.subscribe(data=>{this.totalTickets=data})

  }

  ngOnInit(): void {

   
  }

}
