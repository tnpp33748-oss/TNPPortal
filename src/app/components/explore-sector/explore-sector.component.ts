import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';
import { SectorService, SectorData } from '../../services/sector.service';

interface Sector {
  name: string;
  color: string;
}

interface District {
  name: string;
}

@Component({
  selector: 'app-explore-sector',
  standalone: true,
  imports: [CommonModule, FormsModule, DoughnutChartComponent],
  templateUrl: './explore-sector.component.html',
  styleUrl: './explore-sector.component.scss'
})
export class ExploreSectorComponent implements OnInit {
  sectors: Sector[] = [];
  districts: District[] = [];

  selectedSector: string = 'Manufacturing';
  selectedDistrict: string = 'All';

  currentSectorData: SectorData = { bestPractices: 0, datasets: 0, policies: 0, starterKits: 0 };
  isLoading: boolean = false;

  // Sector Distribution Chart Data - 10 sectors (top chart)
  sectorDistributionLabels: string[] = [];
  sectorDistributionData: number[] = [];
  sectorDistributionColors: string[] = [];

  // Sector Overview Chart Data - 10 sectors (bottom chart - duplicate for now)
  sectorChartLabels: string[] = [];
  sectorChartData: number[] = [];
  sectorChartColors: string[] = [];

  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
    this.loadSectors();
    this.loadDistricts();
    this.updateSectorData();
  }

  /**
   * Load all sectors from API
   */
  loadSectors(): void {
    this.sectorService.getAllSectors().subscribe({
      next: (data) => {
        this.sectors = data;
        this.initializeSectorChart();
      },
      error: (error) => {
        console.error('Error loading sectors:', error);
      }
    });
  }

  /**
   * Load all districts from API
   */
  loadDistricts(): void {
    this.sectorService.getAllDistricts().subscribe({
      next: (data) => {
        this.districts = data;
      },
      error: (error) => {
        console.error('Error loading districts:', error);
      }
    });
  }

  /**
   * Fetch sector data from API based on selected sector and district
   */
  updateSectorData(): void {
    this.isLoading = true;
    this.sectorService.getSectorData(this.selectedSector, this.selectedDistrict).subscribe({
      next: (data) => {
        this.currentSectorData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading sector data:', error);
        this.isLoading = false;
      }
    });
  }

  /**
   * Handle sector dropdown change - fetch new data from API
   */
  onSectorChange(): void {
    this.updateSectorData();
  }

  /**
   * Handle district dropdown change - fetch new data from API
   */
  onDistrictChange(): void {
    this.updateSectorData();
  }

  trackBySectorName(index: number, sector: Sector): string {
    return sector.name;
  }

  trackByDistrictName(index: number, district: District): string {
    return district.name;
  }

  /**
   * Initialize sector overview chart with all 10 sectors
   */
  initializeSectorChart(): void {
    this.sectorService.getAllSectorsSummary().subscribe({
      next: (sectorsSummary) => {
        // Extract sector names, colors, and totals for both charts
        const sectorNames = sectorsSummary.map(s => s.name);
        const sectorColors = sectorsSummary.map(s => s.color);
        const sectorTotals = sectorsSummary.map(s => s.total);

        // Top Chart: Sector Distribution
        this.sectorDistributionLabels = sectorNames;
        this.sectorDistributionColors = sectorColors;
        this.sectorDistributionData = sectorTotals;

        // Bottom Chart: Sector Overview (same data)
        this.sectorChartLabels = sectorNames;
        this.sectorChartColors = sectorColors;
        this.sectorChartData = sectorTotals;
      },
      error: (error) => {
        console.error('Error loading sectors summary:', error);
      }
    });
  }
}
