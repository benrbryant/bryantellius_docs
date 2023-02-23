abstract class Note {}

class SimpleNote extends Note {}

class RichNote extends Note {}

class OutlineNote extends Note {}

class NoteFactory {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  public createNote(): Note {
    if (this.type == "Rich") {
      return new RichNote();
    } else if (this.type == "Outline") {
      return new OutlineNote();
    } else {
      return new SimpleNote();
    }
  }
}

let richNoteFactory: NoteFactory = new NoteFactory("Rich");
let richNote1: RichNote = richNoteFactory.createNote();

let outlineNoteFactory: NoteFactory = new NoteFactory("Outline");
let outlineNote1: OutlineNote = outlineNoteFactory.createNote();

console.log(richNote1);
console.log(outlineNote1);
