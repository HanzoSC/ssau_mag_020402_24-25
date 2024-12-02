import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navigateToEmployees() {
    this.router.navigate(['/employees']);
  }

  navigateToTasks() {
    this.router.navigate(['/tasks']);
  }
}
