import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[bylPopover]',
  host: {
    '(click)': 'togglePopover()'
  },
  exportAs: 'popoverDirective'
})
export class PopoverDirective implements AfterViewInit {

  @Input('popoverTriggerFor') popover;

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this._checkPopover();
  }

  private _checkPopover() {
    if (!this.popover) {
      throw new Error(`
      Example:
        <byl-popover #popover="stbPopover"></byl-popover>
        <button [popoverTriggerFor]="popover"></button>
      `);
    }
  }

  togglePopover() {
    this.popover.toggle();
    this.popover.trigger = this._elementRef.nativeElement;
  }

}
