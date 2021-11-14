import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';
import { MyServiceService } from 'src/app/shared/my-service.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
paymentList:any=[]
searchList:any=[]


  constructor(private myService:MyServiceService,private printer:NgxPrintModule) {


    myService.requestCall("https://localhost:44391/api/payment/getPayment","Get")?.subscribe(data=>{
      
    this.paymentList=data

    this.paymentList.forEach((element:any) => {
      let value:any =new Date(element.time)
      let year = value.getFullYear()
      let month = value.getMonth()+1
      let day = value.getDate()
      let fullDate = month+'-'+day+'-'+year
      element.time=fullDate
      console.warn(new Date(fullDate));
      
       
       

      this.myService.requestCall("https://localhost:44391/api/Customer/GetCustomerById/"+element.customerId,'Get')?.subscribe(data=>{
        element.firstName=data.firstName
      
    
      })
    
      
    });
    this.paymentList.forEach((element:any) => {
      element.movieName='ree'
      this.myService.requestCall("https://localhost:44391/api/Movie/GetMovieByID/"+element.movieId,'Get')?.subscribe(data=>{
        element.movieName=data.name
        this.searchList=this.paymentList
      })
    
      
    });
  })
  
 
   }

  ngOnInit(): void {
  }

//resetting the list to be the exact same as its from API
resetSearch()
{
  this.searchList=this.paymentList
}

//searhcing in list 
  searchInTable(formData:NgForm){
    this.searchList=this.paymentList
    let mylist:any=[]
    let value =(formData.value.textName)
    if(value=='')
    {
      this.searchList=this.paymentList
    }
    else
    {
     this.searchList.forEach((x:any) => {
       if(x.firstName.toLowerCase() ==value.toLowerCase()  ||x.customerId==value|| x.time==value ||x.movieName.toLowerCase() ==value.toLowerCase() ||x.movieId==value||x.value==value||x.id==value){
       mylist.push(x)
       }
    });
    this.searchList=mylist
  }
    
    
  }


}
