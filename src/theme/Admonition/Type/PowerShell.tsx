import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition';
import AdmonitionLayout from '@theme/Admonition/Layout';
import PowerShellIcon from '../Icon/PowerShell'

const infimaClassName = 'alert alert--powershell';

const defaultProps = {
  icon: <PowerShellIcon />,
  title: (
    <Translate
      id="theme.admonition.powershell"
      description="The default label used for the PowerShell admonition (:::powershell)">
      powershell
    </Translate>
  ),
};

export default function AdmonitionTypePowerShell(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
