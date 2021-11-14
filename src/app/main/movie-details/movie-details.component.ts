import { OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  MovieById:any={};
  MovieId:number;
  GetEvaluation:any=[{}];
  Comments:any=[{}];
  Customers:any=[{}];
  Payments:any=[{}];
  Favourites:any=[{}];
  CustomerData:any=[{}];
  isUserOwnMovie:any;
  InFavouraties:any;
  CusVisaNumber:any;
  checkWallet:any;
  customerId:any=localStorage.getItem('CustomerId');
  constructor(public moviedetails:MovieServiceService,private spinner:NgxSpinnerService,private dialog:MatDialog,private myService:MyServiceService,private toast:ToastrService) 
  { 
   this.MovieId=moviedetails.movieIdDetails;
   console.warn(this.isUserOwnMovie);
  }
  ngOnInit(): void {
    this.GetMovieById();
    this.GetEval();
    this.GetCustomers();
    this.GetComments(); 
    this.GetPayments();
    this.GetFavourites();
    this.IsUserOwnIt();
    this.IsInFavouraties();
    this.GetCustomerById();
    this.checkWallet=(this.MovieById.price >= this.CustomerData.wallet) 
  }

  GetMovieById()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },1500);
    this.moviedetails.getMovieDetailsById(this.MovieId).subscribe((res:any) => { (this.MovieById=res) },
    err => { console.log(err) })
    this.moviedetails.movieTrailerId=this.MovieById.Trailer;
  }
  GetEval()
  {
    this.moviedetails.GetEvaluation().subscribe((res:any) =>{(this.GetEvaluation=res)},
    err => {console.log(err)})
  }
  GetCustomers()
  {
    this.moviedetails.GetCustomers().subscribe((res:any) =>{(this.Customers=res)},
    err => {console.log(err)})
  }
  GetComments()
  {
    this.moviedetails.GetComments().subscribe((res:any) =>{(this.Comments=res)},
    err => {console.log(err)})
  }
  GetPayments()
  {
    this.moviedetails.GetPayments().subscribe((res:any) =>{(this.Payments=res)},
    err => {console.log(err)})
  }
  GetFavourites()
  {
    this.moviedetails.GetFavourites().subscribe((res:any) =>{(this.Favourites=res)},
    err => {console.log(err)})
  }
  message='';
  date: Date = new Date();  
  CreateComment(userComment: NgForm) {
    this.spinner.show()
    let commentsObject = {
      message: userComment.value.message,
      movieId:this.MovieById.id,
      time:this.date,     
      customerId:parseInt(this.customerId)
    };
    this.myService.requestCall("https://localhost:44391/api/Comments/InsertComments",'Post',commentsObject)?.subscribe(                 
      (data) => {   
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
        this.GetComments();
        this.toast.success('Commented successfully');       
      },
      (err) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
       this.toast.error('Error While Adding Comment')
      }
    );
    
}
addLike()
{
  this.spinner.show()
  let rateObject = {
    customerId:parseInt(this.customerId),
    movieId:this.MovieById.id,
    stars:1,     
  };
  this.myService.requestCall("https://localhost:44391/api/Evaluation/InsertEvaluation",'Post',rateObject)?.subscribe(                 
    (data) => {   
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.success('Rated successfully');  
      this.GetEval();      
    },
    (err) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.error('Error While Rating')
      this.GetEval();
    }
  );
}
addDisLike()
{
  this.spinner.show()
  let rateObject = {
    customerId:parseInt(this.customerId),
    movieId:this.MovieById.id,
    stars:-1,     
  };
  this.myService.requestCall("https://localhost:44391/api/Evaluation/InsertEvaluation",'Post',rateObject)?.subscribe(                 
    (data) => {   
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.success('Rated successfully');
      this.GetEval();
             
    },
    (err) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.error('Error While Rating');
      this.GetEval();    
    }
  );
}
AddToFav()
{
  this.spinner.show()
  let favObject = {
    customerId:parseInt(this.customerId),
    movieId:this.MovieById.id,
    watched:0,     
  };
  this.myService.requestCall("https://localhost:44391/api/CustomerList/InsertCustomerList",'Post',favObject)?.subscribe(                 
    (data) => {   
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.success('added to your Favourites');
      this.IsInFavouraties();           
    },
    (err) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.error('Error While add to Favourites');   
    }
  );
}
IsUserOwnIt()
{
  this.moviedetails.IsUserOwnIt(this.customerId,this.MovieId).subscribe((res:any) =>{(this.isUserOwnMovie=res)},
  err => {console.log(err)})
}
IsInFavouraties()
{
  this.moviedetails.IsInFavouraties(this.customerId,this.MovieId).subscribe((res:any) =>{(this.InFavouraties=res)},
  err => {console.log(err)})
}
GetCustomerById()
{
  this.moviedetails.GetCustomerById(this.customerId).subscribe((res:any) =>{(this.CustomerData=res)},
  err => {console.log(err)})
}
Updatewallet()
{
  let updatewalletObject={
   id:parseInt(this.customerId),
   firstName:this.CustomerData.firstName.toString(),
   lastName:this.CustomerData.lastName.toString(),
   phone:this.CustomerData.phone.toString(),
   email:this.CustomerData.email.toString(),
   gender:this.CustomerData.gender.toString(),
   img:this.CustomerData.img.toString(),
   wallet:parseInt(this.CustomerData.wallet)-parseInt(this.MovieById.price),
   visaCard:this.CustomerData.visaCard.toString(),
  };
   this.myService.requestCall('https://localhost:44391/api/Customer/UpdateCustomer','Put',updatewalletObject)?.subscribe();
}
BuyMovie()
{
  if(this.checkWallet)
  {
    this.spinner.show()
    let buyObject = {
      customerId:parseInt(this.customerId),
      movieId:this.MovieId,
      watched:0,
      visaCard:this.CustomerData.visaCard,
      value:this.MovieById.price,
    };
    this.myService.requestCall("https://localhost:44391/api/Payment/InsertPayment",'Post',buyObject)?.subscribe(                 
      (data) => {  
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
        this.toast.success('movie was successfully purchased' + this.MovieById.price + " $ Discount from your wallet ");  
        this.toast.info(this.MovieById.price + " $ Discount from your wallet ");  
        this.IsUserOwnIt();
      },
      (err) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
        this.toast.error('Error While purchasing')
      }
    );
    this.Updatewallet();
  }
  else{
    this.toast.warning(" Movie Price = " +this.MovieById.price+ "$ Which is bigger than Your Wallet balance!!");  
  }
  }
}


