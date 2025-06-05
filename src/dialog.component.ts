import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'vng-dialog',
  template: ` <ng-content select="[body]" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {}
