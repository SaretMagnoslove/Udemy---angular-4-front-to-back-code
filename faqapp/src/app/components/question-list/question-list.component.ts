import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: object[];

  constructor() {
    this.questions = [
      {
        text: 'What is your favoraite television show?',
        answer: 'Babylon 5'
      },
      {
        text: 'What is your favoraite character?',
        answer: 'Ivanova'
      },
      {
        text: 'What is your favoraite alien race?',
        answer: 'Shadows'
      },
    ];
   }

  ngOnInit() {
  }

}
