import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LichThi } from '../models/LichThi';

@Injectable({
  providedIn: 'root',
})
export class LichThiService {
  private baseUrl = '/api/lich-thi'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllLichThi(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay-tat-ca`);
  }

  getLichThiById(maLichThi: number): Observable<LichThi> {
    return this.http.get<LichThi>(`${this.baseUrl}/lay/${maLichThi}`);
  }

  addLichThi(lichThi: LichThi): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, lichThi);
  }

  updateLichThi(maLichThi: number, lichThi: LichThi): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${maLichThi}`, lichThi);
  }

  deleteLichThi(maLichThi: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${maLichThi}`);
  }
}
