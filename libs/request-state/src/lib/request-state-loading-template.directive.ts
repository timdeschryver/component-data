import { CommonModule } from '@angular/common';
import { Directive, NgModule, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[rsLoadingRequestState]',
})
export class LoadingRequestStateTemplateDirective {
  static ngTemplateContextGuar(
    _dir: LoadingRequestStateTemplateDirective,
    ctx: unknown
  ): ctx is undefined {
    return true;
  }

  constructor(public templateRef: TemplateRef<unknown>) {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingRequestStateTemplateDirective],
  exports: [LoadingRequestStateTemplateDirective],
})
export class LoadingRequestStateTemplateDirectiveModule {}