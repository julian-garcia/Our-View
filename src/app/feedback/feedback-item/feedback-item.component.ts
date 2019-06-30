import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '../../shared/models/feedback';
import { FeedbackService } from '../../shared/feedback.service';

@Component({
  selector: 'ov-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss']
})
export class FeedbackItemComponent implements OnInit {
  @Input() feedback;
  votes: number = 0;

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getFeedbackRatings(this.feedback.id).subscribe(item => {
      item.map(f => {
        this.votes += f.payload.toJSON()['upvote'];
      });
    });
  }

}
