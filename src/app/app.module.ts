import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SharedModule } from "./shared/shared.module";
import { CardComponent } from "./shared/components/card/card.component";

@NgModule({
  declarations :[],
    imports: [
    BrowserModule,
    FooterComponent, // Impor FooterComponent sebagai standalone
    HeaderComponent,
    CardComponent,
    SharedModule  // Impor HeaderComponent sebagai standalone
  ],
  bootstrap: []
})
export class AppModule { }
