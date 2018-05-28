import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CleaningComponent } from '../pages/home/components/cleaning/cleaning.component';
import { SeriesProvider } from '../providers/series/series';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ComponentsModule } from '../components/components.module';
import { SeriesComponent } from '../components/series/series';

const firebaseConfig= {
  apiKey: "AIzaSyCuR0y6P8DRSNtkAG4BFH_CSB-CiIc5u1M",
  authDomain: "piso-ocio.firebaseapp.com",
  databaseURL: "https://piso-ocio.firebaseio.com",
  projectId: "piso-ocio",
  storageBucket: "piso-ocio.appspot.com",
  messagingSenderId: "654907577803"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CleaningComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ComponentsModule
    
  ],exports: [
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CleaningComponent,
    SeriesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SeriesProvider
  ]
})
export class AppModule {}
