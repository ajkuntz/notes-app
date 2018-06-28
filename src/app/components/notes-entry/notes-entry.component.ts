import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-entry',
  templateUrl: './notes-entry.component.html',
  styleUrls: ['./notes-entry.component.css']
})
export class NotesEntryComponent implements OnInit {
  @Output() updateNote: EventEmitter<string> = new EventEmitter();

  public note: string;

  constructor() { }

  ngOnInit() {
  }

  public addNote() {
    this.updateNote.emit(this.note);
    this.note = '';
  }
}
