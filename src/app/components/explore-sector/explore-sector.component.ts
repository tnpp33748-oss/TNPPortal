import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule],
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
}
