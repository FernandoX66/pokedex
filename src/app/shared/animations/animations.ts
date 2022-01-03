import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [animate('800ms')]),
]);

export const grow = trigger('grow', [
  state('void', style({ transform: 'scale(0.5)' })),

  transition(':enter', [animate('800ms ease-out')]),
]);

export const slideDown = trigger('slideDown', [
  state('void', style({ transform: 'translateY(-15px)' })),

  transition(':enter', animate('600ms')),
]);
