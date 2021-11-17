import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials:any=[{}];
  customers:any=[{}];
  testCus:any=[];
  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getTestimonial();
    
  }
  
  getCustomers(){
    this.service.requestCall(
      'https://localhost:44391/api/Customer/GetCustomer',
      'Get'
    )?.subscribe((data) => {
      this.customers = data;
    });
  }
  getTestimonial(){
    this.testCus=[];
    this.service.requestCall(
      'https://localhost:44391/api/Testimonial/GetTestimonial',
      'Get'
    )?.subscribe((data) => {
      this.testimonials = data;
      this.testimonials.forEach((test:any) => {
      this.customers.forEach((cus:any) => {
        if(test.customerId==cus.id){
          test.name=cus.firstName+" "+cus.lastName;
          test.img=cus.img;
          this.testCus.push(test);
        }
        });
        
      });
    });
  }
  Activation(Id:any,CustomerId:any,Message:any,Stars:any){
    let newActivation:any={
      id:Id,
      customerId:CustomerId,
      message:Message,
      stars:Stars,
      isActive:1
    };
    
    this.service.requestCall(
      'https://localhost:44391/api/Testimonial/UpdateTestimonial',
      'Put',
      newActivation
    )?.subscribe((data) => {
      
    });
    this.getTestimonial();
  }
  
  Disable(Id:any,CustomerId:any,Message:any,Stars:any){
    let newActivation:any={
      id:Id,
      customerId:CustomerId,
      message:Message,
      stars:Stars,
      isActive:0
    };
    
    this.service.requestCall(
      'https://localhost:44391/api/Testimonial/UpdateTestimonial',
      'Put',
      newActivation
    )?.subscribe((data) => {
      
    });

    this.getTestimonial();
  }

}
