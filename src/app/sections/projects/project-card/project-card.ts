import { Component, EventEmitter, Input, Output, computed, inject } from '@angular/core';
import { ProjectEntry } from '../../../core/models/resume-data.model';
import { GithubService } from '../../../core/services/github.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) project!: ProjectEntry;
  @Output() openDetails = new EventEmitter<ProjectEntry>();

  private readonly github = inject(GithubService);

  protected readonly stats = computed(() => {
    if (!this.project.githubOwner || !this.project.githubRepo) {
      return null;
    }
    return this.github.getRepoStats(this.project.githubOwner, this.project.githubRepo)();
  });

  protected readonly githubUrl = computed(() =>
    this.project.githubOwner && this.project.githubRepo
      ? `https://github.com/${this.project.githubOwner}/${this.project.githubRepo}`
      : null,
  );

  formatUpdated(iso: string): string {
    const date = new Date(iso);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
}
