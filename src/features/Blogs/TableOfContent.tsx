import { FC } from 'react';
import { TocType } from 'types';

type TocTypeProps = {
  toc: TocType[];
};

export const TableOfContents: FC<TocTypeProps> = ({ toc }) => {
  return (
    <div>
      <p className="TableOfContentsHead">目次</p>
      <ul>
        {toc.map((data: TocType) => (
          <li key={data.id}>
            <a href={`#${data.text}`}>{data.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
