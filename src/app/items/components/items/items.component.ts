import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { fadeIn, grow, slideDown } from 'src/app/shared/animations/animations';
import { Items } from '../../interfaces/items.interface';
import { ItemRequestsService } from '../../services/item-requests.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  animations: [fadeIn, grow, slideDown],
})
export class ItemsComponent implements OnInit {
  items: Items = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };
  isLoadingItems: boolean = false;

  constructor(private _itemRequestsService: ItemRequestsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(url?: string): void {
    this.isLoadingItems = true;

    this._itemRequestsService
      .getItems(url)
      .pipe(finalize(() => (this.isLoadingItems = false)))
      .subscribe((items: Items) => (this.items = items));
  }
}
