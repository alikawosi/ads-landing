
"use client";

import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    Termly?: {
      initialize: () => void;
    };
  }
}

const SCRIPT_SRC_BASE = "https://app.termly.io";

export default function TermlyCMP({
  autoBlock,
  masterConsentsOrigin,
  websiteUUID,
}: {
  autoBlock?: boolean;
  masterConsentsOrigin?: string;
  websiteUUID: string;
}) {
  const scriptSrc = useMemo(() => {
    const src = new URL(SCRIPT_SRC_BASE);
    src.pathname = `/resource-blocker/${websiteUUID}`;
    if (autoBlock) {
      src.searchParams.set("autoBlock", "on");
    }
    if (masterConsentsOrigin) {
      src.searchParams.set("masterConsentsOrigin", masterConsentsOrigin);
    }
    return src.toString();
  }, [autoBlock, masterConsentsOrigin, websiteUUID]);

  const isScriptAdded = useRef(false);
  const location = useLocation();

  useEffect(() => {
    if (isScriptAdded.current) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    document.head.appendChild(script);
    isScriptAdded.current = true;
  }, [scriptSrc]);

  useEffect(() => {
    window.Termly?.initialize();
  }, [location]);

  return null;
}
