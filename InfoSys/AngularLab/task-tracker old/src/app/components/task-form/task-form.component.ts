import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  private taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  task: Task = {
    type: 'task',
    priority: 'medium',
    status: 'todo',
    title: '',
    description: '',
    assignee: '',
    creator: '',
    createdAt: '',
    updatedAt: '',
  };

  isEditing = false;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditing = true;
      this.taskService.getTaskById(id).subscribe((task) => {
        this.task = task;  // Если редактируем, загружаем задачу
      });
    }
  }

  // Сохранение задачи (создание или редактирование)
  saveTask() {
    if (this.isEditing) {
      this.taskService.updateTask(this.task.id!, this.task).subscribe(() => {
        this.router.navigate(['/tasks']);  // После редактирования перенаправляем на список задач
      });
    } else {
      this.taskService.addTask(this.task).subscribe(() => {
        this.router.navigate(['/tasks']);  // После создания новой задачи перенаправляем на список
      });
    }
  }
}