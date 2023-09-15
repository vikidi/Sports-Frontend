import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StyleManager {
  // If not set, defaults to light
  isDark$ = new BehaviorSubject<boolean>(
    window.localStorage.getItem('themeIsDark') == 'true'
  );

  isDark() {
    return this.isDark$.asObservable();
  }

  constructor() {
    // Window is by default starting as light so setup dark theme if it is saved
    if (window.localStorage.getItem('themeIsDark') == 'true') {
      const href = 'dark-theme.css';
      getLinkElementForKey('dark-theme').setAttribute('href', href);
      document.body.classList.add('dark-theme');
    }
  }

  isInitDark() {
    return window.localStorage.getItem('themeIsDark') == 'true';
  }

  toggleDarkTheme() {
    if (this.isDark$.value) {
      this.removeStyle('dark-theme');
      document.body.classList.remove('dark-theme');
      this.isDark$.next(false);
      window.localStorage.setItem('themeIsDark', 'false');
    } else {
      const href = 'dark-theme.css';
      getLinkElementForKey('dark-theme').setAttribute('href', href);
      document.body.classList.add('dark-theme');
      this.isDark$.next(true);
      window.localStorage.setItem('themeIsDark', 'true');
    }
  }

  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `style-manager-${key}`;
}
