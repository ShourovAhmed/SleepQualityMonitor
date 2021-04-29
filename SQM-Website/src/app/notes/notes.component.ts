import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  lijst: resultaat[] = [];

  note = "";
  date = "27/04/2021";
  constructor() { }

  ngOnInit(): void {
  }

  AddNote(note: string, date : string){
    console.log("AddNote" + note + date)
    this.note = note;

    this.lijst.push(new resultaat(note,this.date))
   
    console.log(this.lijst)    
  }

}

class resultaat {
  note: string;
  date: string;
  constructor(note: string , date: string) {
    console.log("constructor" + note + date)
    this.note = note;
    this.date = date;
  }
}
