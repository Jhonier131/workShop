import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  public headers = {
    Authorization: 'Bearer laksjdlaksjndlaskdnalskdjllsakldjsa',
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getClothesWomens(): Observable<any> {
    return this.http.get<any>(environment.api + 'r1/allProducts');
  }

  public getClothesMen(): Observable<any> {
    return this.http.get<any>(environment.api + 'r1/allProductsMen');
  }

  public aplyFilters(filters: any, mode: string): Observable<any> {
    return this.http.post<any>(environment.api + 'r1/aplyFilters', {...filters, mode});
  }


  public getFilters(): Observable<any> {
    return this.http.get<any>(environment.api + 'r1/getFilters');
  }

  public prueba1(): Observable<any> {
    return this.http.get<any>(environment.api, this.headers);
  }
}
