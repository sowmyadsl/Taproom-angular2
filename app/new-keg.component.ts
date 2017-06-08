import {Component, Output, EventEmitter} from '@angular/core';
import { Keg } from './app.component';

@Component({
  selector: 'new-keg',
  moduleId: module.id,
  templateUrl: 'new-keg.component.html',
  styleUrls: ['new-keg.component.css']
})


export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  newKeg ( name: string,  brand: string,  image: string,  price: number,  alcoholContent: number) {
    var newKeg: Keg = new Keg(name, brand, image, price, alcoholContent);
    this.newKegSender.emit(newKeg);
  }
}
