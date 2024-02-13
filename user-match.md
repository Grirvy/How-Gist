# Understanding Regex

Regular expressions (regex) are powerful tools for pattern matching in text. This tutorial should help give an understanding of various components of regex.

## Summary
In this tutorial, we'll explore a regex pattern for validating usernames.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components
```regex
/^[a-zA-Z0-9_-]{4,9}$/
```

### Anchors
Anchors are used to assert positions in the text. In our regex pattern, ^ asserts the start of the string, and $ asserts the end.

### Quantifiers
Quantifiers specify how many times a character or group can appear. {3,16} ensures the username length is between 3 and 16 characters.

### OR Operator
There is no OR operators

### Character Classes
Character classes [a-zA-Z0-9_-] define the set of characters allowed in the username. This includes letters (both upper and lower case), digits, underscores, and hyphens.

### Flags
There are no flags.

### Grouping and Capturing
There is none.

### Bracket Expressions
Bracket expressions are used to define character classes.

### Greedy and Lazy Match
There are none.

### Boundaries
There are none.

### Back-references
There are none.

### Look-ahead and Look-behind
There are none.

## Author
This tutorial is written by [Grirvy](https://github.com/Grirvy), a software developer that makes use of regex and text processing.
