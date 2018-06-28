import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private initialNotes: string[] = [
    'AJ is awesome',
    'He gives great demos/presentations',
    'Hide anything breakable from him though',
    'Man, look at him go!'
  ];

  constructor() { }

  public getNotes(): Observable<string[]> {
    return of(this.initialNotes);
  }
}
