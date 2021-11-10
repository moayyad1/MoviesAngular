import {  OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import {MatDialog} from '@angular/material/dialog';
import { Component, ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  MovieById:any={};
  MovieId:number;
  GetEvaluation:any=[{}];
  constructor(public moviedetails:MovieServiceService,private spinner:NgxSpinnerService,private dialog:MatDialog) 
  { 
    
   this.MovieId=moviedetails.movieIdDetails;
  }
  ngOnInit(): void {
    this.GetMovieById();
    this.GetEval();
  }

  GetMovieById()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },1000);
    this.moviedetails.getMovieDetailsById(this.MovieId).subscribe((res:any) => { (this.MovieById=res) },
    err => { console.log(err) })
    this.moviedetails.movieTrailerId=this.MovieById.Trailer;
  }
  GetEval()
  {
    this.moviedetails.GetEvaluation().subscribe((res:any) =>{(this.GetEvaluation=res)},
    err => {console.log(err)})
  }
}
