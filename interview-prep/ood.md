# Object-Oriented Design Notes

## Approach

1. Handle Ambiguity
2. Define the Core Objects
3. Analyze Relationships
4. Investigate Actions

## Design Patterns

### Singleton Class

A Singleton class ensures that only one (usually _globally accessible_) instance is created from a class.

```ts
class Restaurant {
  private static _instance: Restaurant = null;
  public static getInstance() {
    if (this._instance == null) {
      return new Restaurant();
    }
    return this._instance;
  }
}
```

### Factory Method

A Factory method provides an interface that returns an instance of a subclass based on a given name or type.

```ts
class CardGame {
  static createCardGame(type) {
    if (type == "Phase10") {
      return new PokerGame();
    } else if (type == "Uno") {
      return new UnoGame();
    }
  }
}
```

### OOP Study Questions

1. Design the data structures for a generic deck of cards. Explain how you
   would subclass the data structures to implement blackjack.
2. Imagine you have a call center with three levels of employees: respondent
   manager, and director. An incoming telephone call must be first allocated
   to a respondent who is free. If the respondent can't handle the call, he or
   she must escalate the call to a manager. If the manager is not free or not
   able to handle it, then the call should be escalated to a director. Design
   the classes and data structures for this problem. Implement a method
   dispatchCall() which assigns a call to the first available employee.
3. Design a musical jukebox using object-oriented principles.
4. Design a parking lot using object-oriented principles.
5. Design the data structures for an online book reader system.
6. Implement a jigsaw puzzle. Design the data structures and explain an
   algorithm to solve the puzzle. You can assume that you have a fitsWith
   method which, when passed two puzzle pieces, returns true if the two
   pieces belong together.
7. Explain how you would design a chat server. In particular, provide details
   about the various backend components, classes, and methods. What
   would be the hardest problems to solve?
8. Othello is played as follows: Each Othello piece is white on one side and
   black on the other. When a piece is surrounded by its opponents on both
   the left and right sides, or both the top and bottom, it is said to be captured
   and its color is flipped. On your turn, you must capture at least one of your
   opponent's pieces. The game ends when either user has no more valid
   moves. The win is assigned to the person with the most pieces. Implement
   the object-oriented design for Othello.
9. Explain the data structures and algorithms that you would use to design
   an in-memory file system. Illustrate with an example in code where possible.
10. Design and implement a hash table which uses chaining (linked lists) to handle collisions.
