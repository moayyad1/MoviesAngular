import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route:Router,public moviedetails:MovieServiceService,private spinner:NgxSpinnerService,private toast:ToastrService,private myservice:MyServiceService) { }
  password:any;
  passwordagain:any;
  CustomerData:any=[{}];
  Customers:any=[{}];
  LoginData:any=[{}];
  thisUserLoginData:any={};
  customerId:any=localStorage.getItem('CustomerId');

  ngOnInit(): void {
    this.GetCustomerById();
    this.GetCustomers();    
    this.getData();

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
  getData(){
  this.myservice.requestCall("https://localhost:44391/api/Login/GetLogin","Get")?.subscribe(data=>{this.LoginData=data})
  }

  UpdatepassData(updatepass:NgForm)
  {  
    this.myservice.requestCall("https://localhost:44391/api/Login/GetLogin","Get")?.subscribe(data=>{this.LoginData=data
    this.LoginData.forEach((element:any) => { 
      if(this.customerId==element.customerId)
      {
      this.thisUserLoginData=element;
      }
    });
    let passObject = {
      id:parseInt(this.thisUserLoginData.id),
      userName:this.thisUserLoginData.userName,
      password:updatepass.value.password,
      departmentId:2,
      accountantId:null,
      customerId:parseInt(this.customerId),
      verification:this.thisUserLoginData.verification,
    };
    console.warn(passObject);
    if(this.password==this.passwordagain && this.password.length >= 8 && this.passwordagain.length >= 8 )
    {
      this.spinner.show()
      this.myservice.requestCall('https://localhost:44391/api/Login/UpdateLogin','Put',passObject)?.subscribe(
        (data) => {  
          setTimeout(() => {
            this.spinner.hide();
          }, 2500);
          this.toast.success('Password Updated successfully');  
          setTimeout(() => {
            window.location.reload();
          }, 1500);             
        },
        (err) => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
          this.toast.error('Error While Updating Password');
        }
    );
    }
    else if(this.password.length < 8 )
    {
      this.toast.error('Passwords must be bigger than 8 characters'); 
    }
    else
    {
      this.toast.error('Passwords do not match'); 
    }
  }) 
this.getData();
}
}
