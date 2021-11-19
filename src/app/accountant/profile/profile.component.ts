import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName:any=localStorage.getItem("userName");
  accountants:any=[{}];
  login:any=[{}];
  accInfo:any={};
  accLogin:any={};

  firstName:any = '';
  lastName:any = '';
  phone:any = '';
  email:any = '';
  img:any = '';

  conPassword:any = '';
  newPassword:any = '';

  constructor(private Service:MyServiceService,private toaster:ToastrService,private spinner:NgxSpinnerService) {
    
    
   }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.Service.requestCall(
      'https://localhost:44391/api/Login/GetLogin','Get'
    )?.subscribe((data) => {
      this.login = data;
      this.login.forEach((item:any) => {
        if(item.userName==this.userName){
          this.accLogin=item;
          this.conPassword = item.password;
          this.newPassword = item.password;
        }
      });

      this.Service.requestCall(
        'https://localhost:44391/api/Accountant/GetAccountant','Get'
      )?.subscribe((data) => {
        this.accountants = data;
        this.accountants.forEach((item:any) => {
          if(item.id==this.accLogin.accountantId){
            this.accInfo=item;
            this.firstName=this.accInfo.firstName;
            this.lastName=this.accInfo.lastName;
            this.phone=this.accInfo.phone;
            this.email=this.accInfo.email;
            this.img=this.accInfo.img;
          }
        });
      });
    });

  }

  updateProfile(){
    this.spinner.show();
    let newDate={
      id: this.accInfo.id,
      firstName: this.firstName,
      lastName:this.lastName,
      phone:this.phone,
      email:this.email,
      img:this.img,
      gender:this.accInfo.gender,
      wallet:this.accInfo.wallet,
      salary:this.accInfo.salary
    }

    this.Service.requestCall(
      'https://localhost:44391/api/Accountant/UpdateAccountant','Put',newDate
    )?.subscribe((data) => {
     this.toaster.success("updated successfully");
     this.getInfo();
     this.spinner.hide();
    });

    
  }

  updatePassword(){

    if(this.conPassword == this.newPassword)
    {
      this.spinner.show();
      let newDate={
        id: this.accLogin.id,
        userName: this.accLogin.userName,
        password: this.newPassword,
        departmentId:4,
        accountantId:this.accInfo.id
  
      }
  
      this.Service.requestCall(
        'https://localhost:44391/api/Login/UpdateLogin','Put',newDate
      )?.subscribe((data) => {
       this.toaster.success("updated successfully");
       this.getInfo();
       this.spinner.hide();
      });
    }
    else{
      this.toaster.error("Passwords do not match");
    }
    

  }



  uploadImage(files:any) {
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    this.img=fileToUpload.name
    this.updateProfile()
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.Service.uploadAccountantImage(formData);
    }


}
