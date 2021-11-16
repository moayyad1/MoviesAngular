import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent implements OnInit {
  trending:any=[{}];
  customers:any=[{}];
  constructor(private testamomialdata:MovieServiceService,private moviedetails: MovieServiceService) {
   }

  ngOnInit(): void {
  this.getTestimonial();
  this.GetCustomers();
  }
  getTestimonial()
  {
this.testamomialdata.getTestimoniall().subscribe((res:any) => { (this.trending=res) },
err => { console.log(err) })
  }
  GetCustomers()
  {
    this.moviedetails.GetCustomers().subscribe((res:any) =>{(this.customers=res)},
    err => {console.log(err)})
  }
}
