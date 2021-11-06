import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
trending:any=[{}];
user:any={};
  constructor(private movieService:MovieServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getTrending();
    this.IsUserOwnIt();
  }
  getTrending()
  {
    this.movieService.getTrending().subscribe((res:any) => { (this.trending=res) },
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
