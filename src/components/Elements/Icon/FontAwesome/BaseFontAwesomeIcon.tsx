import '@fortawesome/fontawesome-svg-core/styles.css';

import { config, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

config.autoAddCss = false;

type FontAwesomeIconProps = {
  icon: IconProp;
};

export const BaseFontAwesomeIcon: FC<FontAwesomeIconProps> = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} />;
};
