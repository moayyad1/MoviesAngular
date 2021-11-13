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
  allEval:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');
  constructor(public moviedetails:MovieServiceService,private spinner:NgxSpinnerService,private dialog:MatDialog,private myService:MyServiceService,private toast:ToastrService) 
  { 
    
   this.MovieId=moviedetails.movieIdDetails;
  }
  ngOnInit(): void {
    this.GetMovieById();
    this.GetEval();
    this.GetCustomers();
    this.GetComments(); 
    this.GetPayments();
    this.GetFavourites();
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
  GetAllEval()
  {
    this.moviedetails.GetAllEval().subscribe((res:any) =>{(this.allEval=res)},
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
      this.GetFavourites();
             
    },
    (err) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
      this.toast.error('Error While add to Favourites');
      this.GetFavourites();    
    }
  );
}
}


