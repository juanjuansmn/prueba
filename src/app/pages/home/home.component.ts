import { Component, Inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usersData: User[] = [];
  displayedColumns: string[] = ['name', 'username', 'email', 'details', 'actions'];

  constructor(private userService: UserService, private router: Router, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    const localStorage = this.document.defaultView?.localStorage;
    let storedData: string | null = null;

    if (localStorage) {
      storedData = localStorage.getItem('usersData');
    }

    if (storedData) {
      this.usersData = JSON.parse(storedData);
    }
    else {
      this.loadData();
    }
  }

  loadData() {
    this.userService.getUsers().then(data => {
      this.usersData = data
      localStorage.setItem('usersData', JSON.stringify(this.usersData));
    });
  }

  goToAdd(): void {
    const navigationDetails: string[] = ['/AddUser'];
    this.router.navigate(navigationDetails);
  }

  deleteUser(id: number): void {
    this.usersData = this.usersData.filter(user => user.id !== id);
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
  }
}