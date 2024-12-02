import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(
    private router: Router
              ) {}

  goToGroup() {
    const groupNumber = '6132';
    this.router.navigate(['/group', groupNumber]);
  }
}