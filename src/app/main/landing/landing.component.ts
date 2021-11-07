import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Input() Img:any|undefined

  constructor(private route:Router,private movieService:MovieServiceService) {

  
    let token:any  = localStorage.getItem('userToken')
   
    const tokenValue:any=jwtDecode(token);
    let user={
      role:tokenValue.role ,
      username :tokenValue.unique_name[0],
      id :tokenValue.unique_name[1],
    }
    
    console.warn(user);
    

   }

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
    
        localStorage.removeItem('userToken')
        this.route.navigate([''])
      }

      getImagePath(value:string ){

        let basePath="../../../../assets/images/Uploaded File/";
        return basePath+value;
        
        }
}
    


