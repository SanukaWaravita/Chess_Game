# Stage 1: Chess board UI

- Goal: show an 8×8 board.

- Concepts:
    - Board coordinates: files a-h, ranks 1-8
    - 2D array board representation
    - Light/dark square coloring
    - Render pieces on squares

- Example board data:

```javascript
[
  ["r","n","b","q","k","b","n","r"],
  ["p","p","p","p","p","p","p","p"],
  [null,null,null,null,null,null,null,null],
  ...
]
```


# Stage 2: Moving pieces manually

- Goal: click a piece, click a square, move it.

- Concepts:
    - Selected square state
    - Move piece from source to target
    - Remove captured piece
    - Prevent moving empty squares
    - Switch turns: white → black → white

- At this stage, moves can be illegal. Just make movement work.


# Stage 3: Legal piece movement

- Goal: each piece moves correctly.

- Implement one by one:
    - Pawn
    - Rook
    - Bishop
    - Queen
    - Knight
    - King

- Concepts:
    - Movement rules
    - Board boundaries
    - Friendly piece blocking
    - Enemy piece capture
    - Sliding pieces: rook, bishop, queen


# Stage 4: Special chess rules

- Goal: support real chess.

- Add:
    - Pawn first double move
    - Pawn promotion
    - Castling
    - En passant
    - Check detection
    - Checkmate
    - Stalemate
    - Draw by insufficient material
    - Threefold repetition
    - Fifty-move rule

- Do these after normal movement works.


# Stage 5: Game state system

- Goal: make the game reliable.

- Concepts:
    - Current board
    - Current turn
    - Move history
    - Captured pieces
    - Castling rights
    - En passant target
    - Halfmove clock
    - Fullmove number

- This is where you start moving toward proper chess notation like FEN.


# Stage 6: Move notation

- Goal: record and load games.

- Learn:
    - FEN: describes a board position
    - PGN: describes a full game
    - Algebraic notation: Nf3, exd5, O-O

- This helps later when building an engine.