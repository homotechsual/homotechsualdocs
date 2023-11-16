import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldCross } from '@fortawesome/sharp-solid-svg-icons'

const infimaClassName = 'alert alert--security';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faShieldCross} />,
  title: (
    <Translate
      id="theme.admonition.security"
      description="The default label used for the Security admonition (:::security)">
      discord
    </Translate>
  ),
};

export default function AdmonitionTypeSecurity(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
