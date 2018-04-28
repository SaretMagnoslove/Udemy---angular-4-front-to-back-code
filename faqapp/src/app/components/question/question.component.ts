import { Question } from './../../models/Question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('question') question: Question;

  constructor() { }

  ngOnInit() {
  }

}
