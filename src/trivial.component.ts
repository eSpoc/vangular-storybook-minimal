import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'trivial-component',
  template: `<p><b>Example Story</b></p>
    <p>It worked!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrivialComponent {}

