import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { siteVersion } from '@generated/site-metadata';

const GitHubSvg = require('@site/static/img/GitHub.svg').default
const PSGallerySvg = require('@site/static/img/PowerShell.svg').default

const FeatureList = [
  {
    title: 'HaloAPI',
    description: (
      <>
        A PowerShell module for interacting with the Halo Service Solutions software API.
        Includes Halo PSA, Halo ITSM and Halo Service Desk.
      </>
    ),
    link: {
      href: '/docs/haloapi',
      label: 'Documentation',
    },
    github: {
      href: 'https://github.com/homotechsual/haloapi'
    },
    psgallery: {
      href: 'https://www.powershellgallery.com/packages/HaloAPI'
    }
  },
  {
    title: 'MSGraphMail',
    description: (
      <>
        A PowerShell module for interacting with the Microsoft Graph API for sending emails.
      </>
    ),
    link: {
      href: '/docs/msgraphmail',
      label: 'Documentation',
    },
    github: {
      href: 'https://github.com/homotechsual/msgraphmail'
    },
    psgallery: {
      href: 'https://www.powershellgallery.com/packages/MSGraphMail'
    }
  },
  {
    title: 'NinjaOne',
    description: (
      <>
        A PowerShell module for interacting with the NinjaOne v2 API.
      </>
    ),
    link: {
      href: '/docs/ninjaone',
      label: 'Documentation',
    },
    github: {
      href: 'https://github.com/homotechsual/ninjaone'
    },
    psgallery: {
      href: 'https://www.powershellgallery.com/packages/NinjaOne'
    }
  },
];

function Feature({title, description, link, github, psgallery}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('card', styles.feature)}>
        <div className={clsx('text--center card__header padding-horiz--md')}>
          <h3>{title}</h3>
        </div>
        <div className={clsx('text--center card__body padding-horiz--md')}>
          <p>{description}</p>
        </div>
        <div className={clsx('text--center card__footer padding-horiz--md')}>
          <a href={link.href} className="button button--primary margin-horiz--xs">{link.label}</a>
          <a href={github.href} className={clsx('button button--outline button--primary margin-horiz--xs', styles.iconbutton)}><GitHubSvg className="icon--github" role="img" /></a>
          <a href={psgallery.href} className={clsx('button button--outline button--primary margin-horiz--xs', styles.iconbutton)}><PSGallerySvg className="icon--psgallery" role="img" /></a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
