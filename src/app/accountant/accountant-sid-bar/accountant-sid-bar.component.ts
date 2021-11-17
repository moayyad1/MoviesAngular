import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountant-sid-bar',
  templateUrl: './accountant-sid-bar.component.html',
  styleUrls: ['./accountant-sid-bar.component.css']
})
export class AccountantSidBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logOutBtn(){ 
    localStorage.removeItem('userToken')
    this.route.navigate([''])
  }

}
