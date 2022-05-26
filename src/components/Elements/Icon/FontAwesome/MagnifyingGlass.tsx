import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

import { BaseFontAwesomeIcon } from './BaseFontAwesomeIcon';

export const MagnifyingGlass: FC = () => {
  return <BaseFontAwesomeIcon icon={faMagnifyingGlass} />;
};
