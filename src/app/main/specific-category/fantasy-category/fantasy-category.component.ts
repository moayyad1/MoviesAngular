import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-fantasy-category',
  templateUrl: './fantasy-category.component.html',
  styleUrls: ['./fantasy-category.component.css']
})
export class FantasyCategoryComponent implements OnInit {
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
