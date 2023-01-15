# scrumy-hp

## 使用技術

### basic

- Next.js
- TypeScript
- Chakra UI

### Saas

- SendGrid
- Algolia
- microCMS

### library

- clsx
- framer-motion
- fortawesome
- react-hook-form
- microcms-js-sdk
- dayjs
- yakuhanjp
- react-scroll
- axios
- algoliasearch
- react-instantsearch-hooks-web
- @sendgrid/mail
- @slack/webhook

### other

- ESLint
- Prettier
- Husky
- lint-staged

## 投稿機能

Top/Topics、News は microCMS で管理している。
投稿をしたら Webhook で自動的に build されるようになっている。

ログインページ: https://app.microcms.io/signin

## 検索機能

News ページの投稿内容は Algolia で検索できるようになっている。
build をしたタイミングで、

- microCMS から News のデータを取得
- Algolia に登録

されるようになっている。

## お問い合わせフォーム

フォーム送信時に SendGrid で確認メールが送信されるようになっている。
また、フォームの入力内容は Slack(Webhook)に通知される。

## CI/CD

GitHub の main, develop に push された際に build が走るようになっている。
環境変数は CloudBuild 上で管理している。




##renewal

public:主に画像データ。imagesの画像を新しいものに変更、古いものを削除する

src:
  components
    element：各ページのコンポーネント
    layout:ヘッダーやフッター
    
  pages:基本的にここをいじる？コンポーネント化されているので、src/components/elementにある各ページで使用されているコンポーネントを編集する。
  
  修正作業
