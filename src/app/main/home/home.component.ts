import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Id:any;
  constructor() { 
   
  }

  ngOnInit(): void {
    let token:any=localStorage.getItem('userToken')
    let userData:any|undefined = jwtDecode(token);
    this.Id=parseInt(userData.unique_name[1]);
    localStorage.setItem('CustomerId',this.Id);
  }

}
