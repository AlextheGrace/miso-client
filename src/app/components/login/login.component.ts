import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {
    email: '',
    password: ''
  };


  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.user);

    this._authService.login(this.user).subscribe(login => {
      console.log("login success??");
    })
  }


}
