/** @jsxImportSource @opentui/react */

import { useIslandBridge } from "opentui-island";
import { TermDrawApp } from "@termdraw/opentui";

type PiTermDrawIslandProps = {
  showStartupLogo?: boolean;
  footerText?: string;
};

export default function PiTermDrawIsland({
  showStartupLogo = false,
  footerText,
}: PiTermDrawIslandProps) {
  const bridge = useIslandBridge();

  return (
    <TermDrawApp
      width="100%"
      height="100%"
      autoFocus
      showStartupLogo={showStartupLogo}
      cancelOnCtrlC={false}
      footerText={footerText}
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
