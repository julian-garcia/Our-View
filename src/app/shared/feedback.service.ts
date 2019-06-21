import { Injectable } from '@angular/core';

export class Feedback {
  constructor(
    public id: number,
    public user: string,
    public title: string,
    public issue: string,
    public suggestion: string,
    public votes: number
  ) { }
}

export class FeedbackRating {
  constructor(
    public id: number,
    public feedbackId: number,
    public user: string,
    public upvote: number,
    public timestamp: Date
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  getFeedback(): Feedback[] { 
    return feedback.map(item => new Feedback(item.id, item.user, item.title, item.issue, item.suggestion, item.votes));
  }
}

const feedback = [
  {
    'id': 1,
    'user': 'test',
    'title': 'my title',
    'issue': 'my title',
    'suggestion': 'my title',
    'votes': 5
  },
];