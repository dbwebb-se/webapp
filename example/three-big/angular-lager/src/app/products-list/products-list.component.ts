import { Component, OnInit } from '@angular/core';
import { ProductsListService } from './products-list.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [ ProductsListService ],
})
export class ProductsListComponent implements OnInit {
  products: any;

  constructor(private productsListService: ProductsListService) { }

  ngOnInit() {
    this.productsListService.fetchProductsList()
      .subscribe((data: any) => {
        this.products = data.data;
      });
  }
}
