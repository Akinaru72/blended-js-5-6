// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість PRIORITY,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), (text, newPriority)updatePriority

class Notes {
  static PRIORITY = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  constructor(items) {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter((note) => text !== note.text);
  }

  updatePriority(text, newPriority) {
    const note = this.items.find((note) => note.text === text);

    if (note) {
      note.priority = newPriority;
    }
  }
}

const note1 = new Notes();

note1.addNote({ text: "Note1", priority: Notes.PRIORITY.LOW });
note1.addNote({ text: "Note2", priority: Notes.PRIORITY.LOW });
note1.addNote({ text: "Note3", priority: Notes.PRIORITY.LOW });
note1.removeNote("Note1");
note1.updatePriority("Note2", Notes.PRIORITY.HIGH);
console.log(note1.items);
