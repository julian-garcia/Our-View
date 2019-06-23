import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { UpvotesComponent } from './upvotes/upvotes.component';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FeedbackService } from './shared/feedback.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    UpvotesComponent,
    FeedbackItemComponent,
    FeedbackDetailComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
