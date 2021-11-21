# Data Types

## Numeric Data Types

1. int (whole numbers)
2. float (decimal numbers) ((can be scientific exponential notation))

### Arithmetic Operators

| Symbol | Desc               |
| ------ | ------------------ |
| `+`    | addition           |
| `-`    | subtraction        |
| `*`    | multiplication     |
| `/`    | division (float)   |
| `//`   | division (int)     |
| `**`   | exponentiation     |
| `%`    | division remainder |

## Strings

Text can be represented with single or double quotes.

- Use the `\` to escape characters within strings
- Multi-line strings can be represented with `'''`
- Prefix strings with an `r` (ex: `r'rawstring'`) for characters to be read literally

### Regex

To use regular expressions, import the re module (`import re`)

### String Operators

Use the `+` to concatenate strings

    - You can also place strings next to one another for the same effect

Use the `*` to repeat strings a number of times

### Formatted Strings (f-strings)

Use the `f` prefix for strings with template formats (ex: `f'{fname} {lname}')

The `=` following a interpolated expression (still within `{}` placeholder) prints the string and result

Other use cases and symbols:

`:` for specified format, examples:

```py
res = 10 / 3

# restricting number of digits after the decimal point
f'res: {res:.5f}'
'res: 3.33333'

# rounding is applied
f'{res:.3f}'
'3.333'

# exponential notation
f'{32 ** res:.2e}'
'1.04e+05'

padded = 'ben'

# > left padding
f'{padded:=>8}'
'=====ben'
# < right padding
f'{padded:=<8}'
'ben====='
# ^ Even padding
f'{padded:=^8}'
'==ben==='

# default is space character
f'{padded:^10}'
'  ben     '

num = 42

# Binary
f'{num:b}'
'101010'

# Octal
f'{num:o}'
'52'

# Hexadecimal
f'{num:x}'
'2a'

#
f'{num:#x}'
'0x2a'
```

## User Input

Use `input()` to prompt the user for data (will be returned as a string)

## Programmically Determining/Converting Types

Use the `type()` function to return the data type of the value passed in

There are other built-in functions for converting types.

- `int()` to int
- `float()` to float
- `str()` to string
