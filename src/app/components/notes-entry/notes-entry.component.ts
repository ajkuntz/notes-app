import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-entry',
  templateUrl: './notes-entry.component.html',
  styleUrls: ['./notes-entry.component.css']
})
export class NotesEntryComponent implements OnInit {
  public note: string;

  public enteredNote: string;

  constructor() { }

  ngOnInit() {
  }

  public addNote() {
    this.enteredNote = this.note;
    this.note = '';
  }
}
