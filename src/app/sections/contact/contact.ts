import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { PROFILE } from '../../core/data/resume-data';
import { EmailService } from '../../core/services/email.service';

type SendState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly state = signal<SendState>('idle');

  private readonly fb = inject(FormBuilder);
  private readonly emailService = inject(EmailService);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.getRawValue();

    if (!this.emailService.isConfigured()) {
      this.sendViaMailto(name, email, message);
      return;
    }

    this.state.set('sending');
    try {
      await this.emailService.send({ name, email, message });
      this.state.set('sent');
      this.form.reset();
    } catch {
      this.state.set('error');
    }
  }

  private sendViaMailto(name: string, email: string, message: string): void {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.state.set('sent');
    this.form.reset();
  }
}
