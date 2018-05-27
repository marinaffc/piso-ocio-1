import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CleaningComponent } from './components/cleaning/cleaning.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: any[] = [];
  constructor(public navCtrl: NavController) {
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
      component: CleaningComponent
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
