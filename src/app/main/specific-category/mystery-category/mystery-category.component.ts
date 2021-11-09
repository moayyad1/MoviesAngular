import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-mystery-category',
  templateUrl: './mystery-category.component.html',
  styleUrls: ['./mystery-category.component.css']
})
export class MysteryCategoryComponent implements OnInit {
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
