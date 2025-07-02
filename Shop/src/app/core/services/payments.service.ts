import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  public headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', responseType: 'text' })
  };

  constructor(private http: HttpClient) { }

  public getPayForm(data: any): Observable<any> {
    return this.http.post<any>(environment.api + 'r2/pay', data, this.headers);
  }
}
