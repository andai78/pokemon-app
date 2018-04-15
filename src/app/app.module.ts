import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PkmTypeColorPipe } from './pkm-type-color.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PkmTypeColorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
