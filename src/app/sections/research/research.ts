import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { PUBLICATIONS } from '../../core/data/resume-data';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './research.html',
  styleUrl: './research.scss',
})
export class Research {
  protected readonly publications = PUBLICATIONS;
}
