import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemedComponent, useThemeConfig} from '@docusaurus/theme-common';

export default function NavbarLogo(): ReactNode {
  const {siteConfig: {title}} = useDocusaurusContext();
  const {navbar: {title: navbarTitle, logo}} = useThemeConfig();
  const logoLink = useBaseUrl(logo?.href || '/');
  const compactLogo = useBaseUrl('img/Icon.svg');
  const lightLogo = useBaseUrl(logo?.src || '');
  const darkLogo = useBaseUrl(logo?.srcDark || logo?.src || '');
  const alt = logo?.alt ?? (navbarTitle ? '' : title);

  return (
    <Link
      to={logoLink}
      className="navbar__brand"
      {...(logo?.target && {target: logo.target})}>
      {logo && (
        <ThemedComponent className={logo.className}>
          {({theme, className}) => (
            <picture className={`navbar__logo navbar__logo--responsive ${className}`}>
              <source media="(max-width: 1359px)" srcSet={compactLogo} />
              <img
                src={theme === 'dark' ? darkLogo : lightLogo}
                height={logo.height}
                width={logo.width}
                alt={alt}
                style={logo.style}
              />
            </picture>
          )}
        </ThemedComponent>
      )}
      {navbarTitle != null && (
        <b className="navbar__title text--truncate">{navbarTitle}</b>
      )}
    </Link>
  );
}
