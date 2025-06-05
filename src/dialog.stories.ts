import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, StoryObj } from '@storybook/angular';

@Component({
  standalone: true,
  selector: 'vng-extended-dialog-example',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class DialogExampleComponent {}

const Dialog: Meta<DialogExampleComponent> = {
  component: DialogExampleComponent,
};

export default Dialog;
type Story = StoryObj<DialogExampleComponent>;

export const ExampleDialog: Story = {
  parameters: {},
};
