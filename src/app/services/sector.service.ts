import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface SectorData {
  bestPractices: number;
  datasets: number;
  policies: number;
  starterKits: number;
}

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor() { }

  /**
   * Fetch sector data by sector name and district
   * Currently returns mock data
   * TODO: Replace with actual API call once endpoint is ready
   * @param sectorName - Name of the sector
   * @param district - Selected district (default: 'All')
   * @returns Observable<SectorData>
   */
  getSectorData(sectorName: string, district: string = 'All'): Observable<SectorData> {
    // Mock API response data for each sector
    const mockSectorDataMap: Map<string, SectorData> = new Map([
      ['Manufacturing', { bestPractices: 166, datasets: 66, policies: 431, starterKits: 5 }],
      ['MSME', { bestPractices: 142, datasets: 54, policies: 389, starterKits: 8 }],
      ['Skill Livelihoods and Labour Welfare', { bestPractices: 128, datasets: 48, policies: 356, starterKits: 6 }],
      ['Tourism', { bestPractices: 95, datasets: 42, policies: 278, starterKits: 4 }],
      ['Education', { bestPractices: 189, datasets: 78, policies: 512, starterKits: 12 }],
      ['Energy', { bestPractices: 152, datasets: 61, policies: 423, starterKits: 7 }],
      ['Urbanization', { bestPractices: 118, datasets: 55, policies: 334, starterKits: 5 }],
      ['Agriculture and Allied Services', { bestPractices: 174, datasets: 72, policies: 468, starterKits: 10 }],
      ['Health and Nutrition', { bestPractices: 156, datasets: 69, policies: 445, starterKits: 9 }],
      ['Water and Wash', { bestPractices: 134, datasets: 58, policies: 387, starterKits: 6 }]
    ]);

    const sectorData = mockSectorDataMap.get(sectorName) || { bestPractices: 0, datasets: 0, policies: 0, starterKits: 0 };

    // Simulating API call with delay
    return of(sectorData).pipe(delay(300));

    /* 
    // Future implementation with actual API:
    // return this.http.get<SectorData>(`/api/sectors/${sectorName}?district=${district}`);
    */
  }

  /**
   * Get all sectors
   * @returns Observable with list of sectors
   */
  getAllSectors(): Observable<any[]> {
    const sectors = [
      { name: 'Manufacturing', color: '#2c3e7f' },
      { name: 'MSME', color: '#2c5aa0' },
      { name: 'Skill Livelihoods and Labour Welfare', color: '#8b4c7f' },
      { name: 'Tourism', color: '#6b5b99' },
      { name: 'Education', color: '#9d3c3c' },
      { name: 'Energy', color: '#b8a61a' },
      { name: 'Urbanization', color: '#a67c52' },
      { name: 'Agriculture and Allied Services', color: '#4a7d5f' },
      { name: 'Health and Nutrition', color: '#5a8b7f' },
      { name: 'Water and Wash', color: '#6ba0a0' }
    ];

    return of(sectors).pipe(delay(100));
  }

  /**
   * Get all districts
   * @returns Observable with list of districts
   */
  getAllDistricts(): Observable<any[]> {
    const districts = [
      { name: 'All' },
      { name: 'Ariyalur' },
      { name: 'Chengalpattu' },
      { name: 'Chennai' },
      { name: 'Coimbatore' },
      { name: 'Cuddalore' },
      { name: 'Dharmapuri' },
      { name: 'Dindigul' },
      { name: 'Erode' },
      { name: 'Kallakurichi' },
      { name: 'Kanchipuram' },
      { name: 'Kanniyakumari' },
      { name: 'Karur' },
      { name: 'Krishnagiri' },
      { name: 'Madurai' },
      { name: 'Mayiladuthurai' },
      { name: 'Nagapattinam' },
      { name: 'Namakkal' },
      { name: 'Nilgiris' },
      { name: 'Perambalur' },
      { name: 'Pudukkottai' },
      { name: 'Ramanathapuram' },
      { name: 'Ranipet' },
      { name: 'Salem' },
      { name: 'Sivaganga' },
      { name: 'Tenkasi' },
      { name: 'Thanjavur' },
      { name: 'Theni' },
      { name: 'Thoothukudi' },
      { name: 'Tiruchirappalli' },
      { name: 'Tirunelveli' },
      { name: 'Tirupathur' },
      { name: 'Tiruppur' },
      { name: 'Tiruvallur' },
      { name: 'Tiruvannamalai' },
      { name: 'Tiruvarur' },
      { name: 'Vellore' },
      { name: 'Viluppuram' },
      { name: 'Virudhunagar' }
    ];

    return of(districts).pipe(delay(100));
  }

  /**
   * Get summary data for all sectors (total resources count)
   * Used for sector overview chart
   * @returns Observable with array of sector summary data
   */
  getAllSectorsSummary(): Observable<{ name: string; color: string; total: number }[]> {
    const mockSectorDataMap: Map<string, SectorData> = new Map([
      ['Manufacturing', { bestPractices: 166, datasets: 66, policies: 431, starterKits: 5 }],
      ['MSME', { bestPractices: 142, datasets: 54, policies: 389, starterKits: 8 }],
      ['Skill Livelihoods and Labour Welfare', { bestPractices: 128, datasets: 48, policies: 356, starterKits: 6 }],
      ['Tourism', { bestPractices: 95, datasets: 42, policies: 278, starterKits: 4 }],
      ['Education', { bestPractices: 189, datasets: 78, policies: 512, starterKits: 12 }],
      ['Energy', { bestPractices: 152, datasets: 61, policies: 423, starterKits: 7 }],
      ['Urbanization', { bestPractices: 118, datasets: 55, policies: 334, starterKits: 5 }],
      ['Agriculture and Allied Services', { bestPractices: 174, datasets: 72, policies: 468, starterKits: 10 }],
      ['Health and Nutrition', { bestPractices: 156, datasets: 69, policies: 445, starterKits: 9 }],
      ['Water and Wash', { bestPractices: 134, datasets: 58, policies: 387, starterKits: 6 }]
    ]);

    const sectors = [
      { name: 'Manufacturing', color: '#2c3e7f' },
      { name: 'MSME', color: '#2c5aa0' },
      { name: 'Skill Livelihoods and Labour Welfare', color: '#8b4c7f' },
      { name: 'Tourism', color: '#6b5b99' },
      { name: 'Education', color: '#9d3c3c' },
      { name: 'Energy', color: '#b8a61a' },
      { name: 'Urbanization', color: '#a67c52' },
      { name: 'Agriculture and Allied Services', color: '#4a7d5f' },
      { name: 'Health and Nutrition', color: '#5a8b7f' },
      { name: 'Water and Wash', color: '#6ba0a0' }
    ];

    const sectorsSummary = sectors.map(sector => {
      const data = mockSectorDataMap.get(sector.name) || { bestPractices: 0, datasets: 0, policies: 0, starterKits: 0 };
      const total = data.bestPractices + data.datasets + data.policies + data.starterKits;
      return {
        name: sector.name,
        color: sector.color,
        total
      };
    });

    return of(sectorsSummary).pipe(delay(300));
  }
}
