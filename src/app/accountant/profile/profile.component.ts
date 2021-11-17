import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';

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
  constructor(private Service:MyServiceService) {
    
    
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
          
        }
      });

      this.Service.requestCall(
        'https://localhost:44391/api/Accountant/GetAccountant','Get'
      )?.subscribe((data) => {
        this.accountants = data;
        this.accountants.forEach((item:any) => {
          if(item.id==this.accLogin.accountantId){
            this.accInfo=item;
          }
        });
      });
    });
  }


  
}
