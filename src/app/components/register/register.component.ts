import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	user: User = {
		username: '',
		email: '',
		password: ''
	};

	constructor(private _authService: AuthService, private router: Router) {}

	ngOnInit() {}

	onSubmit() {
		this._authService.register(this.user).subscribe(
			(data) => {
				this.router.navigate([ '/home' ]);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
