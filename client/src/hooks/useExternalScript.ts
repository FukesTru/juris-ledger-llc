import { useEffect } from "react";

/**
 * Appends a third-party <script> to the page once, no matter how many
 * components (or remounts) ask for it.
 */
export function useExternalScript(src: string) {
  useEffect(() => {
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }, [src]);
}
