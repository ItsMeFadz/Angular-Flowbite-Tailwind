import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  title?: string;

  @Input()
  content?: string;
  
  @Output()
  messageEvent = new EventEmitter<string>();


  showMessage(): void{
    alert(this.title);
  }
  
  sendOutMessage(): void{
    this.messageEvent.emit(`${this.title}: This is my internal message`);
  }
}
