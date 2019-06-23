import { Injectable } from '@angular/core';

export class Feedback {
  constructor(
    public id: number,
    public title: string,
    public issue: string,
    public suggestion: string,
    public timestamp: Date
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
    let dt;
    return feedback.map(item => {
      dt = new  Date (item.timestamp);
      return new Feedback(item.id, item.title, item.issue, item.suggestion, dt);
    });
  }
  getFeedbackById(feedbackId) {
    let dt;
    return feedback.filter(item => {
      dt = new  Date (item.timestamp);
      if (item.id == feedbackId) {
        return new Feedback(item.id, item.title, item.issue, item.suggestion, dt);
      }
    })[0];
  }
  getFeedbackRatings(feedbackId): FeedbackRating[] {
    let dt;
    return ratings.map(item => {
      dt = new  Date (item.timestamp);
      return new FeedbackRating(item.id, item.feedbackId, item.user, item.upvote, dt);
    });
  }
}

const feedback = [
  {
    'id': 1,
    'title': 'my title',
    'issue': 'my issue',
    'suggestion': 'my sugg',
    'timestamp': "2012-04-21"
  },
];

const ratings = [
  {
    'id': 1,
    'feedbackId': 1,
    'user': 'test',
    'upvote': 1,
    'timestamp': "2012-05-17"
  },
  {
    'id': 1,
    'feedbackId': 1,
    'user': 'test',
    'upvote': 1,
    'timestamp': "2012-05-17"
  }
];