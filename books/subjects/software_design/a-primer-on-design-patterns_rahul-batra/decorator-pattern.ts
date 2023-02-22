interface IFindDialog {
  find: (toFind: string) => void;
  displayHelp: () => void;
}

class SimpleFind implements IFindDialog {
  public find(toFind: string) {
    // ...
    console.log(`Finding: ${toFind}...`);
  }

  public displayHelp() {
    // ...
    console.log("Search current file for text.");
  }
}

// decorator outline, so to speak

abstract class FindDecorator implements IFindDialog {
  protected enhancedFind: IFindDialog;

  constructor(findDialog: IFindDialog) {
    this.enhancedFind = findDialog;
  }

  public abstract find(toFind: string): void;

  public displayHelp() {
    this.enhancedFind.displayHelp();
  }
}

// concrete decorator

class FindWithRegex extends FindDecorator {
  constructor(findDialog: IFindDialog) {
    super(findDialog);
  }

  public find(toFind: string) {
    // ...
    console.log(`Finding with regex: ${toFind}...`);
  }

  public displayHelp(): void {
    super.displayHelp();
    console.log("[with TS compatible regular expressions]");
  }
}

// concrete decorator

class FindInDirectory extends FindDecorator {
  constructor(findDialog: IFindDialog) {
    super(findDialog);
  }

  public find(toFind: string) {
    console.log(`Finding in directory: ${toFind}`);
  }

  public displayHelp(): void {
    super.displayHelp();
    console.log(`[will search each file in the current working directory]`);
  }
}

// testing decorators

// singly applied decorator
let findDialogWithRegex: IFindDialog = new FindWithRegex(new SimpleFind());
findDialogWithRegex.displayHelp();
findDialogWithRegex.find("Hello World!");

// multiple applied decorators

let findDialogInDirectoryWithRegex: IFindDialog = new FindInDirectory(new FindWithRegex(new SimpleFind()));
findDialogInDirectoryWithRegex.displayHelp();
findDialogInDirectoryWithRegex.find("Hello World!");
