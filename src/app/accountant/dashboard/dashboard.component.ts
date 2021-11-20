import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { Chart,registerables  } from 'chart.js';

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
  salesChart:any=[];
  gainsChart:any=[];
  chart:any =[];
  totalTickets:any=[{}];
  time:any=[];
  MoviesBought:any=[];
  MoviesGains:any=[];

  constructor(private route: Router, private servie: MyServiceService,private service: MovieServiceService) {
    Chart.register(...registerables);
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
    this.GetFinancials();

   
  }
  GetFinancials()
  {
    this.servie.requestCall("https://localhost:44391/api/Payment/getMonthlyGains","Get")?.subscribe(data=>{
      this.totalTickets=data;
      this.totalTickets.forEach((element:any) => {
        this.time.push(element.year+'/'+element.month);
        this.MoviesBought.push(element.moviesBought)
        this.MoviesGains.push(element.moviesGains)
      });
       //show chart data salesng
    this.salesChart=new Chart('salesng',{
      type:'bar',
      data: {
        labels: this.time,
        datasets: [{
            label: 'Salesng ',
            data: this.MoviesBought,
            borderWidth: 3,
            // fill:false,
            borderSkipped	:'left',
            backgroundColor: 'red',
            borderColor: 'wight'
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
    })
    //show chart data Gains
    this.gainsChart=new Chart('canvas',{
      type:'line',
      data: {
        labels: this.time,
        datasets: [{
            label: 'Gains ',
            data: this.MoviesGains,
            borderWidth: 3,
            fill:false,
            backgroundColor: 'red',
            borderColor: 'red'
        }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    },
    })
    })

    
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
