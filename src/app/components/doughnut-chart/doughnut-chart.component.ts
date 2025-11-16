import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChartDataItem {
  label: string;
  value: number;
  color?: string;
}

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent implements OnChanges {
  @Input() title: string = 'Distribution Chart';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() colors: string[] = ['#4682B4', '#20B2AA', '#FF8C00', '#DC143C', '#2E8B57', '#FF6347'];

  radius: number = 60;
  strokeWidth: number = 50;
  selectedIndex: number = 0;
  selectedLabel: string = '';
  
  private circumference: number = 0;
  private segmentAngles: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['labels']) {
      this.calculateSegments();
      this.updateSelectedLabel();
    }
  }

  private calculateSegments(): void {
    const total = this.data.reduce((sum, val) => sum + val, 0);
    const circumference = 2 * Math.PI * this.radius;
    this.circumference = circumference;

    this.segmentAngles = [];
    let currentOffset = 0;

    for (let i = 0; i < this.data.length; i++) {
      const percentage = total > 0 ? this.data[i] / total : 0;
      const angle = percentage * 360;
      this.segmentAngles.push(angle);
      currentOffset += angle;
    }
  }

  getSegmentColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  getStrokeDasharray(index: number): string {
    const total = this.data.reduce((sum, val) => sum + val, 0);
    if (total === 0) return '0';
    
    const percentage = this.data[index] / total;
    const dashLength = percentage * this.circumference;
    return `${dashLength} ${this.circumference}`;
  }

  getStrokeDashoffset(index: number): string {
    const total = this.data.reduce((sum, val) => sum + val, 0);
    if (total === 0) return '0';

    let offset = 0;
    for (let i = 0; i < index; i++) {
      const percentage = this.data[i] / total;
      offset += percentage * this.circumference;
    }
    return `-${offset}`;
  }

  selectSegment(index: number): void {
    this.selectedIndex = index;
    this.updateSelectedLabel();
  }

  private updateSelectedLabel(): void {
    if (this.data.length > 0) {
      this.selectedLabel = this.data[this.selectedIndex].toString();
    }
  }

  getLabelX(index: number): number {
    const total = this.data.reduce((sum, val) => sum + val, 0);
    if (total === 0) return 100;

    // Calculate angle for this segment
    let angle = 0;
    for (let i = 0; i <= index; i++) {
      const percentage = this.data[i] / total;
      angle += percentage * 360;
    }
    // Subtract half the segment angle to get middle point
    const percentage = this.data[index] / total;
    angle -= (percentage * 180);
    
    // Convert to radians and calculate position (radius 30 for inside segment)
    const radians = ((angle - 90) * Math.PI) / 180;
    return 100 + 30 * Math.cos(radians);
  }

  getLabelY(index: number): number {
    const total = this.data.reduce((sum, val) => sum + val, 0);
    if (total === 0) return 100;

    // Calculate angle for this segment
    let angle = 0;
    for (let i = 0; i <= index; i++) {
      const percentage = this.data[i] / total;
      angle += percentage * 360;
    }
    // Subtract half the segment angle to get middle point
    const percentage = this.data[index] / total;
    angle -= (percentage * 180);
    
    // Convert to radians and calculate position (radius 30 for inside segment)
    const radians = ((angle - 90) * Math.PI) / 180;
    return 100 + 30 * Math.sin(radians);
  }
}

