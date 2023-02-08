type CompanyInformationContentProps = {
  term: string;
  description: string;
  description2: string;
};

type CompanyInformationProps = CompanyInformationContentProps[];

export const COMPANY_INFORMATION: CompanyInformationProps = [
  {
    term: '会社名',
    description: '株式会社Scrumy',
    description2: '',
  },
  {
    term: '代表者',
    description: '笹埜 健斗',
    description2: '',
  },
  {
    term: '所在地',
    description: '東京都中央区銀座1丁目22番11号大竹ビジデンス2階',
    description2: '',
  },
  {
    term: '設立',
    description: '2021年4月',
    description2: '',
  },
  {
    term: '事業内容',
    description: '(1)サステナブル経営のための戦略コンサルティング',
    description2: '(2)サステナビリティ情報開示AI技術の開発・運営等',
  },
  {
    term: '資本金',
    description: '47,499,750円（資本準備金を含む）',
    description2: '',
  },
];
