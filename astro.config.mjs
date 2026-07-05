// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://ring.yemanverse.space',
  output: 'static',
  integrations: [mdx()],
});
