import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
  socket:SocketIOClient.Socket;


  constructor() { 
    console.log("chat service is init");
    this.socket = io.connect('http://localhost:5000');
  }

  emitData() {
    this.socket.emit('event',{
      msg:"client to server can you hear me?"
    });  
  }
  
}
