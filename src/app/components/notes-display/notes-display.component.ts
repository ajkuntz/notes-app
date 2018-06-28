import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.css']
})
export class NotesDisplayComponent implements OnInit {
  public notes: string[] = ['Test note 1', 'Test note 2'];

  constructor() { }

  ngOnInit() {
  }

}
