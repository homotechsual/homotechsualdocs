import React from 'react';
import AdmonitionTypeNote from '@theme/Admonition/Type/Note';
import AdmonitionTypeTip from '@theme/Admonition/Type/Tip';
import AdmonitionTypeInfo from '@theme/Admonition/Type/Info';
import AdmonitionTypeWarning from '@theme/Admonition/Type/Warning';
import AdmonitionTypeDanger from '@theme/Admonition/Type/Danger';
import AdmonitionTypeCaution from '@theme/Admonition/Type/Caution';
import AdmonitionTypeDiscord from './Type/Discord';
import type AdmonitionTypes from '@theme/Admonition/Types';
import AdmonitionTypeNinja from './Type/Ninja';
import AdmonitionTypePowerShell from './Type/PowerShell';
import AdmonitionTypeRelease from './Type/Release';
import AdmonitionTypeSecurity from './Type/Security';

const admonitionTypes: typeof AdmonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  info: AdmonitionTypeInfo,
  warning: AdmonitionTypeWarning,
  danger: AdmonitionTypeDanger,
  discord: AdmonitionTypeDiscord,
  ninja: AdmonitionTypeNinja,
  powershell: AdmonitionTypePowerShell,
  release: AdmonitionTypeRelease,
  security: AdmonitionTypeSecurity
};

// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases: typeof AdmonitionTypes = {
  secondary: (props) => <AdmonitionTypeNote title="secondary" {...props} />,
  important: (props) => <AdmonitionTypeInfo title="important" {...props} />,
  success: (props) => <AdmonitionTypeTip title="success" {...props} />,
  caution: AdmonitionTypeCaution,
};

export default {
  ...admonitionTypes,
  ...admonitionAliases,
};
