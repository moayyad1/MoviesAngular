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
  constructor(private service :MyServiceService , private mainRoute:Router,private toast:ToastrService,private spinner:NgxSpinnerService) { }

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
    },5000)
    
    
  }
  ConfirmVerification(f: NgForm) {
    this.spinner.show();
    this.service.requestCall('https://localhost:44391/api/Login/GetLogin','Get')
          ?. subscribe((data) => {
            this.AllLogin=data;
            console.warn('true');
            this.AllLogin.forEach((element:any) => {
              if(parseInt(f.value.verCode) == parseInt(element.verification)){
                this.toast.success("True verification code");this.spinner.hide(); 
                this.isVerificationValid = true;
              }
            });
          },
          err => { 
            this.toast.error("False verification code");this.spinner.hide(); 
        });
        this.spinner.hide(); 
  }
}
