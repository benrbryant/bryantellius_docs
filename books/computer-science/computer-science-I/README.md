# Computer Science I

By Dr. Chris Bourke

[Book Source](https://bitbucket.org/chrisbourke/computersciencei/raw/5a04789d5f54b9f8df9f27e7087e4b33b237275f/versions-PDF/ComputerScienceOne_v1.3.5.pdf)

_Problem Solving_ resolves around

1. Design
2. Implementation
3. Testing
4. Refinement

There are two general design strategies: _top down_ or _bottom up_ designs.

**Top down** design takes the problem, and breaks it down into smaller and smaller parts until a solution is found.
**Bottom up** design starts at with designing the smallest pieces and making a interactive, coherent solution.

Values in a program are stored and represented by certain _data types_. The foremost of which are _numeric types_.

Values can be stored and referenced through _variables_. Variables are labelled by _identifiers_, or names, that adhere to general naming conventions (can start with letters, `$`, `_`, etc).

> FUN FACT: Words that have no plural form are _plurale tantum_ while words with no singular form are _singular tantum_. Words with singular and plural forms being the same are _unchanging irregular plurals_.

The _Institute of Electrical and Electronics Engineers (IEEE) 754 Standard_ defines fixed bit ranges for floating point numbers (decimals, or _radix_) that include the sign (for negative numbers), _mantissa_, and exponent.

> FUN FACT: "The first 80 digits of π are 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899 though only 39 digits of π are required to accurately calculate the volume of the known universe to within one atom."

Most languages support single (32 bits) and double (64 bits) precisions since that is what is supported by most hardware.

Some languages support _arbitrary precision_ format for numbers where more memory is allocated dynammically for larger numbers, but this comes at a computational cost depending on the memory used.

Text characters are encoded and assigned numbers to represent their value. The _American Standard Code for Information Interchange_, or ASCII, uses 8 bits (1 byte) to assign decimal numbers to characters. For example, 'A' is 65, 'B' is 66, 'b' is 98, etc. The limitation to ASCII, since it was developed in the 60s, is that it can only represent 256 values with 8 bits.

Today, we use Unicode encoding, most commonly UTF-8, which can represent 1,112,064 total values and is backwards compatible to support ASCII.
