import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = 'http://localhost:3000/groups'; // URL для групп

  constructor(private http: HttpClient) {}

  // Получить список всех групп
  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Получить группу по ID
  getGroupById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Добавить новую группу
  addGroup(group: { name: string }): Observable<any> {
    return this.http.post(this.apiUrl, group);
  }

  // Обновить существующую группу
  updateGroup(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }

  // Удалить группу
  deleteGroup(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
