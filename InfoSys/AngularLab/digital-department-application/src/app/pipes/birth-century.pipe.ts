import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthCentury',
  standalone: true
})
export class BirthCenturyPipe implements PipeTransform {
  transform(age: number): string {
    if (!age || age <= 0) {
      return 'Некорректный возраст';
    }

    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age; // Вычисляем год рождения
    const century = Math.ceil(birthYear / 100); // Определяем век

    return `Родился в ${century}-м веке нашей эры`;
  }
}