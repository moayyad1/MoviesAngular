import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css']
})
export class SuggestedComponent implements OnInit {

  constructor(private movieService:MovieServiceService) { }

  moviesData:any = [{}];
  ngOnInit(): void {
    this.getAllCourse();

  }
  getAllCourse(){
    //call services
    this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res) },
    err => { console.log(err) })
    }
}
