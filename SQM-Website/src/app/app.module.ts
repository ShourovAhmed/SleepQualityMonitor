import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GraphComponent } from './graph/graph.component';
import { NotesComponent } from './notes/notes.component';
import { TipsComponent } from './tips/tips.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFirebaseModule } from './app-firebase.module';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GraphComponent,
    NotesComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    AppFirebaseModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
