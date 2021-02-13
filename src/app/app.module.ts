import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WordsService } from './services/words.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
