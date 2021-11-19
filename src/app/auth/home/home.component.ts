import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 customerId:any=localStorage.getItem('CustomerId');
 CustomerData:any=[{}];
 myScriptFile:HTMLScriptElement;
 allMovies:any=[{}];
 constructor(private service :MovieServiceService) { 
  this.myScriptFile=document.createElement("script")
  this.myScriptFile.src="../../../../assets/jsFile/navSlider.js"
   document.body.appendChild(this.myScriptFile)
  }
  ngOnInit(): void {
    // this.GetCustomerById();
    this.getTrending();
  }
//   GetCustomerById()
// {
//   this.service.GetCustomerById(this.customerId).subscribe((res:any) =>{this.CustomerData=res;},
//   err => {console.log(err);});
// }
getTrending()
{  
  this.service.getallmovies().subscribe((res:any) => { (this.allMovies=res) },
  err => { console.log(err) }) 
}
}
