import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService
{
  constructor(private http:HttpClient) { }
  selectedmovie:any={};
  movieIdDetails:number=0;
  movieTrailerId:string='';
  private baseUrl="https://localhost:44391/api/";
  getAllMovies()
  {
    return this.http.get(this.baseUrl+"movie/GetCatMovie")
  }
  getAllcat()
  {
    return this.http.get(this.baseUrl+"Category/GetCategory")
  }
  getWebSiteDetails()
  {
    return this.http.get(this.baseUrl+"WebSite/GetWebSite")
  }
  getallmovies()
  {
    return this.http.get(this.baseUrl+"movie/GetCatMovie")
  }
  getMovieDetailsById(Id:number)
  {
    return this.http.get(this.baseUrl+"movie/GetMovieByID/"+Id)
  }
  IsUserOwnIt(Id:number)
  {
   return this.http.get(this.baseUrl+"Payment/IsUserOwnIt/"+Id)
  }
  getTestimoniall(){
    return this.http.get(this.baseUrl+"Testimonial/GetActiveTestimonial");
  }
SaveMassege(data:any){
    return this.http.post(this.baseUrl+"ContactUs/insertContactUs",data)
}
GetEvaluation()
{
  return this.http.get(this.baseUrl+"movie/GetMoviesEval");
}
CustomerList(data:any)
{
  return this.http.post(this.baseUrl+"CustomerList/InsertCustomerList",data);
}
}
