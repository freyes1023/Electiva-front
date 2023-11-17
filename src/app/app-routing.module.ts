import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { FormComponent } from './components/products/form/form.component';

const routes: Routes = [
  { path: 'home',component:ProductsComponent },
  { path: 'form',component:FormComponent },
  { path: 'form/:id/:edit',component:FormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
