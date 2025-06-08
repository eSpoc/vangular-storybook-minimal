import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalSvgIcon } from './LocalSvgIcon';

@Component({
  standalone: true,
  selector: 'trivial-component',
  template: `<p><b>Example Story</b></p>
  <p>
    Expect an icon here:
    <LocalSvgIcon path="assets/images/icons/critical_priority.svg" />
  </p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LocalSvgIcon],
})
export class TrivialComponent {}

