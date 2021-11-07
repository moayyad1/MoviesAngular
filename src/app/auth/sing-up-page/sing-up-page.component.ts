<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
=======
import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
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
<<<<<<< HEAD
=======
  imageurl=`C:/Users/lenovo/Documents/MoviesAPI-master/Movies.API/resc/images`
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945

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
<<<<<<< HEAD
=======
  imageMessage=''
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
  errorLogs = '';
  emailValidation: any = 'initlize';
  EmailIsValid = true;
  usernameIsValid = false;
  visaIsValid = false;
  userName = '';
  firstName = '';
  lastName = '';
  constructor(private myService: MyServiceService) {
<<<<<<< HEAD
=======
    this.imageurl=''
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
    myService
      .requestCall('https://localhost:44391/api/Customer/getCustomer', 'Get')
      ?.subscribe((data) => {
        this.EmailList = data;
      });
  }

  ngOnInit(): void {}
<<<<<<< HEAD
  //creating customer method
  CreateCustomer(userSignUp: NgForm) {
    // first creating record in Customer Table
    // spinner starts here
=======

  uploadFile(files:any) {
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.myService.uploadAttachment(formData);
    }
    

  




  //creating customer method
  CreateCustomer(userSignUp: NgForm,imageFile:any) {
    // first creating record in Customer Table
    // spinner starts here
   const ImageName =imageFile[0].name
    
 this.uploadFile(imageFile)
 this.imageurl+=ImageName
    
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
    let customerObject = {
      firstName: userSignUp.value.firstName,
      lastName: userSignUp.value.lastName,
      phone: '123',
      email: userSignUp.value.email,
      gender: 'Male',
<<<<<<< HEAD
      img: 'imag,jpg',
=======
      img: ImageName,
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
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
<<<<<<< HEAD
          return '1px solid white';
=======
          return '';
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
        } else return '1px green solid';
      }
      case 2: {
        if (this.lastName == '') {
<<<<<<< HEAD
          return '1px solid white';
=======
          return '';
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
        } else return '1px green solid';
      }
      case 3: {
        if (this.userName == '') {
<<<<<<< HEAD
          return '1px solid white';
=======
          return '';
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
        } else return '1px green solid';
      }
    }
    return '1px solid green';
  }

  getEmailBorderColor() {
    if (this.emailValidation == 'initlize') {
<<<<<<< HEAD
      return '1px solid white';
=======
      return '';
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
    } else if (this.emailValidation == 'Error') {
      return '1px red solid';
    } else return '1px green solid';
  }
  getBorderColor() {
   
    if (this.password == null) {
<<<<<<< HEAD
      return '1px solid white';
=======
      return '';
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
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
