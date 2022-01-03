export interface Items {
  count: number;
  next: string | null;
  previous: string | null;
  results: ItemBasic[];
}

export interface ItemBasic {
  name: string;
  url: string;
}
