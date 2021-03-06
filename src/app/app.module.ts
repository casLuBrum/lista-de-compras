import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SQLite } from '@ionic-native/sqlite';
import { DatabaseService } from '../providers/shared/database.service';
import { ToastService } from '../providers/shared/toast.service';
import { CategoriaService } from '../providers/categorias/categoria.service';

import { TabsPage } from '../pages/tabs/tabs';

import { ListCategoriaPage } from '../pages/categorias/list/list.categoria';
import { EditCategoriaPage } from '../pages/categorias/edit/edit.categoria';
import { ListListaPage } from '../pages/listas/list/list.lista';
import { SobrePage } from '../pages/sobre/sobre';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListCategoriaPage,
    EditCategoriaPage,
    ListListaPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListCategoriaPage,
    EditCategoriaPage,
    ListListaPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseService,
    ToastService,
    CategoriaService
  ]
})
export class AppModule {}
