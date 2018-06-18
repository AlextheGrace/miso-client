import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  email:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.username,this.email,this.password);
  }

}
