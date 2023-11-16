import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/sharp-solid-svg-icons';
import type {Props} from '@theme/Icon/DarkMode';

export default function IconDarkMode(props: Props): JSX.Element {
  return (
    <FontAwesomeIcon size="xl" icon={faMoon} />
  );
}
