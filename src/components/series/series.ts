import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the SeriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'series',
  templateUrl: 'series.html'
})
export class SeriesComponent {

  items: Observable<any[]>;
  seriesList: any = [];
  constructor(db: AngularFirestore) {
    this.items = db.collection('series').valueChanges();
    console.log(this.items);
    this.items.subscribe(res => {
      this.seriesList = res;
    })
  }

}
