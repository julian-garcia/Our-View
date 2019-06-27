import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../shared/feedback.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'ov-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {
  feedback: any;

  constructor(private route: ActivatedRoute,
              private feedbackService: FeedbackService,
              private authService: AuthService) { }

  ngOnInit() {
    const feedbackId: number = parseInt(this.route.snapshot.params['feedbackId']);
    this.feedback = this.feedbackService.getFeedbackById(feedbackId);
  }
}
