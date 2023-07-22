import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/sharp-solid-svg-icons';
export default function IconLightMode(props) {
  return (
    <FontAwesomeIcon size="xl" icon={faSun} {...props}/>
  );
}
