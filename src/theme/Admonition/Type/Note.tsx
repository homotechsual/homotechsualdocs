import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Note';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotes } from '@fortawesome/sharp-solid-svg-icons';

const infimaClassName = 'alert alert--secondary';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faNotes} />,
  title: (
    <Translate
      id="theme.admonition.note"
      description="The default label used for the Note admonition (:::note)">
      note
    </Translate>
  ),
};

export default function AdmonitionTypeNote(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}