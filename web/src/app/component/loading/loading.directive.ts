import { Directive } from '@angular/core';

@Directive({
  selector: '[bylLoading]',
  exportAs: 'bylLoading',
})

export class LoadingDirective {
  constructor() {
  }
}
