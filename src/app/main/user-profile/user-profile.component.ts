import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  firstName:any;
  lastName:any;
  phone:any;
  email:any;
  EmailList:any=[];
  customerEmailData:any={};
  constructor(public moviedetails:MovieServiceService,private route:Router,private myservice:MyServiceService,private spinner:NgxSpinnerService,private toast:ToastrService) { 
  }
  CustomerData:any=[{}];
  Customers:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');
  img:any = '';
  ngOnInit(): void {
    this.GetCustomerById();
    this.GetCustomers();    
  }
  GetCustomers()
  {
    this.moviedetails.GetCustomers().subscribe((res:any) =>{(this.Customers=res)},
    err => {console.log(err)})
  }
  CheckEmailExist(email:any)
  {
   this.GetCustomers();
    let exist = false;
    this.Customers.forEach((element:any) => {
      if(element.email==email)
      {
        exist=true;
      } 
    }); 
    return exist;
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
  UpdateCustomerData(updateInfo:NgForm)
  {
    if(!this.CheckEmailExist((updateInfo.value.email).toString()) || (updateInfo.value.email).toString()==(this.CustomerData.email).toString())
    {
      this.spinner.show()
      let updateCustomerObject={
        id:parseInt(this.customerId),
        firstName:updateInfo.value.firstName,
        lastName:updateInfo.value.lastName,
        phone:updateInfo.value.phone,
        email:updateInfo.value.email,
        gender:this.CustomerData.gender,
        img:this.CustomerData.img,
        wallet:this.CustomerData.wallet,
        visaCard:this.CustomerData.visaCard
       };
        this.myservice.requestCall('https://localhost:44391/api/Customer/UpdateCustomer','Put',updateCustomerObject)?.subscribe(
          (data) => {  
            setTimeout(() => {
              this.spinner.hide();
            }, 1500);
            this.toast.success('Information Updated successfully');  
            this.GetCustomers();
          },
          (err) => {
            setTimeout(() => {
              this.spinner.hide();
            }, 1500);
            this.toast.error('Error While Updateing information')
          }         
        );
      
    }
    else{
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.error('email already exist, try another one');  
    }
   }
   
   uploadImage(files:any) {
    let fileToUpload = <File>files[0];
    this.img=fileToUpload.name
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.myservice.uploadAttachment(formData);
    if (files.length === 0) {
    return;
    }
    this.spinner.show()
    let updateCustomerObject={
      id:parseInt(this.customerId),
      firstName:this.CustomerData.firstName,
      lastName:this.CustomerData.lastName,
      phone:this.CustomerData.phone,
      email:this.CustomerData.email,
      gender:this.CustomerData.gender,
      img:this.img,
      wallet:this.CustomerData.wallet,
      visaCard:this.CustomerData.visaCard
     };
      this.myservice.requestCall('https://localhost:44391/api/Customer/UpdateCustomer','Put',updateCustomerObject)?.subscribe(
        
        (data) => {  
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
          this.toast.success('Information Updated successfully');  
          this.GetCustomers();
        },
        (err) => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
          this.toast.error('Error While Updateing information')
        }         
      );

    }
  }

