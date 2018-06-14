import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  providers:[ChatService]
})
export class ChatWindowComponent implements OnInit {

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.chatService.emitData();
  }


  addMessage(e) {
    e.preventDefault();
    console.log('testing submit');
  }

}
