import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employee: any = {
    name: '',
    role: '',
  };
  isEditMode = false;

  constructor(
    private employeeService: EmployeeService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.params['id'];
    if (employeeId) {
      this.isEditMode = true;
      this.employeeService.getEmployeeById(employeeId).subscribe((data) => {
        this.employee = data;
      });
    }
  }

  saveEmployee(): void {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}