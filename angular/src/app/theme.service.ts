import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tokens, themeSettings } from './theme';

@Injectable(
)
export class ThemeService {
  private mode: BehaviorSubject<'light' | 'dark'> = new BehaviorSubject<'light' | 'dark'>('light');
  public mode$ = this.mode.asObservable();

  setMode(mode: 'light' | 'dark') {
    this.mode.next(mode);
  }

  getThemeSettings() {
    return themeSettings(this.mode.value);
  }

  getTokens() {
    return tokens(this.mode.value);
  }
}
