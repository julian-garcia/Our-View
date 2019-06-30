import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackDetailComponent } from './feedback/feedback-detail/feedback-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FeedbackFormComponent } from './feedback/feedback-form/feedback-form.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'feedback/:feedbackId', component: FeedbackDetailComponent},
  {path: 'feedback', component: FeedbackFormComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
