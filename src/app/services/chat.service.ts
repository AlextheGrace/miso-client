import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Message } from '../models/Message';

@Injectable()
export class ChatService {
	socket: SocketIOClient.Socket;

	constructor() {
		console.log('chat service is init');
		this.socket = io.connect('http://localhost:5000');
	}

	getMessages() {
		let observable = new Observable<Message>((observer) => {
			this.socket.on('message', (data) => {
				observer.next(data);
			});
		});
		return observable;
	}

	sendMessage(message) {
		this.socket.emit('message',message);
	}
}
