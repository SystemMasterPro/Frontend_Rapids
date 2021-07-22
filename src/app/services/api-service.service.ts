import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(`${environment.URL_API}/books`);
  }

  getPDF(): string {
    return '../../assets/example.pdf';
  }
}
