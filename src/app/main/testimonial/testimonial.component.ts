import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent implements OnInit {
  teste:any=[{}];
  customers:any=[{}];
  CustomerData:any=[{}];
  myScriptFile:HTMLScriptElement;
  seconScript:HTMLScriptElement;
  customerId:any=localStorage.getItem('CustomerId');
  constructor(private moviedetails: MovieServiceService) {     
       this.myScriptFile=document.createElement("script")
       this.myScriptFile.src="../../../../assets/jsFile/homePageSlider.js"
       this.seconScript=document.createElement("script")
        document.body.appendChild(this.myScriptFile)
   }

  ngOnInit(): void {
  this.getTestimonial();
  this.GetCustomers();
  this.GetCustomerById();
  }
  getTestimonial()
  {
this.moviedetails.getTestimoniall().subscribe((res:any) => { (this.teste=res) },
err => { console.log(err) })
console.warn(this.teste);

  }
  GetCustomers()
  {
    this.moviedetails.GetCustomers().subscribe((res:any) =>{(this.customers=res)},
    err => {console.log(err)})
  }
  GetCustomerById()
{
  this.moviedetails.GetCustomerById(this.customerId).subscribe((res:any) =>{(this.CustomerData=res)},
  err => {console.log(err)})
  console.warn(this.CustomerData)
}
}
