import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  MovieById:any={};
  MovieId:number;
  safeURL:any;
  constructor(public moviedetails:MovieServiceService,private spinner:NgxSpinnerService) { 
   this.MovieId=moviedetails.movieIdDetails;
  }
  ngOnInit(): void {
    this.GetMovieById();
  }
  GetMovieById()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },1000);
    this.moviedetails.getMovieDetailsById(this.MovieId).subscribe((res:any) => { (this.MovieById=res) },
    err => { console.log(err) })
  }

}
