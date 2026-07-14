import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { EXPERIENCE } from '../../core/data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly entries = EXPERIENCE;
  protected readonly expanded = signal<number>(0);

  toggle(index: number): void {
    this.expanded.update((current) => (current === index ? -1 : index));
  }
}
