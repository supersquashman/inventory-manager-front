import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { AlcoholManagementComponent } from './alcohol-management/alcohol-management.component';
import { RouterModule } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsModule} from 'ngx-bootstrap/tabs'
import {AccordionModule} from 'ngx-bootstrap/accordion'

@NgModule({
  declarations: [
    AppComponent,
    BookManagementComponent,
    AlcoholManagementComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TabsModule,
    AccordionModule,
    RouterModule.forRoot([
      {path: '', component: NavigatorComponent},
      {path: 'books', component: BookManagementComponent},
      {path: "alcohol", component: AlcoholManagementComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
