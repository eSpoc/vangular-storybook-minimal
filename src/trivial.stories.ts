import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, StoryObj } from '@storybook/angular';
import { TrivialComponent } from 'trivial.component';

@Component({
  standalone: true,
  template: ` <trivial-component />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TrivialComponent],
})
class TrivialExampleComponent {}

const Trivial: Meta<TrivialExampleComponent> = {
  component: TrivialExampleComponent,
};

export default Trivial;
type Story = StoryObj<TrivialExampleComponent>;

export const TrivialExample: Story = {
  parameters: {},
};

