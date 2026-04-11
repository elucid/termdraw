# Changelog

## v0.3.0

Initial scoped release of `@termdraw/opentui`.

### Highlights

- publishes the embeddable OpenTUI surface separately from the standalone app package
- exports `TermDrawApp`, `TermDrawEditor`, and `TermDraw` for host applications
- keeps the retained-object editor, selection model, export helpers, and renderables used by termDRAW

## v0.2.0

Adds a dedicated select tool for selection-first editing workflows.

### Highlights

- new Select tool in the right-side palette
- click-drag marquee selection for multiple objects
- moving, deleting, and recoloring now work across multi-selection
- selected groups move together while keeping single-object resize and endpoint handles
- updated full-app layout sizing and test coverage for the new selection flow

## v0.1.0

Initial public release of termDRAW!.

### Highlights

- object-based terminal drawing with retained boxes, lines, paint strokes, and text
- direct click-to-select, move, resize, and edit interactions without a separate select mode
- frame-style boxes with parenting, child movement, and resize-aware transforms
- right-side tool palette with box styles and color picker
- built-in startup splash, footer help, undo/redo, and export to plain text or fenced Markdown
- embeddable OpenTUI React components:
  - `TermDrawApp` for the full chrome
  - `TermDrawEditor` for the bare editor surface
