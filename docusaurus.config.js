// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZMM',
  tagline: 'VOICEVOX解説動画作成ツールなのだ',
  url: 'https://www.3qe.us/',
  baseUrl: '/zmm/doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/zmm-small.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'windymelt', // Usually your GitHub org/user name.
  projectName: 'zmd', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
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
            'https://github.com/windymelt/zmd/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/windymelt/zmd/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ZMM',
        logo: {
          alt: 'ZMM Logo',
          src: 'img/zmm-small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'チュートリアル',
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'ドキュメント',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/windymelt/zmm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '使い方/ドキュメント',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/windymelt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ニコ動',
                href: 'https://www.nicovideo.jp/series/367307',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/windymelt/zmm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Windymelt. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
