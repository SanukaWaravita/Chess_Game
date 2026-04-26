# Board Coordinates

In the chess app, we have two coordinate systems:

1. JavaScript array coordinates
2. Chess square names

JavaScript sees the board using indexes:

```text
rowIndex, columnIndex
```

For example:

```text
rowIndex = 0
columnIndex = 0
```

That means the top-left square of the array.

But chess players do not say:

```text
row 0, column 0
```

They say:

```text
a8
```

So we convert array coordinates into chess coordinates.

## The Conversion Code

```javascript
const file = String.fromCharCode(97 + columnIndex)
const rank = 8 - rowIndex
const squareName = `${file}${rank}`
```

## File

The file is the letter part of the square name:

```text
a b c d e f g h
```

This line calculates it:

```javascript
const file = String.fromCharCode(97 + columnIndex)
```

In character codes:

```text
a = 97
b = 98
c = 99
d = 100
e = 101
f = 102
g = 103
h = 104
```

So:

```javascript
String.fromCharCode(97 + 0)
```

gives:

```text
a
```

And:

```javascript
String.fromCharCode(97 + 4)
```

gives:

```text
e
```

## Rank

The rank is the number part of the square name:

```text
8 7 6 5 4 3 2 1
```

This line calculates it:

```javascript
const rank = 8 - rowIndex
```

Why?

Because the array starts at the top, but chess ranks count from White's side:

```text
rowIndex 0 -> rank 8
rowIndex 1 -> rank 7
rowIndex 2 -> rank 6
rowIndex 3 -> rank 5
rowIndex 4 -> rank 4
rowIndex 5 -> rank 3
rowIndex 6 -> rank 2
rowIndex 7 -> rank 1
```

So:

```javascript
8 - 0
```

gives:

```text
8
```

And:

```javascript
8 - 7
```

gives:

```text
1
```

## Square Name

This line combines the file and rank:

```javascript
const squareName = `${file}${rank}`
```

If:

```javascript
file = 'e'
rank = 1
```

then:

```javascript
squareName = 'e1'
```

## Example: White King

The white king starts at:

```text
rowIndex = 7
columnIndex = 4
```

Calculate the file:

```javascript
String.fromCharCode(97 + 4)
```

That gives:

```text
e
```

Calculate the rank:

```javascript
8 - 7
```

That gives:

```text
1
```

So the square name is:

```text
e1
```

That is correct, because the white king starts on `e1`.

## Example: Black Rook

The top-left square is:

```text
rowIndex = 0
columnIndex = 0
```

Calculate the file:

```javascript
String.fromCharCode(97 + 0)
```

That gives:

```text
a
```

Calculate the rank:

```javascript
8 - 0
```

That gives:

```text
8
```

So the square name is:

```text
a8
```

That is correct, because Black's queenside rook starts on `a8`.

## Why This Matters

The computer likes this:

```text
row 6, column 4
```

But humans understand this better:

```text
e2
```

Later, when we move pieces, this lets us describe moves like:

```text
e2 to e4
```

instead of:

```text
row 6 column 4 to row 4 column 4
```

The core idea:

```text
rowIndex, columnIndex -> for the computer
squareName -> for chess meaning
```
