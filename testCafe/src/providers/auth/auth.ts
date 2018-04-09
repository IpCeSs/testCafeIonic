import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {Http} from "@angular/http";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public user: Observable<any>;

  constructor(public http: Http) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // si l'user est signed in
        console.log('Utilisateur est connecté');
      }
      else {
        // aucun utilisateur n'est signed in
        console.log('Utilisateur NON connecté');
      }
    });

  }

  /**
   * On utilise la methode signInWithEmailAndPassword de la web API de Firebase
   * (nb. option authentification choisie dans firebase)
   * pour authentifier la tentative de login de l'utilisateur
   *
   * @method loginWithEmailAndPassword
   * @param email    {string}      User e-mail address (gmail)
   * @param password {string}      Gmail address password
   * @return {Promise}
   */


  loginWithEmailAndPassword(email: string,
                            password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((val: any) => {
          resolve(val);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  /**
   * Log out with Firebase Web API signOut method
   *
   * @method logOut
   * @return {Promise}
   */
  logOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}

