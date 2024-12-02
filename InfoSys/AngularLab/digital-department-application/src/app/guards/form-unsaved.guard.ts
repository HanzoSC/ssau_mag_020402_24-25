import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { GroupComponent } from '../group/group.component';

@Injectable({
  providedIn: 'root'
})
export class FormUnsavedGuard implements CanDeactivate<GroupComponent> {
  canDeactivate(component: GroupComponent): boolean {
    // Если форма изменена и не сохранена, показываем предупреждение
    if (component.studentForm.dirty) {
      return confirm('Вы не сохранили данные. Вы уверены, что хотите покинуть эту страницу?');
    }
    return true;
  }
}