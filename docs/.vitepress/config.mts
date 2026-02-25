import { defineConfig } from 'vitepress';
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';
import TOP_NAVBAR from './theme/navs/navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Java Dev Insights",
  description: "Notes for Java Dev",
  base: "/dev",
  srcDir: "./src",
  head: [
		["link", { rel: "icon", href: "icons/favicon.ico" }],
		["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
		["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: '' }],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bungee&display=swap" }],
	],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "images/alien-green.png",    
    nav: TOP_NAVBAR,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Elements', link: '/elements' },
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com' }],
		search: { provider: 'local' },
  },
  markdown: {
    config: (md) => {
      vitepressMermaidPreview(md, {
        showToolbar: false, // Global setting: whether to show toolbar by default
      });
    },
  },
})
