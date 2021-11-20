import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-up-page',
  templateUrl: './sing-up-page.component.html',
  styleUrls: ['./sing-up-page.component.css'],
})
export class SingUpPageComponent implements OnInit {
  UserNameIsValid=true
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
  imageMessage=''
  errorLogs = '';
  emailValidation: any = 'initlize';
  EmailIsValid = true;
  usernameIsValid = false;
  visaIsValid = false;
  userName = '';
  firstName = '';
  lastName = '';userNameList:any=[]
  constructor(private router:Router,private myService: MyServiceService,private toaster:ToastrService,private spinner:NgxSpinnerService) {
   
    myService
      .requestCall('https://localhost:44391/api/Customer/getCustomer', 'Get')
      ?.subscribe((data) => {
        this.EmailList = data;
      });

      myService.requestCall("https://localhost:44391/api/login/getlogin",'Get')?.subscribe(data=>{this.userNameList=data})
  }

  ngOnInit(): void {}

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
this.spinner.show();
      const ImageName =imageFile[0].name
    
 this.uploadFile(imageFile)

    
    let customerObject = {
      firstName: userSignUp.value.firstName,
      lastName: userSignUp.value.lastName,
      phone: '123',
      email: userSignUp.value.email,
      gender: 'Male',
      img: ImageName,
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
              'https://localhost:44391/api/Customer/getCustomerByEmail/' +userSignUp.value.email,'Get',
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
                    this.toaster.success("Account Created Succefully");
                    setTimeout(() => {
                      this.spinner.hide()
                    }, 2500); this.router.navigate(['LogIn']);},
                   
                  (err) => {
                    this.toaster.error("error while create account")
                    setTimeout(() => {
                      this.toaster.error("error while create account")
                    }, 1500);
                    this.spinner.hide()
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
        }

        else if(this.usernameIsValid)
        {
          return '1px green solid '
        }
        else{
          return '1px red solid '
        }
      
      }
        
        
      
    }
    return '';
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
  else if(this.password==null)
  {
    return ''
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

  checkUserName(){
    this.usernameIsValid=true
    this.userNameList.forEach((element:any) => {
    
      
      if(element.userName.toLowerCase()==this.userName.toLowerCase()){
        console.warn("error");
        
        this.usernameIsValid=false
       }
    
    });
  }
  
}

