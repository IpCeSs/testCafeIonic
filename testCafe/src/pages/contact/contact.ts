import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProviderItemProvider } from "../../providers/provider-item/provider-item";
import { User} from "../../app/models/User";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'

})
export class ContactPage implements OnInit{

  users: User[];

  constructor(public navCtrl: NavController, private userService:ProviderItemProvider) {

  }
ngOnInit(){
    this.userService.getUsers().subscribe(users=>{
     // console.log(users);
      this.users = users;
    });
}
}
