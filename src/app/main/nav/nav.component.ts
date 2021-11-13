import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  websiteData:any = [{}];
  constructor(private route:Router,private movieService:MovieServiceService ) { }

  ngOnInit(): void {
    this.getWebSiteDetails();
  }
  gotobest()
  {
this.route.navigate(["movies/best"])
  }
  gotohome()
  {
    this.route.navigate(["movies/home"])
  }
  gotoabout()
  {
    this.route.navigate(["movies/about"])
  }
  gotoacontact()
  {
    this.route.navigate(["movies/contact"])
  }
  getWebSiteDetails()
  { 
      this.movieService.getWebSiteDetails().subscribe((res:any) => { (this.websiteData=res)},
      err => { console.log(err) })   
  }
  logOutBtn(){ 
    localStorage.removeItem('userToken')
    this.route.navigate([''])
  }
  goToUserProfile()
  {
    this.route.navigate(['movies/user_profile'])
  }
  GoAction()
  {
    this.route.navigate(['movies/action_movies'])
  }

  GoHorror()
  {
    this.route.navigate(['movies/horror_movies'])
  }

  GoDrama()
  {
    this.route.navigate(['movies/drama_movies'])
  }

  GoComedy()
  {
    this.route.navigate(['movies/comedy_movies'])
  }

  GoFantasy()
  {
    this.route.navigate(['movies/fantasy_movies'])
  }

  GoMystery()
  {
    this.route.navigate(['movies/mystery_movies'])
  }

  GoRomance()
  {
    this.route.navigate(['movies/romance_movies'])
  }
}
