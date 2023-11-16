import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Warning';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/sharp-solid-svg-icons';

const infimaClassName = 'alert alert--warning';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faExclamationTriangle} />,
  title: (
    <Translate
      id="theme.admonition.warning"
      description="The default label used for the Warning admonition (:::warning)">
      warning
    </Translate>
  ),
};

export default function AdmonitionTypeWarning(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
