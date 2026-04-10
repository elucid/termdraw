/** @jsxImportSource @opentui/react */

import { useOpenTuiIslandBridge } from "opentui-island";
import { TermDrawApp } from "@benvinegar/termdraw";

type PiTermDrawIslandProps = {
  showStartupLogo?: boolean;
};

export default function PiTermDrawIsland({ showStartupLogo = false }: PiTermDrawIslandProps) {
  const bridge = useOpenTuiIslandBridge();

  return (
    <TermDrawApp
      width="100%"
      height="100%"
      autoFocus
      showStartupLogo={showStartupLogo}
      cancelOnCtrlC={false}
      onSave={(art) => {
        bridge.emit({
          type: "save",
          payload: { art },
        });
      }}
      onCancel={() => {
        bridge.emit({
          type: "cancel",
          payload: { reason: "user" },
        });
      }}
    />
  );
}
