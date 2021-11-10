import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent implements OnInit {
  MovieById:any={};
  MovieId:any;
  constructor(public moviedetails:MovieServiceService) {
    this.MovieId=moviedetails.movieIdDetails;
   }

  ngOnInit(): void {
  }
  GetMovieById()
  {
    this.moviedetails.getMovieDetailsById(this.MovieId).subscribe((res:any) => { (this.MovieById=res) },
    err => { console.log(err) })
  }
}
