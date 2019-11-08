import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 1;
  tjmHt = 600;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;
  totalHt(): number {
    return this.nbJours * this.tjmHt;
  }
  totalTtc(tva?: number): number {
    if (tva && tva > 0) {
      return this.totalHt() * (1 + tva / 100);
    } else if (tva && tva <= 0) {
      return this.totalHt();
    } else {
      return this.totalHt() * (1 + this.tauxTva / 100);
    }
  }
  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
