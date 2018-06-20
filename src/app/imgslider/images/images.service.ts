import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IImages } from '../images';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ImagesService{
  
  constructor(private http: HttpClient) { }

      getImages() : Observable<IImages[]> {
        return this.http.get<IImages[]>('http://paperturn.casperbach.dk/php/images.php');
      }
}