import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { CommonModule } from '@angular/common';
import { GroupService } from '../services/group.service';
import { StudentService } from '../services/student.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Under18Directive } from '../directives/under18.directive';
import { BirthCenturyPipe } from '../pipes/birth-century.pipe';

@Component({
  selector: 'app-groups',
  templateUrl: './group.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, Under18Directive, BirthCenturyPipe],
  standalone: true,
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  private http = inject(HttpClient);
  groups: any[] = [];
  students: any[] = [];
  selectedGroupId: number | null = null;
  selectedGroupName: string = '';
  studentForm: FormGroup;
  selectedStudent: any = null;

  constructor(
    private groupService: GroupService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Инициализация формы с валидацией
    this.studentForm = this.fb.group({
      fname: ['', [Validators.required]],
      sname: ['', [Validators.required]],
      mname: ['', [Validators.required]],
      stud: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupService.getGroups().subscribe((data) => {
      this.groups = data;
    });
  }

  loadStudents(groupId: number): void {
    this.studentService.getStudentsByGroupId(groupId).subscribe((data) => {
      this.students = data;
    });
  }

  onGroupChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const groupId = selectElement.value;

    if (groupId) {
      this.selectedGroupId = parseInt(groupId, 10);
      this.loadStudents(this.selectedGroupId);
    }
  }

  addStudent(): void {
    if (this.studentForm.valid) {
      const newStudent = { ...this.studentForm.value, groupId: this.selectedGroupId };
      this.studentService.addStudent(newStudent).subscribe(() => {
        this.loadStudents(this.selectedGroupId!);
        this.clearStudentForm();
        this.router.navigate(['/group']);
      });
    } else {
      alert('Заполните все поля корректно для добавления студента.');
    }
  }

  clearStudentForm(): void {
    this.studentForm.reset();
    this.selectedStudent = null;
  }


  startEdit(student: any): void {
    // Копируем данные студента для редактирования
    this.selectedStudent = { ...student };
  }

  saveStudent(form: any): void {
    if (form.valid && this.selectedStudent) {
      // Обновляем данные студента
      this.studentService.updateStudent(this.selectedStudent.id, this.selectedStudent).subscribe(() => {
        this.loadStudents(this.selectedGroupId!); // Обновляем список студентов
        this.cancelEdit(); // Сбрасываем форму и выбранного студента
        this.router.navigate(['/group']); // Перенаправляем на страницу групп
      });
    }
  }
  
  cancelEdit(): void {
    this.selectedStudent = null; // Сбрасываем выбранного студента
  }
  deleteStudent(studentId: number): void {
    if (confirm('Вы уверены, что хотите удалить студента?')) {
      this.studentService.deleteStudent(studentId).subscribe(() => {
        this.loadStudents(this.selectedGroupId!);
      });
    }
  }
}