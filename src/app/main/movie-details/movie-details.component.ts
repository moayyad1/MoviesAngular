import { Component, OnInit } from '@angular/core';
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
  constructor(public moviedetails:MovieServiceService) { 
   this.MovieId=moviedetails.movieIdDetails;
  }

  ngOnInit(): void {
    this.GetMovieById();
  }
  GetMovieById()
  {
    this.moviedetails.getMovieDetailsById(this.MovieId).subscribe((res:any) => { (this.MovieById=res) },
    err => { console.log(err) })
  }
}
