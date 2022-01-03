import { NamedAPIResource } from 'src/app/pokemons/interfaces/pokemon.interface';

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: NamedAPIResource;
  attributes: NamedAPIResource[];
  category: NamedAPIResource;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  names: Name[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon[];
  baby_trigger_for: APIResource;
  machines: MachineVersionDetail[];
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface VersionGroupFlavorText {
  text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: NamedAPIResource;
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemon {
  pokemon: NamedAPIResource;
  version_details: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

export interface APIResource {
  url: string;
}

export interface MachineVersionDetail {
  machine: APIResource;
  version_group: NamedAPIResource;
}
