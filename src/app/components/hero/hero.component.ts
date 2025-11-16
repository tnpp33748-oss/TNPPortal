import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  stats: Stat[] = [
    { number: '38', label: 'Districts Covered' },
    { number: '2,547', label: 'State Policies' },
    { number: '₹8.2L Cr', label: 'GSDP' }
  ];
}
