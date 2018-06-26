import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	user: User = {
		email: '',
		password: ''
	};

  constructor(private _authService: AuthService,
               private router: Router) {}

	ngOnInit() {}

	onSubmit() {
		//console.log(this.user);

		this._authService.login(this.user).subscribe(
			(data) => {
				this.router.navigate([ '/home' ]);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
