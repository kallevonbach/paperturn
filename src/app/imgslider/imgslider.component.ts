import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgslider',
  templateUrl: './imgslider.component.html',
  styleUrls: ['./imgslider.component.css']
})

export class ImgsliderComponent implements OnInit  {
  public position = 0;
  public screenWidth = window.innerWidth;
  constructor() { }
  ngOnInit() {

  }
  
  nextImg ()  {
    if(this.screenWidth < 700){
        this.position = this.position - 100;
    } else if (this.screenWidth < 900) {
        this.position = this.position - 50;
        console.log(this.position);
    } else {
        this.position = this.position - 33.333;
    }
  }
  prevImg () {
    if(this.screenWidth < 700){
      this.position = this.position + 100;
    } else if (this.screenWidth < 900) {
        this.position = this.position + 50;
    } else {
        this.position = this.position + 33.333;
    }
  }
}
