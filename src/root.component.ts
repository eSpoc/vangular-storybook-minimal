import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'vng-root',
  template: `<router-outlet></router-outlet>`,
  imports: [RouterOutlet],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
  @HostBinding('class') classList = 'inline-block h-full w-full';
}
