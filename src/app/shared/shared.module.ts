import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FooterComponent, 
    HeaderComponent,
    CardComponent  
  ],
  exports:[
    FooterComponent, 
    HeaderComponent,
    CardComponent
  ]
})
export class SharedModule { }
