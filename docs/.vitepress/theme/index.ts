// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { NotFound, ImageComponent } from '../../src/components/index.ts';
import './style.css'
// youtube-embed
import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed' // [!code ++]
import '@miletorix/vitepress-youtube-embed/style.css' // [!code ++]
// mermaid
import { initComponent } from 'vitepress-mermaid-preview/component';
import 'vitepress-mermaid-preview/dist/index.css';


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'not-found': () => h(NotFound)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('YouTubeEmbed', YouTubeEmbed);
    app.component('ImageComponent', ImageComponent);
    initComponent(app);
  }
} satisfies Theme
