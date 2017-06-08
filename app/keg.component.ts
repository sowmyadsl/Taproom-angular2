import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg',
  moduleId: module.id,
  templateUrl: 'keg.component.html',
  styleUrls: ['keg.component.css']
})

export class KegComponent {
  @Input() kegs: Keg[];
  @Input() keg: Keg;
  @Input() i: number;
}
