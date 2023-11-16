import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/sharp-solid-svg-icons';
import type {Props} from '@theme/Icon/LightMode';

export default function IconLightMode(props: Props): JSX.Element {
  const {className} = props;
  return (
    <FontAwesomeIcon size="xl" icon={faSun} className={className} />
  );
}
