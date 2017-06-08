import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { NewKegComponent } from './new-keg.component';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { LowPintsPipe } from './lowPints.pipe';

@Component({
  selector: 'keg-list',
  moduleId: module.id,
  templateUrl: 'keg-list.component.html',
  styleUrls: ['keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  keg: Keg;

  filterByPints: string = 'allKegs';
  onChange(optionFromMenu) {
    this.filterByPints = optionFromMenu;
  }
}
