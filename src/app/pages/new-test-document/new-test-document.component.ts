import { Component, OnInit, ViewChild, AfterViewInit, ɵConsole } from "@angular/core";
import { TestDocument } from "../../core/models/test-document";
import { TestCase } from "../../core/models/test-case";
import { TestStep } from "../../core/models/test-step";
import { TestCaseFormComponent } from "../../components/test-case-form/test-case-form.component";
import * as jQuery from "jquery";

@Component({
  selector: "app-new-test-document",
  templateUrl: "./new-test-document.component.html",
  styleUrls: ["./new-test-document.component.css"],
})
export class NewTestDocumentComponent implements OnInit {
  @ViewChild(TestCaseFormComponent) testCaseFormComponent;
  isShowModalTestCase = false;

  title: string = "Crear nuevo documento de pruebas";
  testCaseModalButton: string = "Agregar";

  testDocument: TestDocument = {
    application: "",
    associatedDocument: "",
    testCases: [],
  };

  testCase: TestCase;
  testStep: TestStep;

  constructor() {}

  ngOnInit(): void {}

  public addTestCase() {
    if (this.testCaseModalButton == "Agregar") {
      this.testCase = {
        testNumber: this.testDocument.testCases.length,
        testName: this.testCaseFormComponent.testName,
        testDescription: this.testCaseFormComponent.testDescription,
        testPrecondition: this.testCaseFormComponent.testPrecondition,
        testStatus: this.testCaseFormComponent.testStatus,
        testSteps: [],
      };
      this.testDocument.testCases.push(this.testCase);
    } else {
      this.testCase.testName = this.testCaseFormComponent.testName
      this.testCase.testDescription = this.testCaseFormComponent.testDescription
      this.testCase.testPrecondition = this.testCaseFormComponent.testPrecondition
      this.testCase.testStatus = this.testCaseFormComponent.testStatus

      var index = this.testDocument.testCases.indexOf(this.testCase)
      this.testDocument.testCases.splice(index,1)
      this.testDocument.testCases.splice(index,0,this.testCase)
    }

    this.clearTestCaseForm();
    jQuery("[data-dismiss=modal]").trigger({ type: "click" });
  }

  public clearTestCaseForm() {
    this.testCaseModalButton = "Agregar";
    this.testCaseFormComponent.testNumber = null;
    this.testCaseFormComponent.testName = null;
    this.testCaseFormComponent.testDescription = null;
    this.testCaseFormComponent.testPrecondition = null;
    this.testCaseFormComponent.testStatus = null;
  }

  public deleteTestCase(testCase: TestCase) {
    // ELIMINAMOS EL OBJETO DENTRO DEL ARRAY
    var index = this.testDocument.testCases.indexOf(testCase)
    index !== -1 && this.testDocument.testCases.splice(index, 1)
    // AJUSTAMOS EL CAMPO TESTNUMBER
    this.testDocument.testCases.forEach((element, index) => {
      element.testNumber = index
    });
  }

  public editTestCase(testCase: TestCase) {

    this.testCaseModalButton = "Editar";
    this.testCase = testCase
    this.testCaseFormComponent.testNumber = testCase.testNumber
    this.testCaseFormComponent.testName = testCase.testName
    this.testCaseFormComponent.testDescription = testCase.testDescription
    this.testCaseFormComponent.testPrecondition = testCase.testPrecondition
    this.testCaseFormComponent.testStatus = testCase.testStatus

  }
}
