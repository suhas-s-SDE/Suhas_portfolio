import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

export interface GithubRepoStats {
  stars: number;
  forks: number;
  language: string | null;
  updatedAt: string;
  url: string;
}

type RepoState =
  | { status: 'idle' | 'loading' }
  | { status: 'ready'; data: GithubRepoStats }
  | { status: 'error' };

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);
  private readonly cache = new Map<string, ReturnType<typeof signal<RepoState>>>();

  getRepoStats(owner: string, repo: string) {
    const key = `${owner}/${repo}`;
    const existing = this.cache.get(key);
    if (existing) {
      return existing.asReadonly();
    }

    const state = signal<RepoState>({ status: 'loading' });
    this.cache.set(key, state);

    this.http
      .get<any>(`https://api.github.com/repos/${owner}/${repo}`)
      .pipe(catchError(() => of(null)))
      .subscribe((response) => {
        if (!response) {
          state.set({ status: 'error' });
          return;
        }
        state.set({
          status: 'ready',
          data: {
            stars: response.stargazers_count ?? 0,
            forks: response.forks_count ?? 0,
            language: response.language ?? null,
            updatedAt: response.pushed_at ?? response.updated_at,
            url: response.html_url,
          },
        });
      });

    return state.asReadonly();
  }
}
