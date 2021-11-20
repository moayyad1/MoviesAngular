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
   myScriptFile:HTMLScriptElement;
  constructor(private route:Router,private movieService:MovieServiceService,private http:HttpClient) {  
    this.myScriptFile=document.createElement("script")
    this.myScriptFile.src="../../../../assets/jsFile/homePageSlider.js"
    document.body.appendChild(this.myScriptFile)
       
   
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
    this.ScriptFile()  
    this.CustomerData.firstName;
  }
  ScriptFile()
  {
  
    try{
    this.myScriptFile=document.createElement("script")
    this.myScriptFile.src="../../../../assets/jsFile/homePageSlider.js"
    document.body.appendChild(this.myScriptFile)
    }
    catch{

    }
    
  }
  GetCustomerById()
{
  this.movieService.GetCustomerById(this.customerId).subscribe((res:any) =>{this.CustomerData=res; },
  err => {console.log(err);});
 
}
  gotobest()
  {
this.route.navigate(["best"]);

  }

    landingMovie()   
    {
      this.movieService.getAllMovies().subscribe((res:any) => { (this.Movielanding=res);},
      err => { console.log(err);})  ;
      

    }
    getAllcat()
    {
      this.movieService.getAllcat().subscribe((res:any) => { (this.Moviecat=res);},
      err => { console.log(err); });

    }   
    goToDtails()
    {
     this.route.navigate(["movies/movie-details"]);
    

    }
    goToDtailsmain(id:number)
    {
     this.movieService.movieIdDetails=id;
     this.route.navigate(["movies/movie-details"]);


    }
    getWebSiteDetails()
    { 
        this.movieService.getWebSiteDetails().subscribe((res:any) => { (this.websiteData=res); },
        err => { console.log(err); this.ScriptFile(); })   ;
       

    }
    getAllMovies(){
      this.movieService.getAllMovies().subscribe((res:any) => { (this.moviesData=res);  },
      err => { console.log(err);  });

      }    
      
      logOutBtn(){
        localStorage.removeItem('userToken');
        localStorage.removeItem('CustomerId');
        this.route.navigate(['']);
        

      }
      getTrendingMovies()
      {
        return this.http.get('https://localhost:44391/api/Payment/GetTrending').subscribe((res:any) => { (this.GetAllTrending=res);},
        
        err => { console.log(err); })   ;
       
      }

      getImagePath(value:string ){

        let basePath="../../../../assets/images/Uploaded File/";
       
        return basePath+value;       

        }
        goToFav()
        {
         
          this.route.navigate(['movies/user_favouraties']);
          
        }
        goToAccount()
        {
         
          this.route.navigate(['movies/user_profile']);
          
        }
        goaddBalance()
        {
          this.route.navigate(['movies/add_balance']);
         
      
        }
        goTochangePass()
        {
         
          this.route.navigate(['movies/change_pass']);
        }
        gototestimonial()
        {
          
          this.route.navigate(['movies/add_testimonial']);
        }
        gotohome()
        {
       
         this.route.navigate(['/movies/home"']);
        }
}
    


