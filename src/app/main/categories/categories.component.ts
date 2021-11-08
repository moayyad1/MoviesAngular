import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class categoriesComponent implements OnInit {
search:any
trending:any=[{}];
user:any={};
  constructor(private movieService:MovieServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getallmovies();
    this.IsUserOwnIt();
  }
  getallmovies()
  {  
    this.movieService.getallmovies().subscribe((res:any) => { (this.trending=res) },
    err => { console.log(err) }) 
  }
  goToDtails(id:any)
  {
   this.IsUserOwnIt();
   this.movieService.movieIdDetails=id;
   this.route.navigate(["movies/movie-details"]);
  }
  IsUserOwnIt()
  {
    this.user=localStorage.getItem('userToken');
  }
}
