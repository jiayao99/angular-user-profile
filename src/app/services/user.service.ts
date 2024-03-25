import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<ApiResponse>(this.url).pipe(
      map(res => res.data)
    );
  }
}
