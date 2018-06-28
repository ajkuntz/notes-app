import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesEntryComponent } from './components/notes-entry/notes-entry.component';
import { NotesDisplayComponent } from './components/notes-display/notes-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesEntryComponent,
    NotesDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
