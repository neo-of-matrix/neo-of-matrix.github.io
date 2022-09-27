// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '一句话解释一个知识点',
  tagline: '最少的语言解释复杂的知识',
  url: 'https://neo-of-matrix.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  projectName: 'neo-of-matrix.github.io', // Usually your repo name.
  organizationName: 'neo-of-matrix', // Usually your GitHub org/user name.
  trailingSlash: true,
  deploymentBranch:"gh-pages",
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:'',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "最新博客"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "books",
        path: "books",
        routeBasePath: "books",
        sidebarPath: require.resolve("./sidebars.js"),
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '首页',
        logo: {
          alt: 'logo',
          src: 'img/favicon.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: '笔记',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/books', label: '书籍', position: 'left'},
          {
            href: 'https://github.com/neo-of-matrix',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '笔记',
                to: '/docs/about',
              },
            ],
          },
          {
            title: '社区',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: '',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/neo-of-matrix',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} neo-of-matrix, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
