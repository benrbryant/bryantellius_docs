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
var SimpleFind = /** @class */ (function () {
    function SimpleFind() {
    }
    SimpleFind.prototype.find = function (toFind) {
        // ...
        console.log("Finding: ".concat(toFind, "..."));
    };
    SimpleFind.prototype.displayHelp = function () {
        // ...
        console.log("Search current file for text.");
    };
    return SimpleFind;
}());
// decorator outline, so to speak
var FindDecorator = /** @class */ (function () {
    function FindDecorator(findDialog) {
        this.enhancedFind = findDialog;
    }
    FindDecorator.prototype.displayHelp = function () {
        this.enhancedFind.displayHelp();
    };
    return FindDecorator;
}());
// concrete decorator
var FindWithRegex = /** @class */ (function (_super) {
    __extends(FindWithRegex, _super);
    function FindWithRegex(findDialog) {
        return _super.call(this, findDialog) || this;
    }
    FindWithRegex.prototype.find = function (toFind) {
        // ...
        console.log("Finding with regex: ".concat(toFind, "..."));
    };
    FindWithRegex.prototype.displayHelp = function () {
        _super.prototype.displayHelp.call(this);
        console.log("[with TS compatible regular expressions]");
    };
    return FindWithRegex;
}(FindDecorator));
// concrete decorator
var FindInDirectory = /** @class */ (function (_super) {
    __extends(FindInDirectory, _super);
    function FindInDirectory(findDialog) {
        return _super.call(this, findDialog) || this;
    }
    FindInDirectory.prototype.find = function (toFind) {
        console.log("Finding in directory: ".concat(toFind));
    };
    FindInDirectory.prototype.displayHelp = function () {
        _super.prototype.displayHelp.call(this);
        console.log("[will search each file in the current working directory]");
    };
    return FindInDirectory;
}(FindDecorator));
// testing decorators
// singly applied decorator
var findDialogWithRegex = new FindWithRegex(new SimpleFind());
findDialogWithRegex.displayHelp();
findDialogWithRegex.find("Hello World!");
// multiple applied decorators
var findDialogInDirectoryWithRegex = new FindInDirectory(new FindWithRegex(new SimpleFind()));
findDialogInDirectoryWithRegex.displayHelp();
findDialogInDirectoryWithRegex.find("Hello World!");
