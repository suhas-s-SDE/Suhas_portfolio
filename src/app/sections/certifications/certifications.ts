import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { CERTIFICATIONS } from '../../core/data/resume-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  protected readonly certifications = CERTIFICATIONS;
}
