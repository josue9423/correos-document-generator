import { Component, OnInit} from '@angular/core';
import { TestCase } from '../../core/models/test-case'

@Component({
  selector: 'app-test-case-form',
  templateUrl: './test-case-form.component.html',
  styleUrls: ['./test-case-form.component.css']
})
export class TestCaseFormComponent implements OnInit {

  testNumber: number
  testName : string
  testDescription : string
  testPrecondition : string
  testStatus : string

  constructor() { }

  ngOnInit(): void {
  }

}
