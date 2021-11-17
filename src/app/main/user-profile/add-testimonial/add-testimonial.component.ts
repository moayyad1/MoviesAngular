import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.css']
})
export class AddTestimonialComponent implements OnInit {

  constructor(private route:Router,public moviedetails:MovieServiceService,private spinner:NgxSpinnerService,private toast:ToastrService,private myservice:MyServiceService) { }
  message:any;
  stars:any;
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
  Addtestimonial(addTesti:NgForm)
  {
    this.spinner.show()
    let testimonialObject = {
      customerId:this.CustomerData.id,
      message:addTesti.value.message,
      stars:parseInt(addTesti.value.stars),
      isActive:0,
    };
  
      this.myservice.requestCall('https://localhost:44391/api/Testimonial/InsertTestimonial','Post',testimonialObject)?.subscribe(
        (data) => {  
          setTimeout(() => {
            this.spinner.hide();
          }, 2500);
          this.toast.success('Added successfully, Waiting for admin approval :)');  
          setTimeout(() => {
            window.location.reload();
          }, 1500);
               
        },
        (err) => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
          this.toast.error('Error Adding');
          window.location.reload();    
        }
    );
  }
}
