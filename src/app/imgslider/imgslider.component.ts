import { Component, OnInit } from '@angular/core';
import { ImgsliderService } from './imgslider.service';

@Component({
  selector: 'app-imgslider',
  templateUrl: './imgslider.component.html',
  styleUrls: ['./imgslider.component.css']
})

export class ImgsliderComponent implements OnInit {
  public images = []
  constructor(private ImageService: ImgsliderService) { }
  ngOnInit() {
    this.ImageService.getImages()
      .subscribe(data => this.images = data );
  }
}
