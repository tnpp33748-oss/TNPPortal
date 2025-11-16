import { Component } from '@angular/core';
import { OverviewComponent } from '../hero/hero.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [OverviewComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {}
