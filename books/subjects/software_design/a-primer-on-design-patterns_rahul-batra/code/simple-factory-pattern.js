var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());
var SimpleNote = /** @class */ (function (_super) {
    __extends(SimpleNote, _super);
    function SimpleNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SimpleNote;
}(Note));
var RichNote = /** @class */ (function (_super) {
    __extends(RichNote, _super);
    function RichNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RichNote;
}(Note));
var OutlineNote = /** @class */ (function (_super) {
    __extends(OutlineNote, _super);
    function OutlineNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutlineNote;
}(Note));
var NoteFactory = /** @class */ (function () {
    function NoteFactory(type) {
        this.type = type;
    }
    NoteFactory.prototype.createNote = function () {
        if (this.type == "Rich") {
            return new RichNote();
        }
        else if (this.type == "Outline") {
            return new OutlineNote();
        }
        else {
            return new SimpleNote();
        }
    };
    return NoteFactory;
}());
var richNoteFactory = new NoteFactory("Rich");
var richNote1 = richNoteFactory.createNote();
var outlineNoteFactory = new NoteFactory("Outline");
var outlineNote1 = outlineNoteFactory.createNote();
console.log(richNote1);
console.log(outlineNote1);
