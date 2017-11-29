import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: 'this is the messages component<div *ngFor="let message of messages">{{message.text}} by: {{message.owner}}</div>'
})
export class MessagesComponent {
    messages = [{text:'this is text', owner:'Jane'}, {text:'other text', owner:'Joe'}];
}