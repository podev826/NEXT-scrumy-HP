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
    title: 'バックエンドエンジニア',
    content: [
      {
        term: '求める人物像',
        description: 'ソフトウェア開発設計思想に堪能である方',
      },
      {
        term: '給与',
        description: '応談',
      },
      {
        term: '勤務地',
        description: '東京(フルリモートの相談も可)',
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
    title: 'ビジネスインターン',
    content: [
      {
        term: '求める人物像',
        description: '弊社の目指す思想に共感しており、かつ向上心がある方',
      },
      {
        term: '給与',
        description: '応談',
      },
      {
        term: '勤務地',
        description: '東京(フルリモートの相談も可)',
      },
      {
        term: '勤務時間',
        description: '応談',
      },
      {
        term: '加入保険	',
        description: 'なし',
      },
    ],
  },
];
