# Java Functional Interfaces

## Lambdas

Lambdas represent an implementation of a function interface.

A functional interface is an interface that has a single abstract method.

The following is an example of a FunctionalInterface, Lambda, and Method Reference.

```java
public class UsingLambdas {
    public static void testAll() {
        Bno bno = new Bno();
        Ano ano = Bno::printer; // method reference
        // Ano bno = (b) -> b.printer(); // lambda override for FunctionalInterface's abstract method
        ano.print(bno);
    }
}

class Bno {
    String b = "bno works";

    public void printer() {
        System.out.println(b);
    }
}

@FunctionalInterface
interface Ano {
    public abstract void print(Bno b);
}
```
