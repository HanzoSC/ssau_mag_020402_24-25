import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(employeeId: number): void {
    if (confirm('Вы уверены, что хотите удалить сотрудника?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

  editEmployee(employeeId: number): void {
    this.router.navigate([`/employees/edit/${employeeId}`]);
  }

  addEmployee(): void {
    this.router.navigate(['/employees/add']);
  }
}