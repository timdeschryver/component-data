import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ErrorComponent } from 'request-state';

@Component({
  selector: 'component-data-nx-custom-error',
  template: `
    <div role="alert" style="border: 1px solid red">
      Something went wrong!
      <pre>
        {{ error | json }}
      </pre
      >
    </div>
  `,
})
export class CustomErrorComponent implements ErrorComponent {
  error: unknown;
}

@NgModule({
  imports: [CommonModule],
  declarations: [CustomErrorComponent],
})
export class CustomErrorComponentModule {}