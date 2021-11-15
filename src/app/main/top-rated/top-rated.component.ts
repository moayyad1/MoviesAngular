import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  GetEvaluation:any=[{}];
  GetAllMovies:any=[{}];
  constructor(private service:MovieServiceService,private route:Router) { 
  }
   ngOnInit(): void {     
    this.AllMovies();
    this.GetEval();
  }
  
  AllMovies()   
  {
    this.service.getAllMovies().subscribe((res:any) => { (this.GetAllMovies=res);
      this.GetAllMovies.forEach((mov:any) => {
        this.GetEvaluation.forEach((evalu:any) => {
        if(mov.Id==evalu.id)
        {
          this.GetEvaluation.push(mov);
        }
      });
    }); },

    err => { console.log(err) })  
  }
  GetEval()
  {
    this.service.GetEvaluation().subscribe((res:any) =>{(this.GetEvaluation=res)},
    err => { console.log(err) })
  }
  goToDtails(id:any)
  {
   this.service.movieIdDetails=id;
   this.route.navigate(["movies/movie-details"]);
  }
}

