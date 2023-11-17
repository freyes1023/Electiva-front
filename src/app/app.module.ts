import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './components/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    ProductsModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
   //  firebase.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
