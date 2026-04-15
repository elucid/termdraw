import { expect, test } from "bun:test";
import { createPiTuiOpenTuiSurface, createPiTuiSurface } from "opentui-island/pi-tui";

const COMPAT_ISLAND_MODULE_URL = new URL("../islands/compat-aliases.island.tsx", import.meta.url);

function waitForFrameText(
  surface: { render: (width: number) => string[] },
  width: number,
  needle: string,
) {
  return new Promise<void>((resolve, reject) => {
    const deadline = Date.now() + 2_000;

    const tick = () => {
      const frame = surface.render(width).join("\n");
      if (frame.includes(needle)) {
        resolve();
        return;
      }

      if (Date.now() >= deadline) {
        reject(new Error(`Timed out waiting for frame text: ${needle}`));
        return;
      }

      setTimeout(tick, 25);
    };

    tick();
  });
}

test("opentui-island pi-tui canonical and legacy surface factories both work", async () => {
  const requestRender = () => {};

  const canonicalSurface = await createPiTuiSurface({
    height: 3,
    initialWidth: 24,
    requestRender,
    island: {
      module: COMPAT_ISLAND_MODULE_URL,
      props: { mode: "canonical" },
    },
  });

  try {
    canonicalSurface.focused = true;
    await canonicalSurface.sync(24);
    await canonicalSurface.waitUntilReady();
    await waitForFrameText(canonicalSurface, 24, "compat:canonical");
    expect(canonicalSurface.render(24).join("\n")).toContain("compat:canonical");
  } finally {
    await canonicalSurface.destroy();
  }

  const legacySurface = await createPiTuiOpenTuiSurface({
    height: 3,
    initialWidth: 24,
    requestRender,
    island: {
      module: COMPAT_ISLAND_MODULE_URL,
      props: { mode: "legacy" },
    },
  });

  try {
    legacySurface.focused = true;
    await legacySurface.sync(24);
    await legacySurface.waitUntilReady();
    await waitForFrameText(legacySurface, 24, "compat:legacy");
    expect(legacySurface.render(24).join("\n")).toContain("compat:legacy");
  } finally {
    await legacySurface.destroy();
  }
});
