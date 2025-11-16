import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Stat {
  number: string;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  /**
   * Fetch statistics from API
   * Currently returns mock data
   * TODO: Replace with actual API call once endpoint is ready
   * @returns Observable<Stat[]>
   */
  getStats(): Observable<Stat[]> {
    // Mock API response
    const mockStats: Stat[] = [
      { number: '38', label: 'Best Practices' },
      { number: '2,547', label: 'State Policies' },
      { number: '₹8.2L Cr', label: 'Data' }
    ];

    // Simulating API call with delay
    return of(mockStats);

    /* 
    // Future implementation with actual API:
    // return this.http.get<Stat[]>('/api/stats');
    */
  }
}
