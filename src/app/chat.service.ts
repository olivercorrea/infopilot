import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  private botMessageSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000');
    this.socket.on('botMessage', (message) => {
      this.botMessageSubject.next({ role: 'bot', content: message });
    });
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>('/api/chat/greeting');
  }

  sendMessage(message: string): void {
    this.socket.emit('userMessage', message);
  }

  getBotMessages(): Observable<any> {
    return this.botMessageSubject.asObservable();
  }
}
