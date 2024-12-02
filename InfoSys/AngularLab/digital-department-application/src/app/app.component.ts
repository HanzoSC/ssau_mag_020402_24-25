import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, RouterModule]
})
export class AppComponent {
  title = 'AngularLab';
}
