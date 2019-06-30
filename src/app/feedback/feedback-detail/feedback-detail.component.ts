import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../../shared/feedback.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'ov-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {
  feedback;

  constructor(private route: ActivatedRoute,
              private feedbackService: FeedbackService,
              private authService: AuthService) { }

  ngOnInit() {
    const feedbackId = this.route.snapshot.params['feedbackId'];

    this.feedbackService.getFeedbackById(feedbackId).subscribe(item => {
      this.feedback = {...item.payload.toJSON(), ...{id: item.key}};
    });
  }
}
