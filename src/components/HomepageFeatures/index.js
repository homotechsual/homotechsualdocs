import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const GitHubSvg = require('@site/static/img/GitHub.svg').default
const PSGallerySvg = require('@site/static/img/PowerShell.svg').default
const NpmSvg = require('@site/static/img/NPM.svg').default

const CategoryList = [
  {
    title: 'PowerShell Modules',
    features: [
      {
        title: 'HaloAPI',
        description: (
          <>
            A PowerShell module for interacting with the Halo Service Solutions software API.
            Includes Halo PSA, Halo ITSM and Halo Service Desk.
          </>
        ),
        link: {
          href: '/modules/haloapi',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/haloapi',
          repo: 'haloapi',
          owner: 'homotechsual'
        },
        psgallery: {
          href: 'https://www.powershellgallery.com/packages/HaloAPI'
        },
        npmPackage: false
      },
      {
        title: 'MSGraphMail',
        description: (
          <>
            A PowerShell module for interacting with the Microsoft Graph API for sending emails.
          </>
        ),
        link: {
          href: '/modules/msgraphmail',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/msgraphmail',
          repo: 'msgraphmail',
          owner: 'homotechsual'
        },
        psgallery: {
          href: 'https://www.powershellgallery.com/packages/MSGraphMail'
        },
        npmPackage: false
      },
      {
        title: 'NinjaOne',
        description: (
          <>
            A PowerShell module for interacting with the NinjaOne v2 API.
          </>
        ),
        link: {
          href: '/modules/ninjaone',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/ninjaone',
          repo: 'ninjaone',
          owner: 'homotechsual'
        },
        psgallery: {
          href: 'https://www.powershellgallery.com/packages/NinjaOne'
        },
        npmPackage: false
      },
      /*{
        title: 'NinjaGet',
        description: (
          <>
            A set of PowerShell scripts, NinjaOne custom fields and Documentation fields to automate the installation, removal and updating of applications using Microsoft's WinGet package manager.
          </>
        ),
        link: {
          href: '/tools/ninjaget',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/ninjaget',
          repo: 'ninjaget',
          owner: 'homotechsual'
        },
        psgallery: false,
        npmPackage: false
      },*/
    ]
  },
  {
    title: 'Docusaurus Plugins',
    features: [
      {
        title: 'Showcase for Docusaurus',
        description: (
          <>
            A showcase plugin for Docusaurus to display sites, plugins or other items in a card format with filtering and categorisation capabilities.
          </>
        ),
        link: {
          href: 'https://showcase.docusaurus.homotechsual.dev',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/docusaurus-plugin-showcase',
          repo: 'docusaurus-plugin-showcase',
          owner: 'homotechsual'
        },
        psgallery: false,
        npmPackage: {
          href: 'https://www.npmjs.com/package/@homotechsual/docusaurus-plugin-showcase'
        }
      },
      {
        title: 'Docusaurus Plugin FAQ',
        description: (
          <>
            A FAQ plugin for Docusaurus to display frequently asked questions in an accordion format with categorisation capabilities.
          </>
        ),
        link: {
          href: 'https://faq.docusaurus.homotechsual.dev',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/docusaurus-plugin-faq',
          repo: 'docusaurus-plugin-faq',
          owner: 'homotechsual'
        },
        psgallery: false,
        npmPackage: {
          href: 'https://www.npmjs.com/package/@homotechsual/docusaurus-plugin-faq'
        }
      },
      {
        title: 'Docusaurus Plugin Plausible',
        description: (
          <>
            A Plausible plugin for Docusaurus to easily integrate the Plausible analytics platform into your Docusaurus site. Includes support for both the self-hosted and cloud versions of Plausible, with options for custom domains and configurations.
          </>
        ),
        link: {
          href: 'https://plausible.docusaurus.homotechsual.dev',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/docusaurus-plugin-plausible',
          repo: 'docusaurus-plugin-plausible',
          owner: 'homotechsual'
        },
        psgallery: false,
        npmPackage: {
          href: 'https://www.npmjs.com/package/@homotechsual/docusaurus-plugin-plausible'
        }
      },
    ]
  },
  {
    title: 'Other Projects',
    features: [
      {
        title: 'ScreenGrabber',
        description: (
          <>
            A simple .NET dockerised web application for capturing screenshots of websites using the Playwright library. Exposes a simple API for requesting screenshots with various options and configurations.
          </>
        ),
        link: {
          href: 'tools/screengrabber',
          label: 'Documentation',
        },
        github: {
          href: 'https://github.com/homotechsual/screengrabber',
          repo: 'screengrabber',
          owner: 'homotechsual'
        },
        psgallery: false,
        npmPackage: false
      },
    ]
  }
];

function Feature({title, description, link, github, psgallery, npmPackage}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className={clsx('card', styles.feature)}>
        <div className={clsx('text--center card__header padding-horiz--md')}>
          <h3>{title}</h3>
        </div>
        <div className={clsx('text--center card__body padding-horiz--md')}>
          <p>{description}</p>
        </div>
        <div className={clsx('text--center card__footer padding-horiz--md')}>
          {link && link.href && link.href.length > 0 && (
            <a href={link.href} className="button button--primary margin-horiz--xs">
              {link.label}
            </a>
          )}
          {github && github.href && github.href.length > 0 && (
            <a href={github.href} className={clsx('button button--outline button--primary margin-horiz--xs', styles.iconbutton)}>
              <GitHubSvg className="icon--github" role="img" />
            </a>
          )}
          {psgallery && psgallery.href && psgallery.href.length > 0 && (
            <a href={psgallery.href} className={clsx('button button--outline button--primary margin-horiz--xs', styles.iconbutton)}>
              <PSGallerySvg className="icon--psgallery" role="img" />
            </a>
          )}
          {npmPackage && npmPackage.href && npmPackage.href.length > 0 && (
            <a href={npmPackage.href} className={clsx('button button--outline button--primary margin-horiz--xs', styles.iconbutton)}>
              <NpmSvg className="icon--npm" role="img" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function FeatureCategory({title, features}) {
  return (
    <div className={styles.featureCategory}>
      <h2 className={clsx('text--center', styles.categoryTitle)}>{title}</h2>
      <div className="row">
        {features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <div className={styles.featurestopdivider}></div>
      <section className={styles.features}>
        <div className="container">
          {CategoryList.map((category, idx) => (
            <FeatureCategory key={idx} {...category} />
          ))}
        </div>
      </section>
      <div className={styles.featuresbottomdivider}></div>
    </>
  );
}
