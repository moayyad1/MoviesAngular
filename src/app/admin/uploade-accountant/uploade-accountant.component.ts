import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-uploade-accountant',
  templateUrl: './uploade-accountant.component.html',
  styleUrls: ['./uploade-accountant.component.css']
})
export class UploadeAccountantComponent implements OnInit {

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
  userName = '';
  firstName = '';
  lastName = '';
  constructor(private myService: MyServiceService,private toaster:ToastrService,private spinner:NgxSpinnerService) {

    myService
      .requestCall('https://localhost:44391/api/Accountant/getAccountant', 'Get')
      ?.subscribe((data) => {
        this.EmailList = data;
      });
   }

  ngOnInit(): void {

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

  createAccountant(addAccountant: NgForm) {
      this.spinner.show();
     
    
    let AccountantObject = {
      firstName: addAccountant.value.firstName,
      lastName: addAccountant.value.lastName,
      phone: addAccountant.value.phone,
      email: addAccountant.value.email,
      gender: addAccountant.value.gender,
      img: 'user.png',
      salary: addAccountant.value.salary,
      wallet:0
      
    };

    this.myService
      .requestCall(
        'https://localhost:44391/api/Accountant/InsertAccountant',
        'Post',
        AccountantObject
      )
      ?.subscribe(
        (data) => {
          this.myService
            .requestCall(
              'https://localhost:44391/api/Accountant/GetAccountantByEmail/' +addAccountant.value.email,'Get',
            )
            ?.subscribe((data) => {
              this.holderList = data;
              
              const accountantId = this.holderList.id;
              let loginCustomer = {
                userName: addAccountant.value.UserName,
                password: addAccountant.value.Password,
                departmentId: 4,
                accountantId: accountantId,
                customerId: null,
                verification: null,
              };        
              this.myService
                .requestCall(
                  'https://localhost:44391/api/Login/InsertLogin',
                  
                  'Post',
                  loginCustomer
                )
               
                ?.subscribe(    
                  (data) => {   
                    this.toaster.success('account created successfully')
                    this.spinner.hide();
                    
                  },
                  (err) => {
                    this.toaster.error("error while create account")
                    setTimeout(() => {
                      this.toaster.error("error while create account")
                    }, 1500);
                  }
                );
            });
        },
        (err) => {
          this.toaster.error("error while create account")
        this.spinner.hide()
        }
      );

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
  

}
