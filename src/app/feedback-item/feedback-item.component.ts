import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '../shared/feedback.service';

@Component({
  selector: 'ov-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss']
})
export class FeedbackItemComponent implements OnInit {
  @Input() feedback: Feedback;

  constructor() { }

  ngOnInit() {
  }

}
