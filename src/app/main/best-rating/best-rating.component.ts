import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-best-rating',
  templateUrl: './best-rating.component.html',
  styleUrls: ['./best-rating.component.css']
})
export class BestRatingComponent implements OnInit {

  constructor(private movieService:MovieServiceService) { }
  moviesData:any = [{}];
  ngOnInit(): void {
    this.getMovies();
  }
getMovies(){
    this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res) },
    err => { console.log(err) })
    }

}
