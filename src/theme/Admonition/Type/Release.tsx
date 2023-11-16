import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocketLaunch } from '@fortawesome/sharp-solid-svg-icons';

const infimaClassName = 'alert alert--release';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faRocketLaunch} />,
  title: (
    <Translate
      id="theme.admonition.release"
      description="The default label used for the Release admonition (:::release)">
      release
    </Translate>
  ),
};

export default function AdmonitionTypeRelease(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
