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
  constructor(private service:MovieServiceService) { 
  }
  geteval()
  {
    //  this.service.GetEvaluation().subscribe((res2:any) => {this.GetEvaluation=res2},
    //  err => {console.log(err)})
  }
  GetMovie()
  {
  //   var allSum=0;
  //   let allLikes=0;
  //  this.service.getAllMovies().subscribe((res:any) => {this.GetMovies=res},
  //  err => {console.log(err)})
  //      for (let index1 = 0; index1 < this.GetMovies.length; index1++) {
  //        const mov = this.GetMovies[index1];
  //        allSum=0;
  //        allLikes=0;
  //        for (let index = 0; index < this.GetEvaluation.length; index++) {
  //          const evalu = this.GetEvaluation[index];
  //          if(mov.Id==evalu.movieId)
  //          {
  //             allSum=allSum+1;
  //             if(evalu.stars==1)
  //             {
  //               allLikes=allLikes+1;
  //             }
  //             this.GetMovies[index1].stars=(allLikes / allSum) * 100;
  //             console.log((allLikes / allSum) * 100);
  //             console.log('stars = '+ this.GetMovies[index1].stars)
  //          }          
  //         }        
  //      }

  }
  ngOnInit(): void {     
    // this.geteval();
    // this.GetMovie();
  }
}

