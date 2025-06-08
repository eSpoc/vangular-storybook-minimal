import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'LocalSvgIcon',
  template: `@if (isShow()) {
    <mat-icon [class]="iconClasses()" [svgIcon]="svgIconName()" />
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  host: { class: 'inline-flex justify-center items-center' },
})
export class LocalSvgIcon {
  path = input.required<string>();
  iconClasses = input<string[]>(['!text-gray-600', '!m-0']);

  isShow = signal(false);
  matIconRegistry = inject(MatIconRegistry);
  domSanitizer = inject(DomSanitizer);
  svgIconName = signal<string>('');

  constructor() {
    effect(() => {
      const url = this.path();
      this.svgIconName.set(url);
      this.matIconRegistry.addSvgIcon(
        this.svgIconName(),
        this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
      this.isShow.set(true);
    });
  }

  getSvgIconName() {
    return this.svgIconName();
  }
}
