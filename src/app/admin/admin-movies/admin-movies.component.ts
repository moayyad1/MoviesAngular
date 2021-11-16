import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { UploadMovieComponent } from '../upload-movie/upload-movie.component';
@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  categoryId:number=1;
  allMovies:any=[{}];
  catMovies:any=[{}];
  Categorys:any=[{}];
  
  constructor(public myDialog:MatDialog,private service:MyServiceService) {
    
   }

  ngOnInit(): void {
    this.getMovies();
    this.getCategory();
  }
  Update(){
   const dialogvar= this.myDialog.open(UploadMovieComponent, {  
      height: '800px',  
      width: '1400px',  
    })
       
  }

  getMovies()
  {
    this.service.requestCall(
      'https://localhost:44391/api/Movie/GetMovie',
      'Get')
      ?.subscribe((data) => {
        this.allMovies = data;
      });
  }
  getCategory()
  {
    this.service.requestCall(
      'https://localhost:44391/api/Category/GetCategory',
      'Get')
      ?.subscribe((data) => {
        this.Categorys = data;
      });
  }
  
}
