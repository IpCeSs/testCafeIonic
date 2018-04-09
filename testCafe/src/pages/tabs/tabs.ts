import { Component } from '@angular/core';

import { ProfilPage } from '../profil/profil';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SearchPage} from "../search/search";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilPage;
  tab3Root = ContactPage;
  tab4Root = SearchPage;

  constructor() {

  }
}
