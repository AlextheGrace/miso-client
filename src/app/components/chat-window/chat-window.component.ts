import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/Message';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import {UsersListComponent } from '../users-list/users-list.component';
@Component({
	selector: 'app-chat-window',
	templateUrl: './chat-window.component.html',
	styleUrls: [ './chat-window.component.css' ],
	providers: [ ChatService ]
})
export class ChatWindowComponent implements OnInit {
	messages: Message[] = [];
	message: Message = {
		userName: '',
		body: ''
	};
	user:User;
	form:any;
 
	constructor(private _chatService: ChatService,
				private authService: AuthService) {}

	ngOnInit() {
		this.authService.getProfile().subscribe(profile => {

			this.user = profile;
			
		})
		
		this._chatService.getMessages().subscribe((message: Message) => {
			console.log(message);
			this.messages.push(message);
		});
	}

	addMessage({ message }) {
		this._chatService.sendMessage(this.message);
		this.form.reset();
	
	}

	addUser() {
		
	}
}
