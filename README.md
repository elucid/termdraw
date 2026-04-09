# termDRAW!

termDRAW! is an OpenTUI + Bun + TypeScript clone of Ben Vinegar's Pi `/draw` extension.

It opens a full-screen ASCII drawing canvas with mouse support, object-based drawing, undo/redo, and markdown-friendly export.

## Features

- `line` mode for straight-line drawing
- `box` mode with auto-connected box drawing glyphs
- `text` mode for typing directly onto the canvas
- drawn lines, boxes, and text persist as clickable movable objects
- a right-side tool palette provides clickable `Box`, `Line`, and `Text` tools
- boxes expose draggable corner handles for resizing when selected
- lines expose draggable endpoint handles when selected
- selected text shows a virtual bounding box for easier interaction
- click objects directly to move/edit them without switching tools
- shortcut help and live status sit in a bottom footer
- right-drag to delete objects under the pointer
- undo / redo / clear
- save to stdout or a file

## Requirements

- [Bun](https://bun.sh)
- a terminal with mouse support

## Install

```bash
bun install
```

## Run

```bash
bun run index.ts
```

Or with scripts:

```bash
bun run start
```

## Controls

- click the right-side tool palette, or use `Ctrl+T` / `Tab`: cycle `box` / `line` / `text`
- `Ctrl+Z` / `Ctrl+Y`: undo / redo
- `Ctrl+X`: clear
- `[` / `]`: cycle brush in line mode
- `Arrow keys`: move cursor, or nudge the selected object when one is selected
- `Space`: stamp brush in line mode, or insert a space in text mode
- `Delete`: remove the selected object
- `Enter` or `Ctrl+S`: save
- `Esc`: deselect
- `Ctrl+Q` or `Ctrl+C`: quit without saving
- mouse left-drag on a selected box corner: resize the box
- mouse left-drag on a selected line endpoint: adjust that endpoint
- mouse left-drag on an existing object: move it
- mouse left-click on text in text mode: edit it
- selected text can also be dragged from its virtual bounding box
- mouse left-drag on empty space in draw modes: create a new object
- mouse right-drag: delete objects under the pointer
- mouse wheel: cycle brush in line mode

## Output

Plain text to stdout:

```bash
bun run index.ts > drawing.txt
```

Markdown fenced block:

```bash
bun run index.ts -- --fenced > drawing.md
```

Write directly to a file:

```bash
bun run index.ts -- --output diagram.txt
```

## Development

```bash
bun run format
bun run lint
bun test
bun run typecheck
```

## Git hooks

A pre-commit hook is installed via `simple-git-hooks` during `bun install`.

It runs on staged files with:

- `oxfmt --write`
- `oxlint --fix --quiet`
