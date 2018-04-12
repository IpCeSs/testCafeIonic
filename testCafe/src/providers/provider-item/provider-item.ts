import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import { User } from '../../app/models/User';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the ProviderItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProviderItemProvider {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>


  constructor(public afs: AngularFirestore) {
  this.users = this.afs.collection('users').valueChanges();
  }

  getUsers(){
    return this.users;
  }
}




