import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserNinja } from '@fortawesome/sharp-solid-svg-icons';

const infimaClassName = 'alert alert--ninja';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faUserNinja} />,
  title: (
    <Translate
      id="theme.admonition.ninja"
      description="The default label used for the Ninja admonition (:::ninja)">
      ninja
    </Translate>
  ),
};

export default function AdmonitionTypeNinja(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
