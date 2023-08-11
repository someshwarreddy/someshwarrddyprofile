import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = './projects.json';
 
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}
