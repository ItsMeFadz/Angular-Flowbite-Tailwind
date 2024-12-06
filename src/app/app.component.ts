import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from "./shared/shared.module";
import { CardComponent } from "./shared/components/card/card.component";
import { shareReplay } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, CommonModule, FooterComponent, HeaderComponent, SharedModule]
  imports: [RouterOutlet, CommonModule, FooterComponent, HeaderComponent, CardComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'belajar angular';

  dummyData = {
    title : "My Frist Article",
    content : "This is the best article in the wolrd",
  }

  internalMessage: string = "this is my internal message app.component";

  ngOnInit(): void {
    initFlowbite();
  }

  receiveMessage($message: string): void{
    this.internalMessage = $message;
  }
}
