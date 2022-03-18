import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';

import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StatCardComponent } from './components/stat-card/stat-card/stat-card.component';

@NgModule({
  declarations: [
    NavButtonsComponent,
    CustomSnackbarComponent,
    StatCardComponent,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [NavButtonsComponent, CustomSnackbarComponent, StatCardComponent],
})
export class SharedModule {}
