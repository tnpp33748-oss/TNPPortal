import { Component } from '@angular/core';
import { OverviewComponent } from '../hero/hero.component';
import { ExploreSectorComponent } from '../explore-sector/explore-sector.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [OverviewComponent, ExploreSectorComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {}
