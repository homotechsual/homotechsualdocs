// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Homotechsual Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.homotechsual.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/homotechsual/moduledocs/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Homotechsual PowerShell Module Docs',
        logo: {
          alt: 'Homotechsual Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'haloapi/index',
            position: 'left',
            label: 'HaloAPI',
          },
          /* {
            type: 'doc',
            docId: 'msgraphmail',
            position: 'left',
            label: 'MSGraphMail',
          },
          {
            type: 'doc',
            docId: 'ninjaone',
            position: 'left',
            label: 'NinjaOne',
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
            label: 'GitHub Projects',
            className: 'github-link',
            items: [
              {
                to: 'https://github.com/homotechsual/MSGraphMail',
                label: 'MSGraphMail',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/HaloAPI',
                label: 'HaloAPI',
                target: '_blank',
              },
              {
                to: 'https://github.com/homotechsual/NinjaOne',
                label: 'NinjaOne',
                target: '_blank',
              },
            ],
          },
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
              }
            ],
          },
          {
            title: 'More Homotechsual',
            items: [
              {
                to: 'pathname:///rss.xml',
                label: 'RSS Feed',
              },
              {
                to: 'https://github.com/homotechsual',
                label: 'GitHub',
              },
              {
                to: 'https://twitter.com/homotechsual',
                label: 'Twitter',
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
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mikey O'Toole | Built with <a href="https://docusaurus.io">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
    plugins: [
      require.resolve('docusaurus-plugin-sass'),
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          indexDocs: false,
          indexBlog: true,
          indexPages: true,
          language: "en"
        }
      ],
      [
        require.resolve('@docusaurus/plugin-client-redirects'),
        {
          redirects: [
            {
              to: '/2021/09/09/Monitoring-OneDrive-PowerShell-CyberDrain-NinjaOne',
              from: '/2021/09/09/monitoring-onedrive-status-with-powershell-cyberdrain-and-ninjarmm',
            },
            {
              to: '/2022/01/22/Getting-computer-information-NinjaOne-agent-HaloPSA',
              from: '/2022/01/22/Getting-computer-information-NinjaRMM-agent-HaloPSA',
            }
          ]
        }
      ],
      [
        'docusaurus-plugin-plausible',
        {
          domain: 'homotechsual.dev',
        },
      ]
    ],
};

module.exports = config;
