import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormTestComponent } from './reactive-form-test/reactive-form-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
