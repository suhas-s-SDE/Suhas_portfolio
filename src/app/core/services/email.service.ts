import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../data/contact-config';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  isConfigured(): boolean {
    return !Object.values(EMAILJS_CONFIG).some((value) => value.startsWith('YOUR_'));
  }

  async send(payload: ContactPayload): Promise<void> {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message,
      },
      { publicKey: EMAILJS_CONFIG.publicKey },
    );
  }
}
