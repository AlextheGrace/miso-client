import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
// import { }from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
	user: User;
	authToken: any;

	authUrl = 'http://localhost:5000/auth/';
	usersUrl = 'http://localhost:5000/users/'
	constructor(private http: HttpClient) {}

	isLoggedIn() {}

	login(user): Observable<User> {
		return this.http
			.post<User>(`${this.authUrl}login`, user, httpOptions)
			.do((res) => this.storeUserData(res))
			.do((res) => this.currentUser(res));
	}

	currentUser(user) {
		console.log(user.user);
	}

	storeUserData(userData) {
		console.log('from set session ' + userData.token);
		console.log('from set session ' + userData.token);
		localStorage.setItem('id_token', JSON.stringify(userData.token));
		localStorage.setItem('user', JSON.stringify(userData.user));
		this.user = userData.user;
		this.authToken = userData.authToken; 
	}


	register(user): Observable<User> {
		return this.http.post<User>(`${this.authUrl}register`, user, httpOptions);
	}


	getProfile():Observable<any> {
		return this.http.get<any>(`${this.usersUrl}/${this.user.id}`)
	
	}

	logout() {}

}