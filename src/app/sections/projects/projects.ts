import { Component, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { ProjectCard } from './project-card/project-card';
import { ProjectDetailModal } from './project-detail-modal/project-detail-modal';
import { PROJECTS } from '../../core/data/resume-data';
import { ProjectEntry } from '../../core/models/resume-data.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, ProjectCard, ProjectDetailModal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly activeProject = signal<ProjectEntry | null>(null);

  open(project: ProjectEntry): void {
    this.activeProject.set(project);
  }

  close(): void {
    this.activeProject.set(null);
  }
}
