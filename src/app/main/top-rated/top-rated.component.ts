import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  GetEvaluation:any=[{}];
  GetMovies:any=[{}];
  // sum:any;
  // likes:any;
  // allEvaluation:any;
  
  constructor(private service:MovieServiceService) { }

  GetallEvaluation()
  {
    this.service.GetEvaluation().subscribe((res:any) => { (this.GetEvaluation=res) },
    err => { console.log(err) })
  } 
  getallMovies(){
    this.service.getAllMovies().subscribe((res:any) => { (this.GetMovies=res) },
    err => { console.log(err) })
    }
  ngOnInit(): void {     
    this.getallMovies()
this.GetallEvaluation()

  }
  // all()
  // {
  //   this.GetMovies.forEach((item1:any) => {
  //     this.GetEvaluation.array.forEach((item2:any) => {
  //     if(item1.Id == item2.movieId)
  //     {
  //      this.sum=this.sum+1;
  //      if(item2.stars==1)
  //      {
  //       this.likes=this.likes+1;      
  //      }
  //     }
      
  //   });}
  //   );  this.allEvaluation=(this.sum%this.likes)*100
  // }

}
