import { AfterViewInit, Component, inject } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';
import { RecruiterMode } from './layout/recruiter-mode/recruiter-mode';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Research } from './sections/research/research';
import { Certifications } from './sections/certifications/certifications';
import { Education } from './sections/education/education';
import { EngineeringJourney } from './sections/engineering-journey/engineering-journey';
import { Contact } from './sections/contact/contact';
import { ScrollSpyService } from './core/services/scroll-spy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Nav,
    Footer,
    RecruiterMode,
    Hero,
    About,
    Experience,
    Skills,
    Projects,
    Research,
    Certifications,
    Education,
    EngineeringJourney,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  private readonly spy = inject(ScrollSpyService);

  ngAfterViewInit(): void {
    this.spy.observe();
  }
}
