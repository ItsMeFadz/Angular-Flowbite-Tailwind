import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations :[],
    imports: [
    BrowserModule,
    FooterComponent, // Impor FooterComponent sebagai standalone
    HeaderComponent,
    SharedModule  // Impor HeaderComponent sebagai standalone
  ],
  bootstrap: []
})
export class AppModule { }
