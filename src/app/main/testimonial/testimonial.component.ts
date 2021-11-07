import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MovieServiceService } from 'src/app/services/movie-service.service';
=======
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
<<<<<<< HEAD

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
=======
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
}
