import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getDepartments(): Observable<any> {
    return this.http.get<any>('https://api-colombia.com/api/v1/Department');
  }

  public getCitiesByDepartment(idDepartment: number): Observable<any> {
    return this.http.get<any>(`https://api-colombia.com/api/v1/Department/${idDepartment}/cities`);
  }
}
