import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  public user: string = '';

  constructor(private router: Router) {

    var data: any = JSON.parse(localStorage.getItem('northwind.user'));
    if (data) {
      this.user = data.name;
    }
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('northwind.token');
    localStorage.removeItem('northwind.user');
    this.router.navigateByUrl('/');
  }

}
