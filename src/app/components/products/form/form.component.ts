import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from './../../../models/product/product';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import Swal from 'sweetalert2'

import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()mode :'create'|'edit'|'view' = 'create';
  Product!: Product ;
  id: string = '';
  img!: HTMLInputElement ;
  viewAlertImg = false
 // private storage: Storage = inject(Storage);

  constructor(private productsService:ProductsService, private router: Router, private route : ActivatedRoute,  private storage: Storage) {
    if (this.mode == 'create') {
      this.Product = {
        rating: 0,
        name: '',
        price: 0,
        description: '',
        image: '',

      }
    } 
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ;
    const edit = this.route.snapshot.paramMap.get('edit') ;
     this.id = id ? id : '';
      if(this.id){
        this.mode = edit == 'true' ? 'edit' : 'view';
        console.log(this.mode)
        console.log(edit)
        this.productsService.getProduct(this.id).subscribe((result)=>{
          this.Product = result;
        }) 
      
      }
    
  }


  async save(){
    console.log(this.Product)

    const funtion = this.mode == 'create' ? 'addProduct' : 'updateProduct';

    const url: string = await this.uploadFile(this.img);
    if(url){
      this.Product.image = url;
    }
    
    this.productsService[funtion](this.Product,this.id).subscribe((result)=>{
      const text_mensage = this.mode == 'create' ? 'creado' : 'actualizado';
      Swal.fire({
        title: "Good job!",
        text: `Producto ${text_mensage} correctamente`,
        icon: "success"
      });
      this.Product = {
        rating: 0,
        name: '',
        price: 0,
        description: '',
        image: '',

      }
      this.router.navigate(['/'],{replaceUrl:true})
    
    })

  
  }

  async atras(){
    this.router.navigate(['/'],{replaceUrl:true})
  }

  setImage(input: HTMLInputElement){
    this.viewAlertImg = true;
    this.img = input;
  }

  uploadFile(input: HTMLInputElement):Promise<string>{

    return new Promise((resolve,reject)=>{
      if (!input.files) return;
    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        if (file) {
            const storageRef = ref(this.storage, file.name);
           const uploadTask =  uploadBytesResumable(storageRef, file);
           uploadTask.then((snapshot) => {
            console.log(snapshot.ref)
            getDownloadURL(snapshot.ref).then((url) => {
              this.Product.image = url;
              console.log(this.Product)
              resolve(url)
              
            })
           }).catch((e)=>{
            reject(e)
           })
           
        }
    }
    })
    
}

}
