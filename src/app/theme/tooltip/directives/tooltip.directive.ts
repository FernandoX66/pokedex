import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') tooltipText: string = '';
  delay: number = 0;
  myPopUp: HTMLDivElement | undefined;
  timer: any;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.timer = setTimeout(() => {
      let x =
        this.el.nativeElement.getBoundingClientRect().left +
        this.el.nativeElement.offsetWidth / 2;
      let y =
        this.el.nativeElement.getBoundingClientRect().top +
        (this.el.nativeElement.offsetHeight + 6);
      this.createTooltipPopup(x, y);
    }, this.delay);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.timer) clearTimeout(this.timer);
    if (this.myPopUp) this.myPopUp.remove();
  }

  createTooltipPopup(x: number, y: number): void {
    let popup = document.createElement('div');
    popup.innerHTML = this.tooltipText;
    popup.classList.add('tooltip-container');
    popup.style.top = y.toString() + 'px';
    popup.style.left = x.toString() + 'px';
    document.body.appendChild(popup);
    this.myPopUp = popup;

    setTimeout(() => {
      if (this.myPopUp) this.myPopUp.remove();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.myPopUp) this.myPopUp.remove();
  }
}
