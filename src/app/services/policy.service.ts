import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseUrl = 'http://localhost:5000/api/policies'; // Backend API URL

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addPolicy(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  deletePolicy(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
