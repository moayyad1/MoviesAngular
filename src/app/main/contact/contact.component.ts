import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  websiteData:any=[{}];
  userEmail=''
  formBuilder: any='';
  constructor(private movieService:MovieServiceService) {
   }
   ngOnInit(): void {
    this.getWebSiteDetails();
  }
  getUserFormData(data:any){this.movieService.SaveMassege(data).subscribe(
      (result)=>{console.warn(result)})
  }
  getWebSiteDetails()
  {
      this.movieService.getWebSiteDetails().subscribe((res:any) => {(this.websiteData=res)},
      err => { console.log(err) })
  }

}
