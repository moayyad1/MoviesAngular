import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-romance-category',
  templateUrl: './romance-category.component.html',
  styleUrls: ['./romance-category.component.css']
})
export class RomanceCategoryComponent implements OnInit {
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
