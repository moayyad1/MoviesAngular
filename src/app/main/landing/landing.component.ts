import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private route:Router,private movieService:MovieServiceService) { }
  search:any;
  Movielanding:any = [];
  Moviecat:any = [{}];
  websiteData:any = [{}];
  moviesData:any = [{}];
  ngOnInit(): void {
    this.landingMovie() ;
    this.getAllcat();
    this.getWebSiteDetails();
    this.getAllMovies();
  }
  gotobest()
  {
this.route.navigate(["best"])
  }

    landingMovie()   
    {
      this.movieService.getAllMovies().subscribe((res:any) => { (this.Movielanding=res) },
      err => { console.log(err) })  
    }
    getAllcat()
    {
      this.movieService.getAllcat().subscribe((res:any) => { (this.Moviecat=res) },
      err => { console.log(err) })
    }   
    goToDtails()
    {
     this.route.navigate(["movies/movie-details"]);
    }
    getWebSiteDetails()
    { 
        this.movieService.getWebSiteDetails().subscribe((res:any) => { (this.websiteData=res)},
        err => { console.log(err) })   
    }
    getAllMovies(){
      this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res) },
      err => { console.log(err) })
      }    
      
      logOutBtn(){
        localStorage.removeItem('userToken');
        localStorage.removeItem('CustomerId');
        this.route.navigate(['']);
      }

      getImagePath(value:string ){

        let basePath="../../../../assets/images/Uploaded File/";
        return basePath+value;       
        }
        goToUserProfile()
        {
          this.route.navigate(['movies/user_profile'])
        }
       GoAction()
       {
         this.route.navigate(['movies/action_movies'])
       }

       GoHorror()
       {
         this.route.navigate(['movies/horror_movies'])
       }

       GoDrama()
       {
         this.route.navigate(['movies/drama_movies'])
       }

       GoComedy()
       {
         this.route.navigate(['movies/comedy_movies'])
       }

       GoFantasy()
       {
         this.route.navigate(['movies/fantasy_movies'])
       }

       GoMystery()
       {
         this.route.navigate(['movies/mystery_movies'])
       }

       GoRomance()
       {
         this.route.navigate(['movies/romance_movies'])
       }
}
    


