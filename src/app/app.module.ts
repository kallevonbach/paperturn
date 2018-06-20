import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from './imgslider/images/images.service';
import { ImagesComponent } from './imgslider/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgsliderComponent,
    FormComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
