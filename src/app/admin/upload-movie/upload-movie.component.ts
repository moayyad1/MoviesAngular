import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-movie',
  templateUrl: './upload-movie.component.html',
  styleUrls: ['./upload-movie.component.css']
})
export class UploadMovieComponent implements OnInit {
  listCategory:any=[]
  constructor(private service:MyServiceService ) { 
    service.requestCall("https://localhost:44391/api/Category/GetCategory","Get")?.subscribe(data=>{this.listCategory=data})
  }

  ngOnInit(): void {
  }

  uploadMovie(movieData:NgForm){
    console.warn(movieData.value);
    

  }

}
