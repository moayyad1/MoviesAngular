import { Component, OnInit } from '@angular/core';
import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { AuthRoutingModule } from '../auth-routing.module';
import { Router } from '@angular/router';
import {NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service'; 
import jwtDecode from 'jwt-decode';

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
  userNameText :string |null;
  passwordText :string |null;


  constructor(private service :MyServiceService , private mainRoute:Router) {
      this.userNameText = localStorage.getItem('userName');
      this.passwordText = localStorage.getItem('password');
      this.checkStorage = localStorage.getItem('rememberCheck');
     if(this.checkStorage == "true")
     {
      console.log(localStorage.getItem('userName'));
      console.log(localStorage.getItem('password'));
      this.rememberMe=true
     }
     else
       this.rememberMe=false
   }

  ngOnInit(): void {
  }
 onchange(){
   alert(this.rememberMe)
 }
 getData(){
   this.APIURl+="Login/GetLogin"
 this.service.requestCall(this.APIURl,"Get")?.subscribe(data=>{this.myList=data})
 }
  loginSubmit(data:NgForm){
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
       switch(tokenValue.role)
      {
        case ('1'):{
         //route here for Admin
      
         break
        }
        case ('2'):{
          //route here for Customer
          this.mainRoute.navigate(["movies/home"])
         
         break
        }
        case ('3'):{
           //route here for Accountant
         break
        }
         
      }

       // saving the last success login Attempt
       localStorage.setItem('userName',user.userName);
       localStorage.setItem('password',user.password);
       localStorage.setItem('rememberCheck',"true");
       localStorage.setItem('userToken',tokenValue)
       
     }
     else
     { //if data are incorrect show some failed animation
     
       this.loginAttemptresult = false 

     }
    
     
    },err=>{console.log(err)})
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