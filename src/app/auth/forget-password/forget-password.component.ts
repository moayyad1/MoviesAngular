import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { MyServiceService } from 'src/app/shared/my-service.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  userNameText :string |null=''
  AllLogin:any=[{}];
  isSent:boolean=false;
  isUserNameV:boolean=false;
  verCode:number|undefined;
  isVerificationValid:boolean=false;
  newPassword:any='';
  loginId:any=0;
  customerUserName:any|undefined;
  customerId:number|undefined;

  constructor(private route:Router ,private service :MyServiceService , private mainRoute:Router,private toast:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  send(f: NgForm){
    this.spinner.show();
    let exist=false;
    
    this.service.requestCall('https://localhost:44391/api/Login/GetLogin','Get')
    ?.subscribe((data) => {
      
      this.AllLogin = data;

      this.AllLogin.forEach((element:any) => {

        if(element.userName == f.value.userName){
          // this.spinner.hide();
          this.service.requestCall('https://localhost:44391/api/Login/SendVerification/'+f.value.userName.toString(),'Post')
          ?. subscribe((data) => {
            this.isSent=true;
            this.isUserNameV=true;
            this.toast.success("Verification Code sent successfully");
            this.spinner.hide();
          },
          err => { this.toast.error("Username not found !");this.spinner.hide(); });
          
        }
        
        
      });
    });
    setTimeout(()=> {
      if(!this.isSent){
        this.toast.error("Username not found !");this.spinner.hide(); 
          this.spinner.hide();
    }
    },7000)
    
    
  }
  ConfirmVerification(f: NgForm) {
    this.spinner.show();
    this.service.requestCall('https://localhost:44391/api/Login/GetLogin','Get')
          ?. subscribe((data) => {
            this.AllLogin=data;
            console.warn('true');
            this.AllLogin.forEach((element:any) => {
              if(parseInt(f.value.verCode) == parseInt(element.verification)){
                this.loginId=element.id;
                this.customerUserName=element.userName;
                this.customerId=element.customerId
                this.toast.success("The verification code is correct");this.spinner.hide(); 
                this.isVerificationValid = true;

              }
            });
          },
          err => { 
            this.toast.error("The verification code isn't correct");this.spinner.hide(); 
        });
        setTimeout(()=> {
          {
            
            if(!this.isVerificationValid){
              this.toast.error("The verification code isn't correct");this.spinner.hide(); 
            }
            this.spinner.hide();
        }
        },1555)
         
  }
  UpdatePassword(f: NgForm){

    let newList={
      id:this.loginId,
      userName:this.customerUserName,
      password:(f.value.newPassword).toString(),
      departmentId:2,
      customerId:this.customerId
    }
    console.warn(newList);
    
    this.spinner.show();
    this.service.requestCall('https://localhost:44391/api/Login/UpdateLogin','Put',newList)
    ?. subscribe((data) => {

      this.toast.success("The password has been changed successfully");
      setTimeout(()=> {
        {
          
            this.spinner.hide();
            this.route.navigate(['']);
      }
      },1555)
      
      this.spinner.hide();
    },
    err => { this.toast.error("Username not found !");this.spinner.hide();});
  }

  checkPass(pass1:any,pass2:any){
    if(pass1=='')
    {
      return false;
    }
         return(pass1==pass2);
         
  }
}
