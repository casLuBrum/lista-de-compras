import { Component } from '@angular/core';

import { ListCategoriaPage } from '../categorias/list/list.categoria';
import { ListListaPage } from '../listas/list/list.lista';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListCategoriaPage;
  tab2Root = ListListaPage;
  tab3Root = SobrePage;  

  constructor() {

  }
}
