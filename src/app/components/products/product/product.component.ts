import { ProductsService } from 'src/app/services/products/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() set Item(item:Product){
    this._item = item;
  
  }
  @Output('onDeleted') onDeleted : EventEmitter<boolean> = new EventEmitter();
  _item!: Product;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0
  
  imagen_default : string = 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'

  constructor(private productsService:ProductsService, private router : Router) { }

  ngOnInit(): void {
  }
  countStar(star:any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  deleteItem(){
    Swal.fire({
      title: "Seguro deseas eliminar el producto?",
    
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      timer: 3000,
        timerProgressBar: true
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.productsService.deleteProduct(this._item.id)?.subscribe(()=>{
          Swal.fire("Saved!", "", "success");

          this.onDeleted.emit(true)

        })
      } 
    });
    
  }

  gotoEditOrView(mode:string = 'view'){
    
    this.router.navigate(['form',this._item.id,mode == 'view'? false : true],).finally(()=>{
      console.log('Finalize navigate')
    })
  
  }

}
