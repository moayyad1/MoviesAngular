import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-drama-category',
  templateUrl: './drama-category.component.html',
  styleUrls: ['./drama-category.component.css']
})
export class DramaCategoryComponent implements OnInit {
  search:any;
  allMovies:any=[{}];
  constructor(private movieService:MovieServiceService,private route:Router ) { }

  ngOnInit(): void {
    this.getallmovies();
  }
  getallmovies()
  {  
    this.movieService.getallmovies().subscribe((res:any) =>{this.allMovies=res },
    err => { console.log(err) }
    )
  }
  goToDtails(id:any)
  {
   this.movieService.movieIdDetails=id;
   this.route.navigate(["movies/movie-details"]);
  }

}
