# @termdraw/opentui

`@termdraw/opentui` provides the embeddable OpenTUI components and renderables behind termDRAW for terminal apps that want an in-process drawing surface.

## What it provides

- `TermDrawApp` for the full chrome with header, palette, footer, and splash
- `TermDrawEditor` for the bare editor surface
- `TermDraw` as an alias for `TermDrawApp`
- renderables and helpers for saved output and CLI help text

## Install

```bash
npm install @termdraw/opentui @opentui/core @opentui/react react
```

## Quick start

```tsx
import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { TermDrawApp } from "@termdraw/opentui";

const renderer = await createCliRenderer({
  useMouse: true,
  enableMouseMovement: true,
  autoFocus: true,
  screenMode: "alternate-screen",
});

createRoot(renderer).render(
  <TermDrawApp
    width="100%"
    height="100%"
    autoFocus
    onSave={(art) => {
      console.log(art);
    }}
    onCancel={() => {
      renderer.destroy();
    }}
  />,
);
```

## Also exported

- `TermDrawAppRenderable`
- `TermDrawEditorRenderable`
- `TermDrawRenderable`
- `formatSavedOutput`
- `buildHelpText`
- `registerTermDrawComponent`
- `registerTermDrawComponents`

## Standalone app

If you want the packaged terminal app instead of the embeddable OpenTUI surface:

```bash
npm install --global @termdraw/app
```

Then run:

```bash
termdraw
```

## Contributing

Contributions are welcome.

Before opening a PR:

- keep the change focused
- run `bun run check`
- add or update tests when editor behavior changes
- open an issue first for larger UX or API changes

## Security

Please report security issues privately through GitHub Security Advisories:

- <https://github.com/benvinegar/termdraw/security/advisories/new>

## License

MIT. See [LICENSE](LICENSE).
