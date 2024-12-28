import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Coolify Docs",
  description: "Self hosting with super powers",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Coolify Cloud', link: 'https://coolify.io/pricing/' },
      {
        text: 'Resources',
        items: [
          { text: 'Releases', link: 'https://github.com/coollabsio/coolify/releases' },
          { text: 'Support', link: 'https://coolify.io/' },
          { text: 'Sponsor us', link: 'https://coolify.io/sponsorships/' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/coollabsio/documentation-coolify/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/coollabsio/coolify' },
      { icon: 'discord', link: 'https://discord.gg/coolify' },
      { icon: 'x', link: 'https://x.com/coolifyio' }
    ],
    sidebar: [
      {
        text: 'Home',
        collapsed: false,
        items: [
          { text: 'What is Coolify', link: '/home/what-is-coolify' },
          { text: 'Quickstart', link: '/home/quickstart' },
          { text: 'Installation', link: '/home/installation' },
        ],
      },
      {
        text: 'Services',
        collapsed: false,
        items: [
          { text: 'Overview', 
            link: '/services/overview', 
            items: [
              { text: 'ActivePieces', link: '/services/activepieces' },
              { text: 'AnythingLLM', link: '/services/anythingllm' },
              { text: 'Appwrite', link: '/services/appwrite' },
            ] 
          }
        ],
      },
      {
        text: 'About',
        collapsed: false,
        items: [
          { text: 'Team', link: '/company/team' }
        ],
      },
    ],
    
  },
  // Do not remove this or URL rewriting will not work (it's relinking /content to /)
  // TODO: Forward everything from / to the below content/ to docs/ rewrite, 
  // choice depending on desired level of control, either:
  // A. NGINX/Treafik (higher-up networking) level, or
  // B. VitePress (local data-driven) level.
  rewrites: {
    'content/:section/:page': ':section/:page',
    'content/:section/:subsection/:page': ':section/:subsection/:page'
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/Landing/HeroHeader.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPBadge\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPBadge.vue', import.meta.url)
          )
        }
      ]
    }
  }
})
