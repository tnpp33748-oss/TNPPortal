import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, DropdownCard, NAVBAR_ITEMS } from './navbar.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  hoveredDropdown: string | null = null;
  navItems: NavItem[] = NAVBAR_ITEMS;

  // 🔵 Toggle dropdown when clicked
  toggleDropdown(label: string, event: MouseEvent) {
    event.stopPropagation(); // prevent auto-close

    this.hoveredDropdown =
      this.hoveredDropdown === label ? null : label;
  }

  // 🔍 Identify card panel
  isCardPanel(items: DropdownCard[] | string[] | undefined): items is DropdownCard[] {
    return items !== undefined &&
           Array.isArray(items) &&
           items.length > 0 &&
           typeof items[0] === 'object';
  }

  // 🔍 Identify list panel
  isListPanel(items: DropdownCard[] | string[] | undefined): items is string[] {
    return items !== undefined &&
           Array.isArray(items) &&
           items.length > 0 &&
           typeof items[0] === 'string';
  }

  // 🔥 Close dropdown when user clicks outside BOTH navbar & dropdown
  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    const clickedInsideNavbar = target.closest('.navbar');
    const clickedInsideDropdown = target.closest('.dropdown-content');

    if (!clickedInsideNavbar && !clickedInsideDropdown) {
      this.hoveredDropdown = null;
    }
  }
}



