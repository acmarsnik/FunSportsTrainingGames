import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TargetAddComponent } from './baseball/pitching/target-add/target-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TargetAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
