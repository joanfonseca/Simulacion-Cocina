import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  getPlatos(url: string): Observable<Order[]> {
    return this.http.get<Order[]>(url);
  }
}
