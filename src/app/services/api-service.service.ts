import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  // public url = 'http://localhost:9000';
  constructor(private http: HttpClient) {}
// TRAE LA DATA DE NUESTRA API
  getBooks() {
    return this.http.get(`${environment.URL_API}/books`);
  }
// MANDAR NOTIFICACINES AL USUARIO
  saveToken = (token:Object) => {
    return this.http.post(`${environment.URL_NOTIFICATIONS}/save`,
      {
      token
    });
  };
}
