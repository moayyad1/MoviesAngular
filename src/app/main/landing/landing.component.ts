import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
 
  constructor(private route:Router,private movieService:MovieServiceService,private http:HttpClient) {        
  this.ScriptFile();
  }
  search:any;
  Movielanding:any = [];
  Moviecat:any = [{}];
  websiteData:any = [{}];
  moviesData:any = [{}];
  GetAllTrending:any=[{}];
  CustomerData:any=[{}];
  customerId:any=localStorage.getItem('CustomerId');
  ngOnInit(): void {
    this.landingMovie() ;
    this.getAllcat();
    this.getWebSiteDetails();
    this.getAllMovies();
    this.getTrendingMovies();
    this.GetCustomerById();   

  }
  ScriptFile()
  {
    var myScriptFile:HTMLScriptElement;
    myScriptFile=document.createElement("script")
    myScriptFile.src="../../../../assets/jsFile/homePageSlider.js"
     document.body.appendChild(myScriptFile)
  }
  GetCustomerById()
{
  this.movieService.GetCustomerById(this.customerId).subscribe((res:any) =>{(this.CustomerData=res)},
  err => {console.log(err)});
  this.ScriptFile();
}
  gotobest()
  {
this.route.navigate(["best"]);
this.ScriptFile();

  }

    landingMovie()   
    {
      this.movieService.getAllMovies().subscribe((res:any) => { (this.Movielanding=res) },
      err => { console.log(err) })  ;
      this.ScriptFile();

    }
    getAllcat()
    {
      this.movieService.getAllcat().subscribe((res:any) => { (this.Moviecat=res) },
      err => { console.log(err) });
      this.ScriptFile();

    }   
    goToDtails()
    {
     this.route.navigate(["movies/movie-details"]);
     this.ScriptFile();

    }
    goToDtailsmain(id:number)
    {
     this.movieService.movieIdDetails=id;
     this.route.navigate(["movies/movie-details"]);
     this.ScriptFile();

    }
    getWebSiteDetails()
    { 
        this.movieService.getWebSiteDetails().subscribe((res:any) => { (this.websiteData=res)},
        err => { console.log(err) })   ;
        this.ScriptFile();

    }
    getAllMovies(){
      this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res) },
      err => { console.log(err) });
      this.ScriptFile();

      }    
      
      logOutBtn(){
        localStorage.removeItem('userToken');
        localStorage.removeItem('CustomerId');
        this.route.navigate(['']);
        this.ScriptFile();

      }
      getTrendingMovies()
      {
        return this.http.get('https://localhost:44391/api/Payment/GetTrending').subscribe((res:any) => { (this.GetAllTrending=res); this.ScriptFile();},
        
        err => { console.log(err); this.ScriptFile(); })   ;
       
      }

      getImagePath(value:string ){

        let basePath="../../../../assets/images/Uploaded File/";
        this.ScriptFile();
        return basePath+value;       

        }
        goToFav()
        {
          this.route.navigate(['movies/user_favouraties']);
          this.ScriptFile();
        }
        goToAccount()
        {
          this.route.navigate(['movies/user_profile']);
          this.ScriptFile();
        }
        goaddBalance()
        {
          this.route.navigate(['movies/add_balance']);
          this.ScriptFile();
      
        }
        goTochangePass()
        {
          this.route.navigate(['movies/change_pass']);
          this.ScriptFile();
        }
        gototestimonial()
        {
          this.route.navigate(['movies/add_testimonial']);
          this.ScriptFile();
        }
        gotohome()
        {
          this.route.navigate(['/movies/home"']);
          this.ScriptFile();
        }
}
    


