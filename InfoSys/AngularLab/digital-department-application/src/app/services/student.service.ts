import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students'; // URL для студентов

  constructor(private http: HttpClient) {}

  // Получить список всех студентов
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Получить студента по ID
  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Добавить нового студента
  addStudent(student: {
    fname: string;
    sname: string;
    mname: string;
    stud: string;
    groupId: number;
    age: number;
  }): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }
  // Обновить данные студента
  updateStudent(id: number, updatedData: {
    fname: string;
    sname: string;
    mname: string;
    stud: string;
    groupId: number;
    age: number;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }

  // Удалить студента
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Получить студентов по ID группы
  getStudentsByGroupId(groupId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?groupId=${groupId}`);
  }
}
