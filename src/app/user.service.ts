import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Aravind', email: 'aruvi@example.com' },
    { id: 2, name: 'Jonathan', email: 'jon@example.com' },
    { id: 3, name: 'Sai', email: 'Sai@example.com' },
    { id: 2, name: 'Raj', email: 'raj@example.com' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
