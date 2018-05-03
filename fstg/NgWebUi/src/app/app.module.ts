import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { TargetAddComponent } from './baseball/pitching/target-add/target-add.component';

const appRoutes: Routes = [
  {path: 'baseball/pitching/targetAdd', component: TargetAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TargetAddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
