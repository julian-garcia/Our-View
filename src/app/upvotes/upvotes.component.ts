import { Component, OnInit, Input } from '@angular/core';
import { FeedbackService } from '../shared/feedback.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'ov-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss']
})
export class UpvotesComponent implements OnInit {
  @Input() feedbackId: number;
  sumRatings: number = 0;
  userRatings = [];
  currentUser: string;

  constructor(private feedbackService: FeedbackService,
              private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.userLoggedIn.email;
    this.feedbackService.getFeedbackRatings(this.feedbackId).subscribe(ratingsArray => {
      this.sumRatings = 0;
      ratingsArray.map(ratingElement => {
        this.sumRatings += ratingElement.payload.toJSON()['upvote'];
      });
      this.userRatings = [];
      ratingsArray.forEach(ratingElement => {
        if (ratingElement.payload.toJSON()['user'] === this.currentUser) {
          this.userRatings.push(ratingElement.key);
        }
      });
    });
  }

  addUpvote() {
    if (this.userRatings.length === 0) {
      this.feedbackService.addUpVote(this.feedbackId, this.currentUser);
    }
  }

  removeUpvote() {
    if (this.userRatings.length > 0) {
      this.feedbackService.deleteUpVote(this.userRatings[0]);
    }
  }
}
