import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { EDUCATION } from '../../core/data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly education = EDUCATION;
}
