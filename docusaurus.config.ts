// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

const lightCodeTheme = prismThemes.oneLight;
const darkCodeTheme = prismThemes.oneDark;
const admonitionsConfig = {
  admonitions: {
    keywords: [
      'discord',
      'info',
      'success',
      'danger',
      'note',
      'tip',
      'warning',
      'important',
      'caution',
      'powershell',
      'security',
      'ninja',
      'release'
    ],
  },
}
const remarkCodeSnippets = require('remark-code-snippets');
const remarkPluginsConfig = {
  remarkPlugins: [
    remarkCodeSnippets,
  ]
}

const commonDocsPluginConfig = {
  showLastUpdateTime: true,
  showLastUpdateAuthor: true,
  sidebarCollapsible: true,
  sidebarCollapsed: true,
  ...admonitionsConfig,
  ...remarkPluginsConfig
}

const GitHubSVG = '<svg class="icon--github" height="1rem" width="1rem" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>'
const MastodonSVG = '<svg class="icon--mastodon" height="1rem" width="1rem" viewBox="-9 0 274 274" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M249.874103,164.084793 C246.121107,183.392442 216.260831,204.522765 181.966269,208.61788 C164.083135,210.751705 146.475762,212.712995 127.700462,211.851797 C96.9952088,210.444977 72.7666374,204.522765 72.7666374,204.522765 C72.7666374,207.511889 72.9509692,210.357972 73.3196328,213.019724 C77.3115222,243.322396 103.36719,245.137696 128.048481,245.984147 C152.959817,246.836498 175.141568,239.842212 175.141568,239.842212 L176.164978,262.363134 C176.164978,262.363134 158.740462,271.719816 127.700462,273.440737 C110.584149,274.381567 89.33143,273.010138 64.5778816,266.458249 C10.8916144,252.248479 1.65880329,195.021567 0.246084399,136.955576 C-0.184514679,119.715392 0.080923109,103.458802 0.080923109,89.8624885 C0.080923109,30.4870046 38.9837803,13.0831336 38.9837803,13.0831336 C58.5996328,4.07447005 92.258619,0.286082949 127.250693,0 L128.110416,0 C163.10249,0.286082949 196.783596,4.07447005 216.397974,13.0831336 C216.397974,13.0831336 255.299356,30.4870046 255.299356,89.8624885 C255.299356,89.8624885 255.787467,133.670046 249.874103,164.084793" fill="#3088D4"></path><path d="M209.412536,94.4687189 L209.412536,166.362544 L180.929587,166.362544 L180.929587,96.5818986 C180.929587,81.8722212 174.740462,74.4060461 162.360739,74.4060461 C148.672997,74.4060461 141.812905,83.2628203 141.812905,100.775816 L141.812905,138.970839 L113.498066,138.970839 L113.498066,100.775816 C113.498066,83.2628203 106.636499,74.4060461 92.9487572,74.4060461 C80.5690337,74.4060461 74.3799093,81.8722212 74.3799093,96.5818986 L74.3799093,166.362544 L45.89696,166.362544 L45.89696,94.4687189 C45.89696,79.7752627 49.6381581,68.0989493 57.1529968,59.460424 C64.9023056,50.8218986 75.050877,46.3935115 87.6488494,46.3935115 C102.224333,46.3935115 113.262121,51.9957235 120.560186,63.2016221 L127.654748,75.0947097 L134.750785,63.2016221 C142.047375,51.9957235 153.085163,46.3935115 167.662121,46.3935115 C180.258619,46.3935115 190.40719,50.8218986 198.157974,59.460424 C205.671338,68.0989493 209.412536,79.7752627 209.412536,94.4687189" fill="#FFFFFF"></path></g></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Homotechsual Docs',
  tagline: 'Documentation for various homotechsual projects, including the HaloAPI and NinjaOne PowerShell modules as well as useful API documentation for some MSP focussed tools...',
  url: 'https://docs.homotechsual.dev',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/common',
          routeBasePath: 'common',
          sidebarPath: require.resolve('./commonsidebar.js'),
          ...commonDocsPluginConfig
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'Homotechsual Logo',
          src: 'img/Logo.svg',
        },
        items: [
          {
            label: 'Blog',
            position: 'left',
            to: 'https://homotechsual.dev',
          },
          {
            label: 'Module Docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'index',
                label: 'HaloAPI',
                docsPluginId: 'haloapi',
              },
              {
                type: 'doc',
                docId: 'index',
                label: 'NinjaOne',
                docsPluginId: 'ninjaone',
              },
              {
                type: 'doc',
                docId: 'index',
                label: 'MSGraphMail',
                docsPluginId: 'msgraphmail',
              }
            ],  
          },
          {
            label: 'Other Docs',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'index',
                label: 'Common Documentation',
                docsPluginId: 'default',
              },
              {
                type: 'doc',
                docId: 'index',
                label: 'Examples',
                docsPluginId: 'examples',
              }
            ],
          },
          /*{ 
            label: 'API Documentation',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'ninjaone/ninja-rmm-public-api-2-0',
                label: 'NinjaOne Public API',
                docsPluginId: 'ninjaoneapi'
              }
            ]
          },*/
          {
            to: 'https://github.com/sponsors/homotechsual/',
            label: 'Sponsor',
            position: 'right',
            target: '_blank',
            className: 'sponsorship-link',
          },
          {
            type: 'dropdown',
            position: 'right',
            label: 'GitHub',
            className: 'github-link',
            items: [
              {
                to: 'https://github.com/homotechsual/HaloAPI',
                label: 'HaloAPI',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/MSGraphMail',
                label: 'MSGraphMail',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/NinjaOne',
                label: 'NinjaOne',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/macOS-MDM-Profiles',
                label: 'macOS MDM Profiles',
                target: '_blank',
              },
            ],
          }
        ],
      },
      footer: {
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/Docusaurus.svg',
          href: 'https://docusaurus.io',
          height: 50,
          width: 50,
        },
        links: [
          {
            title: 'Useful Links and Communities',
            items: [
              {
                to: 'https://cipp.app',
                label: 'CIPP',
              },
              {
                to: 'https://mspgeek.org/',
                label: 'MSPGeek',
              },
              {
                to: 'https://winadmins.io/',
                label: 'WinAdmins',
              },
              {
                to: 'https://discord.gg/ninjaone/',
                label: 'NinjaOne Discord',
              },
              {
                to: 'https://discord.halopsa.community/',
                label: 'HaloPSA Community Discord',
              }
            ],
          },
          {
            title: 'More Homotechsual',
            items: [
              {
                to: 'https://homotechsual.dev',
                label: 'Blog',
              },
              {
                to: 'https://github.com/homotechsual',
                label: 'GitHub',
              },
              {
                to: 'https://tech.lgbt/@homotechsual',
                label: 'Mastodon',
              }
            ],
          },
          {
            title: 'Other Useful Blogs',
            items: [
              {
                to: 'https://cyberdrain.com',
                label: 'CyberDrain',
              },
              {
                to: 'https://mspp.io',
                label: 'MSPP',
              },
              {
                to: 'https://gavsto.com',
                label: 'Gavsto',
              },
              {
                to: 'https://techfoundry.co.uk/',
                label: 'TechFoundry',
              },
              {
                to: 'https://mendyonline.com',
                label: 'MendyOnline'
              },
              {
                to: 'https://therandomadmin.com',
                label: 'TheRandomAdmin'
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mikey O'Toole | Built with <a href="https://docusaurus.io">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'python'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-0',
        content: `⭐️ If you like any of the PowerShell modules or projects, give them a star or sponsor one or more of the authors on <a target="_blank" rel="noopener noreferrer" href="https://github.com/homotechsual">${GitHubSVG}GitHub</a> and follow me on <a target="_blank" rel="noopener noreferrer" href="https://tech.lgbt/@homotechsual">${MastodonSVG}Mastodon</a>`,
      },
      docs: {
        sidebar: {
          hideable: true
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
    plugins: [
      require.resolve('docusaurus-plugin-sass'),
      [
        require.resolve('docusaurus-plugin-plausible'),
        {
          domain: 'docs.homotechsual.dev',
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'haloapi',
          path: 'docs/haloapi',
          routeBasePath: 'modules/haloapi',
          sidebarPath: require.resolve('./haloapisidebar.js'),
          ...commonDocsPluginConfig
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'ninjaone',
          path: 'docs/ninjaone',
          routeBasePath: 'modules/ninjaone',
          sidebarPath: require.resolve('./ninjaonesidebar.js'),
          ...commonDocsPluginConfig
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'msgraphmail',
          path: 'docs/msgraphmail',
          routeBasePath: 'modules/msgraphmail',
          sidebarPath: require.resolve('./msgraphmailsidebar.js'),
          
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'examples',
          path: 'docs/examples',
          routeBasePath: 'examples',
          sidebarPath: require.resolve('./commonsidebar.js'),
          ...commonDocsPluginConfig
        },
      ],
    ],
  themes: [
    [
      require.resolve('@docusaurus/theme-mermaid'),
      {
        theme: {
          light: 'neutral',
          dark: 'forest',
        },
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: "en",
        hashed: true
      }
    ],
  ],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
};

module.exports = config;
