import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {

  constructor(private movieService:MovieServiceService) { }
  moviesData:any = [{}];
  ngOnInit(): void {
    this.getAllMovies();

  }
  getAllMovies(){
    //call services
    this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res) },
    err => { console.log(err) })
    }

}
