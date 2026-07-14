import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectEntry } from '../../../core/models/resume-data.model';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  templateUrl: './project-detail-modal.html',
  styleUrl: './project-detail-modal.scss',
})
export class ProjectDetailModal {
  @Input({ required: true }) project!: ProjectEntry;
  @Output() closed = new EventEmitter<void>();
}
