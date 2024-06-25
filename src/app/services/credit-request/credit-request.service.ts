import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditRequestService {
  private apiUrl = 'http://localhost:8080/credit-requests'; 

  constructor(private http: HttpClient) { }
  // GET
  getAllRequests(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getRequestById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // POST
  createRequest(request: any): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
  // PUT
  updateRequest(id: number, request: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, request);
  }
  // PATCH
  updateStatus(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { status });
  }
  // DELETE
  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
