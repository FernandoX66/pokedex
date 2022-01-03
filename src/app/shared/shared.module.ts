import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';

import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavButtonsComponent, CustomSnackbarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [NavButtonsComponent, CustomSnackbarComponent],
})
export class SharedModule {}
