import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ItemsComponent, ItemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],
})
export class ItemsModule {}
