import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss'],
})
export class NavButtonsComponent {
  @Input() previousURL: string | null = null;
  @Input() nextURL: string | null = null;
  @Output() onChangePage: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  changePage(direction: string): void {
    if (direction === 'next') {
      this.onChangePage.emit(this.nextURL as string);
    } else {
      this.onChangePage.emit(this.previousURL as string);
    }
  }
}
