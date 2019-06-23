import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'feedback/:feedbackId', component: FeedbackDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
