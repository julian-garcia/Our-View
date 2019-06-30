import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../shared/feedback.service';

@Component({
  selector: 'ov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  feedback = [];
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getFeedback().subscribe(feedbackArray => {
      this.feedback = [];
      feedbackArray.map(feedbackElement => {
        this.feedback.push({...feedbackElement.payload.toJSON(), ...{id: feedbackElement.key}});
      });
    });
  }
}
