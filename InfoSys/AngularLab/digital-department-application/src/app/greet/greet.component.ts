import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-greet',
templateUrl: './greet.component.html',
standalone: true,
imports: [FormsModule, CommonModule, RouterModule],
styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit, OnChanges, DoCheck, 
                                AfterContentInit, AfterContentChecked, 
                                AfterViewInit, AfterViewChecked, OnDestroy {

userName: string = '';    // Сохранение введенного имени пользователя
greeting: string = '';    // Текст приветствия

constructor() {
console.log('Constructor called');
}

// Вызывается при инициализации компонента
ngOnInit(): void {
console.log('ngOnInit called');
}

// Вызывается при изменении входных свойств
ngOnChanges(changes: SimpleChanges): void {
console.log('ngOnChanges called', changes);
}

// Вызывается при каждой проверке изменений
ngDoCheck(): void {
console.log('ngDoCheck called');
}

// Вызывается после инициализации контента
ngAfterContentInit(): void {
console.log('ngAfterContentInit called');
}

// Вызывается после каждой проверки контента
ngAfterContentChecked(): void {
console.log('ngAfterContentChecked called');
}

// Вызывается после инициализации представления
ngAfterViewInit(): void {
console.log('ngAfterViewInit called');
}

// Вызывается после каждой проверки представления
ngAfterViewChecked(): void {
console.log('ngAfterViewChecked called');
}

// Вызывается при уничтожении компонента
ngOnDestroy(): void {
console.log('ngOnDestroy called');
}

// Метод для отображения приветствия
showGreeting(): void {
this.greeting = `Привет, ${this.userName}!`;
}
}