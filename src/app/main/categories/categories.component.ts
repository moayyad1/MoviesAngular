import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class categoriesComponent implements OnInit {
search:any;
allMovies:any=[{}];
HorrorMovies:any=[{}];
actionMovies:any=[{}];
ComedyMovies:any=[{}];
DramaMovies:any=[{}];
FantasyMovies:any=[{}];
MysteryMovies:any=[{}];
RomanceMovies:any=[{}];
user:any={};
userNameText:any;
userId:any;
data:any=[{}]
  constructor(private movieService:MovieServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getallmovies();
  }
  getallmovies()
  {  
    this.movieService.getallmovies().subscribe((res:any) =>{this.allMovies=res;(this.allMovies.forEach((item:any) => {
      if(item.category=='Horror')
      {
      this.HorrorMovies.push(item);
      }
      if(item.category=='Action')
      {
      this.actionMovies.push(item);
      }
      if(item.category=='Comedy')
      {
        this.ComedyMovies.push(item);
      }
      if(item.category=='Drama')
      {
        this.DramaMovies.push(item);
      } 
      if(item.category=='Fantasy')
      {
        this.FantasyMovies.push(item);
      } 
      if(item.category=='Mystery')
      {
        this.MysteryMovies.push(item);
      } 
      if(item.category=='Romance')
      {
        this.RomanceMovies.push(item);
      }  
     }))},
    err => { console.log(err) })
  }
  goToDtails(id:any)
  {
   this.movieService.movieIdDetails=id;
   this.route.navigate(["movies/movie-details"]);
  }
GoToHorror()
{
this.route.navigate(['movies/horror_movies'])
}

GoToAction()
{
this.route.navigate(['movies/action_movies'])
}

GoToComedy()
{
this.route.navigate(['movies/comedy_movies'])
}

GoToDrama()
{
this.route.navigate(['movies/drama_movies'])
}

GoToFantasy()
{
this.route.navigate(['movies/fantasy_movies'])
}

GoToRomance()
{
this.route.navigate(['movies/romance_movies'])
}

GoToMystery()
{
this.route.navigate(['movies/mystery_movies'])
}
}
