import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { PROFILE } from '../../core/data/resume-data';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';

const CODE_RAIN_COLUMNS = [
  ['const', 'fn()', '=>', '{ }', 'SQL', 'true', 'git', 'API'],
  ['SELECT', 'WHERE', '01', '10', 'null', 'JSON', 'GET', 'if()'],
  ['npm i', 'λ', 'return', '</>', 'POST', 'const', 'for', 'true'],
  ['while', 'API', '{ }', 'git', 'SQL', '=>', 'null', '01'],
  ['fn()', 'JSON', 'if()', 'const', '10', 'return', 'λ', 'GET'],
  ['git', 'true', 'SELECT', '</>', 'WHERE', 'API', '{ }', 'npm i'],
  ['=>', '01', 'const', 'null', 'POST', 'for', 'SQL', 'fn()'],
];

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly roleIndex = signal(0);
  private readonly spy = inject(ScrollSpyService);
  private roleIntervalId?: ReturnType<typeof setInterval>;

  protected readonly codeRainColumns = CODE_RAIN_COLUMNS.map((tokens, i) => ({
    tokens,
    left: `${(i / CODE_RAIN_COLUMNS.length) * 100 + 3}%`,
    duration: `${16 + (i % 4) * 3}s`,
    delay: `${-(i * 2.6)}s`,
  }));

  ngOnInit(): void {
    this.roleIntervalId = setInterval(() => {
      this.roleIndex.update((i) => (i + 1) % this.profile.roles.length);
    }, 2800);
  }

  ngOnDestroy(): void {
    if (this.roleIntervalId) {
      clearInterval(this.roleIntervalId);
    }
  }

  scrollToContact(): void {
    this.spy.scrollTo('contact');
  }
}
