// @ts-check
// `@type` JSDocのアノテーションを使用すると、エディタ補完と型チェックが可能になります
// （`@ts-check`と組み合わせて使用する場合）。
// Docusaurus設定を宣言するさまざまな方法があります。
// 詳細は: https://docusaurus.io/docs/api/docusaurus-config を参照してください

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ぼっちエンジニアの備忘録',
  tagline: 'Hello ander world.',
  favicon: 'img/favicon.ico',
  staticDirectories: ['public', 'static'],

  // サイトを本番環境でホストするURLを指定します(GitHub PagesのURL)
  url: 'https://siro-yamaneko.github.io',
  // サイトが提供される/<baseUrl>/パス名を設定します
  // GitHub Pagesを使用する場合、多くの場合 '/<projectName>/' になります
  baseUrl: '/siro-yamaneko.github.io/',

  // GitHub Pages用のデプロイ設定
  // GitHub Pagesを使用しない場合、これらの設定は不要です
  organizationName: 'Siro-Yamaneko', // GitHubのユーザー名
  projectName: 'siro-yamaneko.github.io', // GitHubリポジトリ名
  deploymentBranch: 'gh-pages', // デプロイ先ブランチ

  onBrokenLinks: 'throw', // 壊れたリンクが見つかった場合にエラーをスローします
  onBrokenMarkdownLinks: 'warn', // 壊れたMarkdownリンクが見つかった場合に警告を表示します

  // 国際化対応
  // 国際化を使用しない場合でも、HTMLのlang属性などのメタデータを設定できます
  i18n: {
    defaultLocale: 'ja', // デフォルトの言語
    locales: ['ja'], // サポートする言語のリスト
  },

  future: {
    experimental_faster: true, // パフォーマンス向上の実験的な設定
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // サイドバー構成ファイル
          // 編集リンクを提供するGitHubリポジトリURL
          editUrl: 'https://github.com/Siro-Yamaneko/siro-yamaneko.github.io/tree/main',
        },
        blog: {
          showReadingTime: true, // 記事の読了時間を表示
          editUrl: 'https://github.com/Siro-Yamaneko/siro-yamaneko.github.io/tree/main', // 編集リンク
        },
        theme: {
          customCss: [require.resolve('./src/css/sources.scss')], // カスタムCSSファイル
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ソーシャルカード画像（シェア時に表示される画像）
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docusaurus MUI',
        logo: {
          alt: 'Docusaurus MUI ロゴ',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'チュートリアル',
          },
          { to: '/blog', label: 'ブログ', position: 'left' },
          {
            href: 'https://github.com/Siro-Yamaneko/siro-yamaneko.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHubリポジトリ',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'チュートリアル',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'ブログ',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Siro-Yamaneko/siro-yamaneko.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docusaurus MUI. 作成者: <a href="https://github.com/Siro-Yamaneko" style="font-weight: bold;" target="_blank">Siro Yamaneko</a>`,
      },
      prism: {
        theme: prismThemes.oneDark, // ダークテーマ用のPrismJSテーマ
        darkTheme: prismThemes.oneDark, // ダークモード用テーマ
      },
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true, // ページをインデックスに含める
        docsRouteBasePath: '/docs', // ドキュメントのルートパス
        hashed: true, // ハッシュを使用したキャッシュ制御
        language: ['ja'], // サポートする言語
        highlightSearchTermsOnTargetPage: true, // ターゲットページで検索用語をハイライト
        searchResultContextMaxLength: 50, // 検索結果のコンテキストの最大長
        searchResultLimits: 8, // 最大表示件数
        searchBarShortcut: true, // ショートカットキーを有効化
        searchBarShortcutHint: true, // ショートカットヒントを表示
      },
    ],
  ],

  plugins: [
    ['docusaurus-plugin-sass', {}], // Sassプラグイン
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70, // 画像の圧縮品質
        max: 1030, // 最大画像幅
        min: 640, // 最小画像幅
        steps: 2, // 解像度のステップ数
        disableInDev: true, // 開発環境では無効化
      }),
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog', // ブログのパス
        editLocalizedFiles: false, // ローカライズされたファイルの編集を無効化
        blogTitle: 'ぼっちエンジニアの備忘録',
        blogDescription: '趣味や業務で使った技術の備忘録・雑記を投稿してます。',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'ブログ一覧',
        routeBasePath: 'blog', // ブログのルートパス
        include: ['**/*.md', '**/*.mdx'], // 対象とするファイル
        exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
        postsPerPage: 6, // 1ページあたりの投稿数
        truncateMarker: /<!--\s*(truncate)\s*-->/, // 記事を切り詰めるマーカー
        showReadingTime: true, // 読了時間を表示
        onUntruncatedBlogPosts: 'ignore', // 切り詰められていない投稿を無視
        // 編集リンク
        editUrl: 'https://github.com/Siro-Yamaneko/siro-yamaneko.github.io/tree/main',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]], // プラグイン
      },
    ],
  ],
};

export default config;
