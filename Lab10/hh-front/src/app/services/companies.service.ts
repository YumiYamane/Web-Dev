import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

const baseUrl = 'http://127.0.0.1:8000/api/companies/'

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(baseUrl);
  }

  getCompanyById(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${baseUrl}${companyId}/`);
  }
}
