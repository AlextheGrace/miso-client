import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import {Observable } from 'rxjs/Observable';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
	apiUrl = 'http://localhost:5000/';

	constructor(private http: HttpClient) {}

	isLoggedIn() {}

	login(user):Observable<User> {
		return this.http.post<User>(`${this.apiUrl}login`, user, httpOptions);
	}

	register(user) {
		return this.http.post<any>(`${this.apiUrl}register`, user, httpOptions);
	}
}
