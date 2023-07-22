import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/sharp-solid-svg-icons';
export default function IconDarkMode(props) {
  return (
    <FontAwesomeIcon size="xl" icon={faMoon} {...props}/>
  );
}
