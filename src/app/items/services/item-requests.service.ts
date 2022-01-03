import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item.interface';
import { Items } from '../interfaces/items.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemRequestsService {
  constructor(private _hhtp: HttpClient) {}

  getItems(url?: string): Observable<Items> {
    if (url) {
      return this._hhtp.get<Items>(url);
    } else {
      return this._hhtp.get<Items>('https://pokeapi.co/api/v2/item/');
    }
  }

  getItem(url: string): Observable<Item> {
    return this._hhtp.get<Item>(url);
  }
}
