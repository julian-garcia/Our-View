export class Feedback {
  constructor(
    public title: string,
    public issue: string,
    public suggestion: string,
    public timestamp: string
  ) { }
}

export class FeedbackRating {
  constructor(
    public feedbackId: string,
    public user: string,
    public upvote: number,
    public timestamp: string
  ) { }
}