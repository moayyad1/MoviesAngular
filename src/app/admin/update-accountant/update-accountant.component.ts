import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-update-accountant',
  templateUrl: './update-accountant.component.html',
  styleUrls: ['./update-accountant.component.css']
})
export class UpdateAccountantComponent implements OnInit {

  holderList: any = [];
  EmailList: any = [];
  checkBoxValue = false;
  myform: any;
  password = null;
  userEmail = '';
  RegisterResult: any = [];
  ConfirmedPassword = null;
  result = false;
  passwordValid = true;
  newData: any = [];
  customerID: any;
  imageMessage=''
  errorLogs = '';
  emailValidation: any = 'initlize';
  EmailIsValid = true;
  usernameIsValid = false;
  visaIsValid = false;
  userName:any = '';
  firstName:any = '';
  lastName:any = '';
  accountant:any = {};
  ImageName:any;
  login:any={};
  FN:any='';
  phone:any='';
  Email:any='';
  gender:any='';
  salary:any='';

  

  constructor(private myService: MyServiceService,private toaster:ToastrService,private spinner:NgxSpinnerService,public IdService:MovieServiceService) {

    myService
      .requestCall('https://localhost:44391/api/Accountant/getAccountant', 'Get')
      ?.subscribe((data) => {
        this.EmailList = data;


        data.forEach((element:any) => {
          if(element.id == IdService.accountantId){
            this.accountant=element;
            console.warn(this.accountant);


            this.firstName=element.firstName;
            this.lastName=element.lastName;
            this.phone=element.phone;
            this.Email=element.email;
            this.gender=element.gender;
            this.salary=element.salary;


          }
        });
      });

      myService
      .requestCall('https://localhost:44391/api/Login/getLogin', 'Get')
      ?.subscribe((data) => {
        
        data.forEach((element:any) => {
          if(element.accountantId == IdService.accountantId){
            this.login=element;
            console.warn('login');
            
            console.warn(this.login);
            
          }
        });
      });



   }

  ngOnInit(): void {
    this.getAccountantById();

  }


  updateAccountant(){

    this.spinner.show();
    let AccountantObject = {
      id: this.accountant.id,
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.accountant.email,
      gender: this.gender,
      img: this.accountant.img,
      salary: parseInt(this.salary),
      wallet: this.accountant.wallet
    };
      
     this.myService.requestCall('https://localhost:44391/api/Accountant/UpdateAccountant','Put',AccountantObject)?.subscribe(
      (data) => {   
        this.toaster.success('updated successfully')
        this.spinner.hide();
      },
      (err) => {
        this.toaster.error("error while update account")
        setTimeout(() => {
          this.toaster.error("error while update account")
        }, 1500);
      }
     );
     
     
      

  }




  uploadFile(files:any) {
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.myService.uploadAttachment(formData);
    }

  


  getColor(id: any) {
    switch (id) {
      case 1: {
        if (this.firstName == '') {
          return '';
        } else return '1px green solid';
      }
      case 2: {
        if (this.lastName == '') {
          return '';
        } else return '1px green solid';
      }
      case 3: {
        if (this.userName == '') {
          return '';
        } else return '1px green solid';
      }
    }
    return '1px solid green';
  }

  getEmailBorderColor() {
    if (this.emailValidation == 'initlize') {
      return '';
    } else if (this.emailValidation == 'Error') {
      return '1px red solid';
    } else return '1px green solid';
  }
  getBorderColor() {
   
    if (this.password == null) {
      return '';
    } else if (this.password == this.ConfirmedPassword) {
      this.passwordValid = true;
      return '1px green solid';
    } else {
      this.passwordValid = false;
      return '1px red solid';
    }
  }
  checkEmail(isValid: any) {
    this.EmailIsValid = true;
    let email = this.userEmail;
    if (isValid) this.emailValidation = 'true';
    else this.emailValidation = 'Error';

    this.EmailList.forEach((item: any) => {
      if (item.email == email) {
        this.emailValidation = 'Error';
        this.EmailIsValid = false;
      }
    });
  }
  checkLength(data:any)
  {
   if(data)
  {
        return '1px green solid';
  }
  else
   return '1px red solid'
  }
  checkPassword() {
    if (this.password == this.ConfirmedPassword) {
      this.passwordValid = true;
      return true;
    } else {
      this.passwordValid = false;
      return false;
    }
  }
  getAccountantById(){
    this.myService
      .requestCall('https://localhost:44391/api/Accountant/getAccountant', 'Get')
      ?.subscribe((data) => {
        data.forEach((element:any) => {
          if(element.id == this.IdService.accountantId){
            this.accountant=element;
            console.warn(this.accountant);
            
          }
        });
      });
  }

}
