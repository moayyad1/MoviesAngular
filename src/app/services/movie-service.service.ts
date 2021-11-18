import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService
{
  constructor(private http:HttpClient,private toast:ToastrService,private spinner:NgxSpinnerService) { }
  selectedmovie:any={};
  movieIdDetails:number=0;
  movieTrailerId:string='';
  accountantId:number=0;
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
GetComments()
{
  return this.http.get(this.baseUrl+"Comments/GetComments");
}
GetCustomers()
{
  return this.http.get(this.baseUrl+"Customer/GetCustomer");
}
GetPayments()
{
  return this.http.get(this.baseUrl+"Payment/GetPayment");
}
GetFavourites()
{
  return this.http.get(this.baseUrl+"CustomerList/GetCustomerList");
}
IsUserOwnIt(customerId:number,movieId:number)
{
 return this.http.get('https://localhost:44391/api/Payment/IsUserOwnIt/'+customerId+'/'+movieId);
}
IsInFavouraties(customerId:number,movieId:number)
{
 return this.http.get('https://localhost:44391/api/CustomerList/IsInFavouraties/'+customerId+'/'+movieId);
}
IsUserRated(customerId:number,movieId:number)
{
 return this.http.get('https://localhost:44391/api/Evaluation/IsCustomerRated/'+customerId+'/'+movieId);
}
GetCustomerById(customerId:number)
{
 return this.http.get('https://localhost:44391/api/Customer/GetCustomerById/'+customerId);
}
GetCategory()
{
  return this.http.get('https://localhost:44391/api/Category/GetCategory');
}
GetLogin()
{
  return this.http.get('https://localhost:44391/api/Login/GetLogin');
}
}