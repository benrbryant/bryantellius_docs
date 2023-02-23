abstract class Note {}

class RichNote extends Note {}

class OutlineNote extends Note {}

abstract class NoteFactory {
  title: string;

  public abstract createNote(): Note;
}

class RichNoteFactory extends NoteFactory {
  public createNote(): Note {
    return new RichNote();
  }
}

class OutlineNoteFactory extends NoteFactory {
  public createNote(): Note {
    return new OutlineNote();
  }
}

let richNoteFactory: RichNoteFactory = new RichNoteFactory();
let richNote1: RichNote = richNoteFactory.createNote();

let outlineNoteFactory: OutlineNoteFactory = new OutlineNoteFactory();
let outlineNote1: OutlineNote = outlineNoteFactory.createNote();

console.log(richNote1);
console.log(outlineNote1);
