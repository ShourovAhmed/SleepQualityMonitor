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
import { CreateComponent } from './components/create/create.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GraphComponent,
    NotesComponent,
    TipsComponent,
    CreateComponent,
    FeedComponent,
    ProfileCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    AppFirebaseModule,
    AppMaterialModule,
    NgApexchartsModule,
    RouterModule.forRoot([
      {
        path:"Statistics",
        component:GraphComponent
      },
      {
        path:"Journal",
        component:GraphComponent
      },
      {
        path:"Contact",
        component:GraphComponent
      },
      {
        path:"About",
        component:GraphComponent
      },
      {
        path: "", redirectTo: "Statistics", pathMatch: "full",
      },
      {
        path: "**", redirectTo: "Statistics"
      }
  
      ],
      {
        useHash : true  // zodat er geen request naar de server gestuurd worden voor nieuwe pagina's (deze zijn al beschikbaar op het apparaat)
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
