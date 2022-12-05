import { Directive, Input, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryStateData } from '../contracts';

@Directive({
  selector: 'ng-template[qsIdle]',
  standalone: true
})
export class IdleQueryStateTemplateDirective<T> {
  @Input() qsIdle:
    | QueryStateData<T>
    | Observable<QueryStateData<T>>
    | undefined
    | '';

  static ngTemplateContextGuard<T>(
    _dir: IdleQueryStateTemplateDirective<T>,
    ctx: unknown
  ): ctx is {
    $implicit?: T;
    data?: T;
    revalidating: boolean;
    error?: unknown;
    retries?: number;
  } {
    return true;
  }

  constructor(public templateRef: TemplateRef<unknown>) {}
}
