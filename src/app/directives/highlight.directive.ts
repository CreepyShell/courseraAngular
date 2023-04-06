import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private readerer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.readerer.addClass(this.element.nativeElement, 'highlight');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.readerer.removeClass(this.element.nativeElement, 'highlight');
  }
}
