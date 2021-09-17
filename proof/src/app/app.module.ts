import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { AmazingTeamComponent } from './amazing-team/amazing-team.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { NewsAndClientsComponent } from './news-and-clients/news-and-clients.component';
import { FooterComponent } from './footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurStoryComponent,
    AmazingTeamComponent,
    ExpertiseComponent,
    OurWorksComponent,
    NewsAndClientsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule, 
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
