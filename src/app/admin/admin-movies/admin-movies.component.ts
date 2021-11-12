import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { UploadMovieComponent } from '../upload-movie/upload-movie.component';
@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  constructor(public myDialog:MatDialog) { }

  ngOnInit(): void {
  }
  Update(){
   const dialogvar= this.myDialog.open(UploadMovieComponent, {  
      height: '700px',  
      width: '1400px',  
    })

   
    
  }

}
