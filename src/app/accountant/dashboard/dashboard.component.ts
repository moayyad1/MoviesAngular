import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProfit = 0;
  CustomersCount = 0;
  moveisCount = 0;
  categoriesCount = 0;
  newistMovies: any[] = [];
  trendingMovies: any[] = [];
  AllMovies:any=[{}];
  topRated:any=[{}];
  GetAllMovies:any=[{}];
  GetEvaluation:any=[{}];
  moviesEval:any=[{}];
  MinimalRated:any=[{}];
  constructor(private route: Router, private servie: MyServiceService,private service: MovieServiceService) {
    servie
      .requestCall(
        'https://localhost:44391/api/Payment/GetSumOfpayments',
        'Get'
      )
      ?.subscribe((data) => {
        this.totalProfit = data;
      });
    servie
      .requestCall('https://localhost:44391/api/Movie/GetMovie', 'Get')
      ?.subscribe((data) => {
        let list: any[] = data;
        this.moveisCount = list.length;
      });

    servie
      .requestCall('https://localhost:44391/api/Customer/GetCustomer', 'Get')
      ?.subscribe((data) => {
        let list: any[] = data;
        this.CustomersCount = list.length;
      });
    servie
      .requestCall('https://localhost:44391/api/Category/GetCategory', 'Get')
      ?.subscribe((data) => {
        let list: any[] = data;
        this.categoriesCount = list.length;
      });
    servie
      .requestCall('https://localhost:44391/api/Movie/getMovie', 'Get')
      ?.subscribe((data) => {
        this.newistMovies = data;

        this.newistMovies.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
        );
      });
      servie
      .requestCall('https://localhost:44391/api/payment/getTrending', 'Get')
      ?.subscribe((data) => {
        this.trendingMovies = data;      
      });
      servie.requestCall('https://localhost:44391/api/movie/GetCatMovie', 'Get')
      ?.subscribe((data) => {
        this.AllMovies = data;
      });
   }

  ngOnInit(): void {
    this.GetMoviesEvalt();
  }
  GetMoviesEvalt(){

    this.servie.requestCall('https://localhost:44391/api/movie/GetCatMovie', 'Get')
      ?.subscribe((data) => {
        this.AllMovies = data;
      });

    this.servie
      .requestCall('https://localhost:44391/api/Movie/GetMoviesEval', 'Get')
      ?.subscribe((data) => {
        this.moviesEval = data;
        let x=0;
        let list:any=[];
        this.AllMovies.forEach((mov:any) => {
          this.moviesEval.forEach((evalu:any) => {
            
            if(mov.id==evalu.id &&evalu.eval>75  && x<6){
              mov.eval=evalu.eval;
              list.push(mov);
              x=x+1;
              
            }
          });

         
        });
        this.topRated=list;

        let j=0;
        let listM:any=[];
        this.AllMovies.forEach((mov:any) => {
          this.moviesEval.forEach((evalu:any) => {
            
            if(mov.id==evalu.id &&evalu.eval<75  && j<6 && evalu.eval!=0){
              mov.eval=Math.round(evalu.eval);
              listM.push(mov);
              j=j+1;
              
            }
          });

         
        });
        this.MinimalRated=listM;

      });
  }
}
