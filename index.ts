export * from "./packages/opentui/index.ts";

if (import.meta.main) {
  await import("./packages/app/src/cli.tsx");
}
