import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent implements OnInit {
  ActionMovies:any=[{}];
  slides:any = [
   
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  addSlide() {
    for(let i=0;i<this.ActionMovies.length;i++)
    {
      this.slides.push({img:"http://placehold.it/350x150/777777%22%7D"})
    }
  }
  constructor(private movieService:MovieServiceService ) {}
  ngOnInit(): void {
    this.ActionMovie();
    this.addSlide();
  }
  ActionMovie()   
  {
    this.movieService.getAllMovies().subscribe((res:any) => { (this.ActionMovies=res) },
    err => { console.log(err) })  
  }

}
