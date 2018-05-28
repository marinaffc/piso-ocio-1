import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CleaningComponent } from './components/cleaning/cleaning.component';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { SeriesComponent } from '../../components/series/series';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: any[] = [];
  items: Observable<any[]>;
  // constructor(db: AngularFirestore) {
  //   this.items = db.collection('items').valueChanges();
  // }
  constructor(public navCtrl: NavController, db: AngularFirestore) {

    this.items = db.collection('series').valueChanges();
    console.log(this.items);
    this.items.subscribe(res => {
      console.log(res);
    })

    this.pages = [ {
      title: 'Limpieza',
      component: CleaningComponent
    },
    {
      title: 'Cocina',
      component: CleaningComponent
    },
    {
      title: 'Series',
      component: SeriesComponent
    },
    
    {
      title: 'Cine',
      component: CleaningComponent
    },
    {
      title: 'Música',
      component: CleaningComponent
    },
    {
      title: 'Eventos',
      component: CleaningComponent
    },
  ];
  }

  openPage(event){
    this.navCtrl.push(event.component, {
      item: 'id'
    });
  }

}
