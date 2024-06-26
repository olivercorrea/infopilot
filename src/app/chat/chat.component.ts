import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userMessage: string = '';
  messages: any[] = [];
  chatOpen: boolean = false;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });

    this.chatService.getBotMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      this.messages.push({ role: 'user', content: this.userMessage });
      this.chatService.sendMessage(this.userMessage);
      this.userMessage = '';
    }
  }

  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  }
}
