import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public notes: string[] = [];

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.getNotes().subscribe(data => { this.notes = data; })
  }

  noteUpdated(note: string) {
    this.notes.push(note);
  }
}
