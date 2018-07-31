import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { TargetAddComponent } from './baseball/pitching/target-add/target-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TargetService } from './services/target.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { TargetsViewComponent } from './baseball/pitching/targets-view/targets-view/targets-view.component';

const appRoutes: Routes = [
  { path: 'baseball/pitching/targetAdd', component: TargetAddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TargetAddComponent,
    TargetsViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [TargetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
