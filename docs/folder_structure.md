# FOLDER STRUCTURE

chess-project/
│
├── chess_game/
│   ├── frontend/      # React UI (board, pieces, UI controls)
│   ├── backend/       # Game server (optional at first)
│
├── chess_engine/      # Pure chess logic + AI
│
├── shared/            # (optional later)
│   └── types/         # shared constants/types
│
├── README.md

# WHAT EACH FOLDER DOES

## chess_game/fronted (React)
    
- Contains:
    - Chess board UI
    - Dragging pieces
    - Move animations
    - Game controls
    - Plaayer interaction
- Stack:
    - React
    - JavaScript
    - Vite
    - CSS/ Tailwind

## chess_game/backend 

- Multiplayer
- Game saving
- Matchmaking
- Online play

- Stack:
    - Node.js
    - Express
    - WebSockets

## chess_engine

- Pure JavaScript
- No UI
- Just Logic

- Move generation
- Board evaluation
- Minimax
- Alpha-beta pruning
- AI