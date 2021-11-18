import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private movieService:MovieServiceService,private spinner:NgxSpinnerService,private toastr:ToastrService) {
   }
   ngOnInit(): void {
    this.getWebSiteDetails();
  }
  getUserFormData(data:any)
  {
    this.spinner.show();
    this.movieService.SaveMassege(data)?.subscribe(    
        (data) => {          
          this.toastr.success("message sent succesfully");
          setTimeout(() => {
            this.spinner.hide() 
          }, 1300); 
        },
        (err) => {
          setTimeout(() => {
            this.spinner.hide()
          }, 1300); 
          this.toastr.error("error while sent message")
        }
      );  
      setTimeout(() => {
        window.location.reload();
            }, 1300); 
     
  }
  getWebSiteDetails()
  {
      this.movieService.getWebSiteDetails().subscribe((res:any) => {(this.websiteData=res)},
      err => { console.log(err) })
  }

}
