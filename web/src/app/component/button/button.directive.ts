import { Directive } from '@angular/core';

@Directive({
  selector: 'button[byl-button-large],button[by-button-large],a[byl-button-large],a[by-button-large]',
  host: {'class': 'byl-button-lg'}
})

export class ButtonDirective {
  constructor() {
  }
}
