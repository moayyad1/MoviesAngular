import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  constructor(private moviesevice:MovieServiceService) { }
trending:any=[{}];
  ngOnInit(): void {
    this.getTrending();
    
  }
  getTrending()
  {
    this.moviesevice.getTrending().subscribe((res:any) => { (this.trending=res) },
    err => { console.log(err) })
  }
}
