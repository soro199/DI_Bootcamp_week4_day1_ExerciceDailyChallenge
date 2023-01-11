import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user: User = {
    name: "SORO",
    prenom: "Wongniga Seydou",
    email: "wongnigaseydous@ditechnet.com",
    profilePictureUrl: "https://cdn.afrique-sur7.ci/768x512/articles/2020/02/Credit%20Suisse%20l%E2%80%99ivoirien%20Tidjane%20Thiam.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFullName() {
    return `${this.user.name} ${this.user.prenom}`;
  }
}
