import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M17.5 19a4.5 4.5 0 1 0-.9-8.91A6.002 6.002 0 0 0 5.2 11.2 3.5 3.5 0 0 0 6 19h11.5Z" />
          </svg>
          {appName}
        </>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'API Reference',
        url: '/docs/api-reference',
        active: 'url',
      },
      {
        text: 'Changelog',
        url: '/docs/changelog',
        active: 'url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
