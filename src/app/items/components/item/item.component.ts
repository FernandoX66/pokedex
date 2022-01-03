import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { ItemBasic } from '../../interfaces/items.interface';
import { ItemRequestsService } from '../../services/item-requests.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() set itemBasic(itemBasic: ItemBasic) {
    this._itemRequestsService.getItem(itemBasic.url).subscribe((item: Item) => {
      this.item = item;

      if (this.item.id < 10) {
        this.itemIndex = '00';
      } else if (this.item.id < 100) {
        this.itemIndex = '0';
      } else {
        this.itemIndex = '';
      }
    });
  }
  item: Item = {
    id: 0,
    name: '',
    cost: 0,
    fling_power: 0,
    fling_effect: {
      name: '',
      url: '',
    },
    attributes: [],
    category: {
      name: '',
      url: '',
    },
    effect_entries: [],
    flavor_text_entries: [],
    game_indices: [],
    names: [],
    sprites: {
      default: '',
    },
    held_by_pokemon: [],
    baby_trigger_for: {
      url: '',
    },
    machines: [],
  };
  itemIndex: string = '';

  constructor(private _itemRequestsService: ItemRequestsService) {}
}
