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
  getTrending()
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
}
