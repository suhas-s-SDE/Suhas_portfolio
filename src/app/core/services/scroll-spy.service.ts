import { Injectable, signal } from '@angular/core';

export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeSection = signal<string>('hero');
  private observer?: IntersectionObserver;

  observe(): void {
    if (this.observer) {
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          this.activeSection.set(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    NAV_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
