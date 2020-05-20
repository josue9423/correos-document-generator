import {TestCase} from './test-case'

export interface TestDocument {
    application: String,
    associatedDocument: String,
    testCases : TestCase[]
}
