import { Component, signal } from '@angular/core';
import { PROFILE, RECRUITER_SUMMARY } from '../../core/data/resume-data';

@Component({
  selector: 'app-recruiter-mode',
  standalone: true,
  templateUrl: './recruiter-mode.html',
  styleUrl: './recruiter-mode.scss',
})
export class RecruiterMode {
  protected readonly open = signal(false);
  protected readonly profile = PROFILE;
  protected readonly summary = RECRUITER_SUMMARY;

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
