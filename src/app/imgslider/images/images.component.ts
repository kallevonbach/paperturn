import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public images = [];
  constructor(private ImageService: ImagesService) { }

  ngOnInit() {
    this.ImageService.getImages()
    .subscribe(data => this.images = data );
    
  }

}
