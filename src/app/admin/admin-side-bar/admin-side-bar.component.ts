import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logOutBtn(){ 
    localStorage.removeItem('userToken')
    this.route.navigate([''])
  }
}
