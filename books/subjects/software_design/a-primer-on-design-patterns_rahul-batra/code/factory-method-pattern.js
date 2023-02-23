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
    function NoteFactory() {
    }
    return NoteFactory;
}());
var RichNoteFactory = /** @class */ (function (_super) {
    __extends(RichNoteFactory, _super);
    function RichNoteFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RichNoteFactory.prototype.createNote = function () {
        return new RichNote();
    };
    return RichNoteFactory;
}(NoteFactory));
var OutlineNoteFactory = /** @class */ (function (_super) {
    __extends(OutlineNoteFactory, _super);
    function OutlineNoteFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlineNoteFactory.prototype.createNote = function () {
        return new OutlineNote();
    };
    return OutlineNoteFactory;
}(NoteFactory));
var richNoteFactory = new RichNoteFactory();
var richNote1 = richNoteFactory.createNote();
var outlineNoteFactory = new OutlineNoteFactory();
var outlineNote1 = outlineNoteFactory.createNote();
console.log(richNote1);
console.log(outlineNote1);
