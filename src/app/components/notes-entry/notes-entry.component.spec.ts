import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEntryComponent } from './notes-entry.component';

describe('NotesEntryComponent', () => {
  let component: NotesEntryComponent;
  let fixture: ComponentFixture<NotesEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
