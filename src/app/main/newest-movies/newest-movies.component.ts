import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-newest-movies',
  templateUrl: './newest-movies.component.html',
  styleUrls: ['./newest-movies.component.css']
})
export class newestmoviesComponent implements OnInit {
  constructor(private movieService:MovieServiceService,private route:Router) { }
  moviesData:any = [{}];
  ngOnInit(): void {
    this.getMovies();
  }
getMovies(){
    this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res) },
    err => { console.log(err) })
    }
    goToDtails(id:any)
    {
     this.movieService.movieIdDetails=id;
     this.route.navigate(["movies/movie-details"]);
    }

}
