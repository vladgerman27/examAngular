import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public routes = [
    {
      path: 'main',
      viewValue: 'Home',
    },

    {
      path: 'shop',
      viewValue: 'Shop',
    },

    {
      path: 'friends',
      viewValue: 'My friends',
    },

    {
      path: 'profile',
      viewValue: 'My profile'
    },
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public navigateTo(path: string): void {
    this.router.navigate(['dashboard', path]);
  }
}
