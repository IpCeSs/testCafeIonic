import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  constructor(private _NAV      : NavController,
              private _AUTH     : AuthProvider)
  {  }




  /**
   * Log out from Firebase/set the rootPage value to
   * the LoginPage component
   * @method logOut
   * @return {none}
   */
  logOut() : void
  {
    this._AUTH.logOut()
      .then((data : any) =>
      {
        this._NAV.setRoot(LoginPage);
      })
      .catch((error : any) =>
      {
        console.dir(error);
      });
  }

}
