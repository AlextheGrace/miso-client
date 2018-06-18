import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/Message';
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
	form:any;
 
	constructor(private _chatService: ChatService) {}

	ngOnInit() {
		this._chatService.getMessages().subscribe((message: Message) => {
			console.log(message);
			this.messages.push(message);
		});
	}

	addMessage({ message }) {
		//add message here via service
		this._chatService.emitData(this.message);
		this.form.reset();
	}

	// addUser() {
	// 	this.user.hide = true;
	// 	this.user.registered = new Date();
	// 	this.users.unshift(this.user);
	// }
}
