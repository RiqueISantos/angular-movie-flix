import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginRequest, LoginResponse, RegisterRequest } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/auth/login`,
      credentials,
      { headers }
    );
  }

  register(userData: RegisterRequest): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${this.apiUrl}/auth/register`,
      userData,
      { headers }
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  saveUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
