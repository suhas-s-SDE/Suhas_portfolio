import { Component, inject, signal } from '@angular/core';
import { NAV_SECTIONS, ScrollSpyService } from '../../core/services/scroll-spy.service';
import { PROFILE } from '../../core/data/resume-data';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly sections = NAV_SECTIONS;
  protected readonly profile = PROFILE;
  protected readonly spy = inject(ScrollSpyService);
  protected readonly menuOpen = signal(false);

  goTo(id: string): void {
    this.spy.scrollTo(id);
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
