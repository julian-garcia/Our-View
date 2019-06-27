import { Component, OnInit, Input } from '@angular/core';
import { Feedback, FeedbackService } from '../shared/feedback.service';

@Component({
  selector: 'ov-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss']
})
export class FeedbackItemComponent implements OnInit {
  @Input() feedback: Feedback;
  votes: number = 0;

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getFeedbackRatings(this.feedback.id)
      .forEach(rating => this.votes += rating.upvote);
  }

}
