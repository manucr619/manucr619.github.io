'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * Renders a Mermaid diagram on the client.
 *
 * Mermaid needs a DOM, so it is dynamically imported after mount — this keeps it
 * out of the static export's server render and out of the initial bundle.
 */
export function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, '');
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const { default: mermaid } = await import('mermaid');

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        fontFamily: 'inherit',
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      });

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart.trim());
        if (!cancelled) setSvg(svg);
      } catch {
        if (!cancelled) setSvg('');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="my-6 flex justify-center overflow-x-auto rounded-lg border bg-fd-card p-4 [&_svg]:max-w-full"
      // eslint-disable-next-line react/no-danger -- output comes from mermaid's own sanitised renderer
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
