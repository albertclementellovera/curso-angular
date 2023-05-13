import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: string[] = [];

  //metodo para añadir mensajes en el array messages
  add(message: string){
    this.messages.push(message);
  }
}

