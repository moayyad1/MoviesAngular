import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-upload-movie',
  templateUrl: './upload-movie.component.html',
  styleUrls: ['./upload-movie.component.css']
})
export class UploadMovieComponent implements OnInit {
  listCategory:any=[]
  constructor(private service:MyServiceService ,public myDialog:MatDialog,private toast:ToastrService) { 
    service.requestCall("https://localhost:44391/api/Category/GetCategory","Get")?.subscribe(data=>{this.listCategory=data})
  }

  ngOnInit(): void {
  }
  close(){
 this.myDialog.closeAll()
  }
  uploadImageVideo(files:any) {
    if (files.length === 0) {
    return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.service.uploadMovieImage(formData);
    }
    uploadVideo(files:any) {
      if (files.length === 0) {
      return;
      }
      let fileToUpload = <File>files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.service.uploadMovie(formData);
      }
  uploadMovie(movieData:NgForm ,imageFile:any,vidoeFile:any){
    movieData.value.categoryId=parseInt( movieData.value.categoryId)
    movieData.value.Img=imageFile[0].name
    movieData.value.Video=vidoeFile[0].name

   
    this.service.requestCall("https://localhost:44391/api/Movie/InsertMovie","Post",movieData.value)?.subscribe(
      data=>{
          this.uploadImageVideo(imageFile)
          this.uploadVideo(vidoeFile)
         this.toast.success('Movie Uploaded Successfully');
      },
      err=>{this.toast.success('Error While Uploading Movie');
    }
    )
    

  }

}
