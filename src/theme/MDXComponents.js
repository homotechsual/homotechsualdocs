import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from '@iconify/react';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  icon: Icon,
  tabs: Tabs,
  tabitem: TabItem,
};