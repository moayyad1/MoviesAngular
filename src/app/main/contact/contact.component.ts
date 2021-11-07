import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieServiceService } from 'src/app/services/movie-service.service';
<<<<<<< HEAD
=======

>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
<<<<<<< HEAD

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
=======
export class ContactComponent implements OnInit {
  websiteData:any=[{}];
  userEmail=''
  constructor(private movieService:MovieServiceService) {
   }

  ngOnInit(): void {
    this.getWebSiteDetails();
  }
  contactSubmit(contactForm :NgForm){
    alert(
       contactForm.value.userName +'\n'+
       contactForm.value.userEmail +'\n'+
       contactForm.value.userPhone +'\n'+
       contactForm.value.Subject +'\n'+
       contactForm.value.Message +'\n'
    )
  }
  getWebSiteDetails()
  {
    
      this.movieService.getWebSiteDetails().subscribe((res:any) => { (this.websiteData=res)},
      err => { console.log(err) })
      
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
  }

}
