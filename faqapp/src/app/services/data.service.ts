import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your favoriate tv series?',
        answer: 'favoriate tv series: Babylon 5',
        hide: true
      },
      {
        text: 'What is your favorite character?',
        answer: 'favorite character: Ivanova',
        hide: true
      },
      {
        text: 'What is your favorite alien races',
        answer: 'Favorite alien race: Shadows, Borgs',
        hide: true
      },
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }

}
