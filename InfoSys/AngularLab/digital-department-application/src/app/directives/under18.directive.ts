import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnder18]',
  standalone: true
})
export class Under18Directive implements OnInit {
  @Input() appUnder18: number = 0; // Получаем возраст через input

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.appUnder18 < 18) {
      // Применяем стиль курсив, если возраст меньше 18
      this.renderer.setStyle(this.el.nativeElement, 'font-style', 'italic');
    }
  }
}

