import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightBlog from 'starlight-blog'
import react from "@astrojs/react";

import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'

export default defineConfig({
  site: "https://example.com",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    starlight({
      defaultLocale: 'root', // optional
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
        // Arabic docs in `src/content/docs/ar/`
        uk: {
          label:'Українська',
          lang: 'ua',
        },
      },
      customCss: ['./src/tailwind.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-blog/edit/main/docs/',
      },
      plugins: [
        starlightBlog({
          title: 'Demo Blog',
          authors: {
            hideoo: {
              name: 'HiDeoo',
              title: 'Starlight Aficionado',
              picture: '/hideoo.png',
              url: 'https://hideoo.dev',
            },
          },
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Getting Started', link: '/getting-started/' },
            { label: 'Configuration', link: '/configuration/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Frontmatter', link: '/guides/frontmatter/' },
            { label: 'Authors', link: '/guides/authors/' },
          ],
        },
      ],
      social: {
        github: 'https://github.com/HiDeoo/starlight-blog',
      },
      title: 'Starlight Blog',
    }),
  ],
})