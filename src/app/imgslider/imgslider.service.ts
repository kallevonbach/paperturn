import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IImages } from './images';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImgsliderService{
  
  constructor(private http: HttpClient) { }

      getImages() : Observable<IImages[]> {
        return this.http.get<IImages[]>('http://localhost/paperturn/src/php/images.php');
      }
}