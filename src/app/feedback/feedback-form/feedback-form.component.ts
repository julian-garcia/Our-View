import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../shared/models/feedback';
import { FeedbackService } from 'src/app/shared/feedback.service';

@Component({
  selector: 'ov-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  model: Feedback = new Feedback('', '', '', new Date().toString());
  submitted = false;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.feedbackService.addFeedback(this.model.title,
      this.model.issue,
      this.model.suggestion);
  }
}
