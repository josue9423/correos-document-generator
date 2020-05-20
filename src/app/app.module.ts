import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewTestDocumentComponent } from './pages/new-test-document/new-test-document.component';
import { ListTestDocumentComponent } from './pages/list-test-document/list-test-document.component';
import { TestCaseFormComponent } from './components/test-case-form/test-case-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/newTest', pathMatch: 'full'},
  {path: 'listTest', component: ListTestDocumentComponent},
  {path: 'newTest', component: NewTestDocumentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewTestDocumentComponent,
    ListTestDocumentComponent,
    TestCaseFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
