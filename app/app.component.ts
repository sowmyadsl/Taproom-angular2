import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  @Input newKeg: Keg;
  kegs: Keg[] = [ new Keg ('Firebase Ale','Epicodus Brewery','http://surlybrewing.com/content/uploads/2014/09/surly-old-brewery-picture.jpg',6, 5.6),
  new Keg ('Something Ale','Whatever Brewery','https://img.grouponcdn.com/deal/crg8hnSc6RQdFUUfBGWq/uh-700x420/v1/c700x420.jpg',9, 9.6),
  new Keg ('Firebase Ale','Epicodus Brewery','http://copperpointbrewingcompany.com/wp-content/uploads/2015/09/copperpoint-brewery-boynton-beach1.jpg',11, 12)
  ];

  addKeg(newKegFromChild: Keg) {
  this.kegs.push(newKegFromChild);
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public image: string, public price: number, public alcoholContent: number, public pintsRemaining: number = 124){}
}
