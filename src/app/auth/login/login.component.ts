import { Component, OnInit } from '@angular/core';
import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { AuthRoutingModule } from '../auth-routing.module';
import { Router } from '@angular/router';
import {NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service'; 
import jwtDecode from 'jwt-decode';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { ThemePalette } from'@angular/material/core';
import { ProgressSpinnerMode } from'@angular/material/progress-spinner';
=======
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;  
  APIURl:string ="https://localhost:44391/api/"
  loginAttemptresult=true
=======
   APIURl:string ="https://localhost:44391/api/"
   loginAttemptresult=true
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
  rememberMe = false;
  myList:any=[]
  checkStorage :string |null='';
  userNameText :string |null=''
  passwordText :string |null=''


<<<<<<< HEAD
  constructor(private service :MyServiceService , private mainRoute:Router,private toast:ToastrService) {
=======
  constructor(private service :MyServiceService , private mainRoute:Router) {
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
     
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
<<<<<<< HEAD
    // this.toast.success("Welcome to first toast");
=======
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
  }
 onchange(){
   alert(this.rememberMe)
 }
 getData(){
<<<<<<< HEAD

this.APIURl+="Login/GetLogin"
=======
   this.APIURl+="Login/GetLogin"
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
 this.service.requestCall(this.APIURl,"Get")?.subscribe(data=>{this.myList=data})
 }
  loginSubmit(data:NgForm){
    this.APIURl="https://localhost:44391/api/Login/checkLogin"
<<<<<<< HEAD
    let user={  
=======
    let  user={  
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
        
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
      
<<<<<<< HEAD
         localStorage.setItem('userToken',tokenValue)
=======

      
        
         
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
         
       switch(tokenValue.role)
      {
        case ('1'):{
         //route here for Admin
<<<<<<< HEAD
=======
         localStorage.setItem('userRole','1')
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
      
         break
        }
        case ('2'):{
          //route here for Customer
<<<<<<< HEAD
=======
          localStorage.setItem('userToken',result.tokenValue)
          localStorage.setItem('userRole','2')
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
          this.mainRoute.navigate(["movies/home"])
         
         break
        }
        case ('3'):{
           //route here for Accountant
<<<<<<< HEAD
=======
           localStorage.setItem('userRole','3')
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
         break
        }
         
      }

    
       
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