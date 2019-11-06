import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: any;
  @HostBinding('class') hostAttr: string;
  constructor() {
    console.log(this.appState);
   }

   ngOnChanges() {
    this.hostAttr = this.formatClass(this.appState);
   }

   private formatClass(state: any) {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}


// si appState vaut Option => state-option
// si appState vaut Annulé => state-annule
// si appState vaut Confirmé => state-confirm
// cibler td.class (host element) pour le binder avec notre nom de class
