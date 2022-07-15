import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IllustrationsModule } from './illustrations/illustrations.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, IllustrationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
