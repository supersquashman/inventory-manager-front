import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { AlcoholManagementComponent } from './alcohol-management/alcohol-management.component';

import { HttpClientModule }    from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavigatorComponent } from './navigator/navigator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsModule} from 'ngx-bootstrap/tabs'
import {AccordionModule} from 'ngx-bootstrap/accordion'
import { BackendServiceService } from './backend-service.service';
import { AddBookModalComponent } from './book-management/add-book-modal/add-book-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BookManagementComponent,
    AlcoholManagementComponent,
    NavigatorComponent,
    AddBookModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule,
    AccordionModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: NavigatorComponent},
      {path: 'books', component: BookManagementComponent},
      {path: 'alcohol', component: AlcoholManagementComponent}
    ]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
