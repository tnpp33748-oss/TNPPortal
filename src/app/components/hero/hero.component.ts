import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsService, Stat } from '../../services/stats.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class OverviewComponent implements OnInit {
  stats: Stat[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.statsService.getStats().subscribe({
      next: (data: Stat[]) => {
        this.stats = data;
      },
      error: (error) => {
        console.error('Error loading stats:', error);
      }
    });
  }
}
