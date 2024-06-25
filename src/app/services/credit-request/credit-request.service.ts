import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditRequest } from 'src/app/models/creditRequest.model';

@Injectable({
  providedIn: 'root'
})
export class CreditRequestService {
  private apiUrl = 'http://localhost:8080/credit-requests';

  constructor(private http: HttpClient) { }

  // GET
  getAllRequests(): Observable<CreditRequest[]> {
    return this.http.get<CreditRequest[]>(this.apiUrl);
  }

  getRequestById(id: number): Observable<CreditRequest> {
    return this.http.get<CreditRequest>(`${this.apiUrl}/${id}`);
  }

  // POST
  createRequest(request: CreditRequest): Observable<CreditRequest> {
    return this.http.post<CreditRequest>(this.apiUrl, request);
  }

  // PUT
  updateRequest(id: number, request: CreditRequest): Observable<CreditRequest> {
    return this.http.put<CreditRequest>(`${this.apiUrl}/${id}`, request);
  }

  // PATCH
  updateStatus(id: number, status: string): Observable<CreditRequest> {
    return this.http.patch<CreditRequest>(`${this.apiUrl}/${id}/status`, { status });
  }

  // DELETE
  deleteRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
