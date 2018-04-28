import { Question } from './../models/Question';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
     /*
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
    */
  }

    // Get Questions from LS
    getQuestions() {
      if(localStorage.getItem('questions') === null){
        this.questions = [];
      } else {
        this.questions = JSON.parse(localStorage.getItem('questions'));
      }
      return this.questions;
    }

    // Add Question to LS
    addQuestion(question: Question) {
      this.questions.unshift(question);

      // Init local var
      let questions;
    if (localStorage.getItem('questions') === null) {
        questions = [];
        // Push new question
        questions.unshift(question);
        // Set new array to LS
        localStorage.setItem('questions', JSON.stringify(questions));
      } else {
        questions = JSON.parse(localStorage.getItem('questions'));
        // Add new question
        questions.unshift(question);
        // Re set LS
        localStorage.setItem('questions', JSON.stringify(questions));
      }
    }

    // Remove Question from LS
    removeQuestion(question: Question) {
      for (let i = 0; i < this.questions.length; i++) {
        if (question === this.questions[i]) {
          this.questions.splice(i, 1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
      }
    }
  }

