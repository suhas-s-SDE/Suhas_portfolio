import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { JOURNEY } from '../../core/data/resume-data';

@Component({
  selector: 'app-engineering-journey',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './engineering-journey.html',
  styleUrl: './engineering-journey.scss',
})
export class EngineeringJourney {
  protected readonly stages = JOURNEY;
  protected readonly activeStage = signal<number>(0);

  select(index: number): void {
    this.activeStage.set(index);
  }
}
