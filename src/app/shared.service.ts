import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  login: Login[];
  header;
  Url;
  constructor(private http: HttpClient) {
    this.Url = 'http://192.168.142.25:8080/Systems/api';
    const headerSettings: { [username: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

   } 

  Login(login: Login): Observable<Login[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Login[]>
      (this.Url + '/UserLogin.php',login,  httpOptions)

  }  
}
