import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { PROFILE, STORY_BEATS } from '../../core/data/resume-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly beats = STORY_BEATS;
}
