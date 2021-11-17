import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-add-to-wallet',
  templateUrl: './add-to-wallet.component.html',
  styleUrls: ['./add-to-wallet.component.css']
})
export class AddToWalletComponent implements OnInit {
  visaCard:any;
  wallet:any;
  constructor(private route:Router,public moviedetails:MovieServiceService,private spinner:NgxSpinnerService,private toast:ToastrService,private myservice:MyServiceService) { }

  CustomerData:any=[{}];
  Customers:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');

  ngOnInit(): void {
    this.GetCustomerById();
    this.GetCustomers();    
  }
  GetCustomers()
  {
    this.moviedetails.GetCustomers().subscribe((res:any) =>{(this.Customers=res)},
    err => {console.log(err)})
  }
  GetCustomerById()
  {
    this.moviedetails.GetCustomerById(this.customerId).subscribe((res:any) =>{(this.CustomerData=res)},
    err => {console.log(err)})
  }
  UpdateWalletData(updatewallet:NgForm)
  {
    this.spinner.show()
    let walletObject = {
      id:parseInt(this.customerId),
      firstName:this.CustomerData.firstName,
      lastName:this.CustomerData.lastName,
      phone:this.CustomerData.phone,
      email:this.CustomerData.email,
      gender:this.CustomerData.gender,
      img:this.CustomerData.img,
      wallet:(parseInt(this.CustomerData.wallet))+(updatewallet.value.wallet),
      visaCard:updatewallet.value.visaCard.toString()
    };
  
      this.myservice.requestCall('https://localhost:44391/api/Customer/UpdateCustomer','Put',walletObject)?.subscribe(
        (data) => {  
          setTimeout(() => {
            this.spinner.hide();
          }, 2500);
          this.toast.success('Information Updated successfully');  
          setTimeout(() => {
            window.location.reload();
          }, 1500);
               
        },
        (err) => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
          this.toast.error('Error While Updateing information');
          window.location.reload();    
        }
    );
  }

  goToFav()
  {
    this.route.navigate(['movies/user_favouraties']);
  }
  goToAccount()
  {
    this.route.navigate(['movies/user_profile']);
  }
  goaddBalance()
  {
    this.route.navigate(['movies/add_balance']);

  }
  goTochangePass()
  {
    this.route.navigate(['movies/change_pass']);

  }

}
