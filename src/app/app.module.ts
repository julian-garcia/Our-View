import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { UpvotesComponent } from './upvotes/upvotes.component';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { FeedbackService } from './shared/feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    UpvotesComponent,
    FeedbackItemComponent,
    FeedbackDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
