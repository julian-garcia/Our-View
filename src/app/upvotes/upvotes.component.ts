import { Component, OnInit, Input } from '@angular/core';
import { FeedbackRating, FeedbackService } from '../shared/feedback.service';

@Component({
  selector: 'ov-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss']
})
export class UpvotesComponent implements OnInit {
  @Input() feedbackId: number;
  feedbackRatings: number[] = [];
  sumRatings: number = 0;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackRatings = this.feedbackService.getFeedbackRatings(this.feedbackId).map(item => item.upvote);
    this.sumRatings = this.feedbackRatings.reduce((previous, current) => previous + current);
  }


}
