import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  moduleId: module.id,
  templateUrl: 'edit-keg.component.html',
  styleUrls: ['edit-keg.component.css']
})

export class EditKegComponent {
  @Input() kegs: Keg[];
  @Input() editKeg: Keg;
  @Input() i: number;
  @Output() deleteKegSender = new EventEmitter;

  keg: Keg;

  deleteKeg(i) {
    console.log(i)
    this.kegs.splice(i, 1);
  }

  minusPint(editKeg) {
    this.editKeg.pintsRemaining = this.editKeg.pintsRemaining - 1;
  }


}
