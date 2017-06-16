import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public products = [
    { name: "Fish", price: 1.99, stock: 3000 },
    { name: "Fish", price: 1.99, stock: 3000 },
    { name: "Fish", price: 1.99, stock: 3000 }]

  constructor() { }

  ngOnInit() {
  }

}
