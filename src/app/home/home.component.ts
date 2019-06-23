import { Component, OnInit } from '@angular/core';
import { Feedback, FeedbackService } from '../shared/feedback.service';

@Component({
  selector: 'ov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  feedback: Feedback[] = [];
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedback = this.feedbackService.getFeedback();
  }

}
