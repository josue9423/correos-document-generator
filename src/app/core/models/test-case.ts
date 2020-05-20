import {TestStep} from './test-step'
export interface TestCase {
    testNumber:number
    testName:String,
    testDescription:String,
    testPrecondition:String,
    testStatus:String,
    testSteps:TestStep[]
}
