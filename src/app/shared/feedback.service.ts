import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Feedback, FeedbackRating } from './models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private firebaseDB: AngularFireDatabase) { }

  getFeedback() {
    return this.firebaseDB.list('/feedback').snapshotChanges();
  }

  getFeedbackById(feedbackId) {
    return this.firebaseDB.object('/feedback/' + feedbackId).snapshotChanges();
  }

  getFeedbackRatings(feedbackId) {
    return this.firebaseDB.list('/upvotes', ref => ref.orderByChild('feedbackId').equalTo(feedbackId)).snapshotChanges();
  }

  addFeedback(title, issue, suggestion) {
    const newFeedback = new Feedback(title, issue, suggestion, new Date().toString());
    this.firebaseDB.list('/feedback/').push(newFeedback);
  }

  addUpVote(feedbackId, user) {
    const newRating = new FeedbackRating(feedbackId, user, 1, new Date().toString());
    this.firebaseDB.list('/upvotes/').push(newRating);
  }

  deleteUpVote(ratingId) {
    this.firebaseDB.list('/upvotes/' + ratingId).remove();
  }
}