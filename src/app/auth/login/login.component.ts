import { Component, OnInit } from '@angular/core';
import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { AuthRoutingModule } from '../auth-routing.module';
import { Router } from '@angular/router';
import {NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service'; 
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { ThemePalette } from'@angular/material/core';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  APIURl:string ="https://localhost:44391/api/"
  loginAttemptresult=true
  rememberMe = false;
  myList:any=[]
  checkStorage :string |null='';
  userNameText :string |null=''
  passwordText :string |null=''
  constructor(private service :MyServiceService , private mainRoute:Router,private toast:ToastrService,private spinner:NgxSpinnerService) {
     
      this.checkStorage = localStorage.getItem('rememberCheck');
     if(this.checkStorage == "true")
     {
      this.userNameText = localStorage.getItem('userName');
      this.passwordText = localStorage.getItem('password');
 
      this.rememberMe=true
     }
     else
       this.rememberMe=false
   }

  ngOnInit(): void {
    // this.toast.success("Welcome to first toast");
  }
 onchange(){
   alert(this.rememberMe)
 }
 getData(){
   this.APIURl+="Login/GetLogin"
 this.service.requestCall(this.APIURl,"Get")?.subscribe(data=>{this.myList=data})
 }
  loginSubmit(data:NgForm){
      this.spinner.show();
 
    this.APIURl="https://localhost:44391/api/Login/checkLogin"
    let  user={         
      userName:data.value.userName,
      password: data.value.password
    }
    
    this.service.requestCall(this.APIURl,"Post",user)?.subscribe((result:any)=>{
     if(result.tokenValue != null)
     {
       
      // getting Token Data
       const tokenValue:any=jwtDecode(result.tokenValue);
       console.log(tokenValue);

         // saving the last success login Attempt
         if(this.rememberMe == true){
          localStorage.setItem('rememberCheck',"true");
          localStorage.setItem('userName',user.userName);
          localStorage.setItem('password',user.password);
         }
         else
         localStorage.setItem('rememberCheck',"false");
       switch(tokenValue.role)
      {
        case ('1'):{
         //route here for Admin
        
         localStorage.setItem('userToken',result.tokenValue)
         localStorage.setItem('userRole','1')
         this.mainRoute.navigate(["Admin"])
         setTimeout(() => {
           this.spinner.hide();
         }, 1000);
            this.toast.success("Welcome " +this.userNameText + ' :)')
            break
        }
      
         
        
        case ('2'):{
          //route here for Customer
          localStorage.setItem('userToken',result.tokenValue)
          localStorage.setItem('userRole','2')
          this.mainRoute.navigate(["movies/home"])
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
          this.toast.success("Welcome " +this.userNameText + ' :)')
         break
        }
        case ('4'):{
           //route here for Accountant
           localStorage.setItem('userToken',result.tokenValue)
           localStorage.setItem('userRole','4');
           this.mainRoute.navigate(["Accountant"])
          setTimeout(() => {
            this.spinner.hide();
          }, 1000);
          this.toast.success("Welcome " +this.userNameText + ' :)')
         break
         
        }
         
      }      
     }
     else
     { //if data are incorrect show some failed animation     
       this.loginAttemptresult = false ;
       this.toast.error('Username or Password is incorrect')
       setTimeout(() => {
        this.spinner.hide();
      }, 900);
     }
   
    },err=>{this.toast.error('Something went error,try again later!!')
      setTimeout(() => {
      this.spinner.hide();
    }, 1000);})
    if (this.rememberMe){   
    }
  }
  CheckRememberMe(){
    this.rememberMe = !this.rememberMe;
    console.log(this.rememberMe);
  }
changeLoginState(){
  this.loginAttemptresult=true
}
  getBorderColor() {
    if(this.loginAttemptresult == false  )
    {
      return '3px red solid';
    } 
    else
     
      return '';   
  }
}