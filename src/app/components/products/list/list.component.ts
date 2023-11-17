import { Product } from 'src/app/models/product/product';
import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products : Product[] = []
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
   this.getProduct();
  }

  getProduct(){
    this.productsService.getProducts().subscribe((products)=>{
      this.products = products;
    })
  }

  deleteItem($event:any){
    console.log($event)
    if ($event) {
      this.getProduct();
    }
  }
  gotoRoute(Route:string){
    console.log(Route)
    this.router.navigate([Route]).finally(()=>{
      console.log('Finalize navigate')
    })
  }

}
