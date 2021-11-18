import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  websiteData:any=[{}];
  constructor(private movieService:MovieServiceService,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getWebSiteDetails();
  }
  getWebSiteDetails()
  {
      this.movieService.getWebSiteDetails().subscribe((res:any) => {(this.websiteData=res)},
      err => { console.log(err) })
  }
}
