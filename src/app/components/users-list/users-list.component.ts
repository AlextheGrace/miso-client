import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { FilterPipe } from '../../pipes/filter.pipe';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {

    this.users = [
      {
        username:"alex",
        email: "dong"
      },
      {
        username:"himon",
        email: "dong"
      },
      {
        username:"jonathan",
        email: "dong"
      },
      {
        username:"kave"
      }
    ];
    console.log(this.users);
  }

}
