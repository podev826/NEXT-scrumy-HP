export type JobDescriptionContentDetailProps = {
  term: string;
  description: string;
};

export type JobDescriptionContentProps = {
  title: string;
  content: JobDescriptionContentDetailProps[];
};

type JobDescriptionProps = JobDescriptionContentProps[];

export const JOB_DESCRIPTION: JobDescriptionProps = [
  {
    title: 'フロントエンドエンジニア',
    content: [
      {
        term: '求める人物像',
        description: 'React.js/Next.js、Typescriptに堪能であること。',
      },
      {
        term: '給与',
        description: '200,000円〜',
      },
      {
        term: '勤務地',
        description: 'フルリモート',
      },
      {
        term: '勤務時間',
        description:
          '9:00-18:00 ※フレックス制度を導入しているため前後する可能性があります。',
      },
      {
        term: '加入保険	',
        description: '社会保険',
      },
    ],
  },
  {
    title: 'バックエンドエンジニア',
    content: [
      {
        term: '求める人物像',
        description: '内容入ります',
      },
      {
        term: '給与',
        description: '200,000円〜',
      },
      {
        term: '勤務地',
        description: 'フルリモート',
      },
      {
        term: '勤務時間',
        description:
          '9:00-18:00 ※フレックス制度を導入しているため前後する可能性があります。',
      },
      {
        term: '加入保険	',
        description: '社会保険',
      },
    ],
  },
];
