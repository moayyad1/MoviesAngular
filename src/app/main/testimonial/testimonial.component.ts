import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent implements OnInit {
  trending:any=[{}];
  constructor(private testamomialdata:MovieServiceService) {
   }

  ngOnInit(): void {
  this.getTestimonial();
  }
  getTestimonial()
  {
this.testamomialdata.getTestimoniall().subscribe((res:any) => { (this.trending=res) },
err => { console.log(err) })
  }
}
