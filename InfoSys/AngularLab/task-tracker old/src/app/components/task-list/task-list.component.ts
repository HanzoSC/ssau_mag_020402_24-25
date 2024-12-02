import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  private taskService = inject(TaskService);
  private router = inject(Router);

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter = {
    assignee: '',
    priority: '',
    type: '',
  };

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = [...tasks];
      this.sortTasks();
    });
  }

  applyFilter() {
    this.filteredTasks = this.tasks.filter((task) => {
      const matchesAssignee = this.filter.assignee
        ? task.assignee.includes(this.filter.assignee)
        : true;
      const matchesPriority = this.filter.priority
        ? task.priority === this.filter.priority
        : true;
      const matchesType = this.filter.type ? task.type === this.filter.type : true;

      return matchesAssignee && matchesPriority && matchesType;
    });
  }

  sortTasks() {
    this.filteredTasks.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  deleteTask(id: number | undefined) {
    if (id === undefined) {
      console.error('Невозможно удалить задачу: ID не указан.');
      return;
    }

    if (confirm('Вы уверены, что хотите удалить задачу?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  // Обновляем метод добавления задачи
  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe(() => {
      this.loadTasks();
    });
  }

  // Перенаправление на форму для создания новой задачи
  navigateToCreateTask() {
    this.router.navigate(['/tasks/create']);
  }
}