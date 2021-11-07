import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.css'],
})
export class SingUpPageComponent implements OnInit {
  holderList: any = [];
  EmailList: any = [];
  checkBoxValue = false;

  @ViewChild('termsBox') myCheckbox: any;
  myform: any;
  password = null;
  userEmail = '';
  RegisterResult: any = [];
  ConfirmedPassword = null;
  result = false;
  passwordValid = true;
  newData: any = [];
  customerID: any;
  errorLogs = '';
  emailValidation: any = 'initlize';
  EmailIsValid = true;
  usernameIsValid = false;
  visaIsValid = false;
  userName = '';
  firstName = '';
  lastName = '';
  constructor(private myService: MyServiceService) {
    myService
      .requestCall('https://localhost:44391/api/Customer/getCustomer', 'Get')
      ?.subscribe((data) => {
        this.EmailList = data;
      });
  }

  ngOnInit(): void {}
  //creating customer method
  CreateCustomer(userSignUp: NgForm) {
    // first creating record in Customer Table
    // spinner starts here
    let customerObject = {
      firstName: userSignUp.value.firstName,
      lastName: userSignUp.value.lastName,
      phone: '123',
      email: userSignUp.value.email,
      gender: 'Male',
      img: 'imag,jpg',
      VisaCard: userSignUp.value.email,
    };

    this.myService
      .requestCall(
        'https://localhost:44391/api/Customer/InsertCustomer',
        'Post',
        customerObject
      )
      ?.subscribe(
        (data) => {
          this.myService
            .requestCall(
              'https://localhost:44391/api/Customer/getCustomerByEmail/' +
                userSignUp.value.email,
              'Get'
            )
            ?.subscribe((data) => {
              this.holderList = data;
              const customerID = this.holderList.id;
              let loginCustomer = {
                userName: userSignUp.value.UserName,
                password: userSignUp.value.Password,
                departmentId: 2,
                accountantId: null,
                customerId: customerID,
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
                    /*success toaster goes here */
                  },

                  (err) => {
                    //spinner ends here
                    /*failed toaster goes here */
                  }
                );
            });
        },
        (err) => {
          //spinner ends here
          /*failed toaster goes here */
        }
      );
  }
  getColor(id: any) {
    switch (id) {
      case 1: {
        if (this.firstName == '') {
          return '1px solid white';
        } else return '1px green solid';
      }
      case 2: {
        if (this.lastName == '') {
          return '1px solid white';
        } else return '1px green solid';
      }
      case 3: {
        if (this.userName == '') {
          return '1px solid white';
        } else return '1px green solid';
      }
    }
    return '1px solid green';
  }

  getEmailBorderColor() {
    if (this.emailValidation == 'initlize') {
      return '1px solid white';
    } else if (this.emailValidation == 'Error') {
      return '1px red solid';
    } else return '1px green solid';
  }
  getBorderColor() {
   
    if (this.password == null) {
      return '1px solid white';
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
  setBoxValue() {
    if (this.myCheckbox.nativeElement.checked) {
      this.checkBoxValue = true;
    } else this.checkBoxValue = false;
  }
}
