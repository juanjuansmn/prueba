import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor() { }

  getUsers(): Promise<User[]> {
    const users = fetch(this.apiUrl).then(res => res.json());
    return users;
  }
}