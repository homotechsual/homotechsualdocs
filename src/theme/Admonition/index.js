import React from 'react'
import clsx from 'clsx'
import { ThemeClassNames } from '@docusaurus/theme-common'
import Translate from '@docusaurus/Translate'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotes, faLightbulbOn, faSkullCrossbones, faInfoCircle, faTriangleExclamation, faShieldCross, faUserNinja, faRocketLaunch } from '@fortawesome/sharp-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import PowerShellIcon from './svgs/PowerShell.svg'

function NoteIcon() {
  return(
    <FontAwesomeIcon icon={faNotes} />
  )
}

function TipIcon() {
  return(
    <FontAwesomeIcon icon={faLightbulbOn} />
  )
}

function DangerIcon() {
  return(
    <FontAwesomeIcon icon={faSkullCrossbones} />
  )
}
function InfoIcon() {
  return (
    <FontAwesomeIcon icon={faInfoCircle} />
  )
}
function CautionIcon() {
  return (
    <FontAwesomeIcon icon={faTriangleExclamation} />
  )
}
function DiscordIcon() {
  return (
    <FontAwesomeIcon icon={faDiscord} />
  )
}

function SecurityIcon() {
  return(
    <FontAwesomeIcon icon={faShieldCross} />
  )
}

function NinjaIcon() {
  return(
    <FontAwesomeIcon icon={faUserNinja} />
  )
}

function ReleaseIcon() {
  return(
    <FontAwesomeIcon icon={faRocketLaunch} />
  )
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
  note: {
    infimaClassName: 'secondary',
    iconComponent: NoteIcon,
    label: (
      <Translate
        id="theme.admonition.note"
        description="The default label used for the Note admonition (:::note)"
      >
        note
      </Translate>
    ),
  },
  tip: {
    infimaClassName: 'success',
    iconComponent: TipIcon,
    label: (
      <Translate
        id="theme.admonition.tip"
        description="The default label used for the Tip admonition (:::tip)"
      >
        tip
      </Translate>
    ),
  },
  danger: {
    infimaClassName: 'danger',
    iconComponent: DangerIcon,
    label: (
      <Translate
        id="theme.admonition.danger"
        description="The default label used for the Danger admonition (:::danger)"
      >
        danger
      </Translate>
    ),
  },
  info: {
    infimaClassName: 'info',
    iconComponent: InfoIcon,
    label: (
      <Translate
        id="theme.admonition.info"
        description="The default label used for the Info admonition (:::info)"
      >
        info
      </Translate>
    ),
  },
  caution: {
    infimaClassName: 'warning',
    iconComponent: CautionIcon,
    label: (
      <Translate
        id="theme.admonition.caution"
        description="The default label used for the Caution admonition (:::caution)"
      >
        caution
      </Translate>
    ),
  },
  discord: {
    infimaClassName: 'discord',
    iconComponent: DiscordIcon,
    label: (
      <Translate
        id="theme.admonition.discord"
        description="The default label used for the Discord admonition (:::discord)"
      >
        discord
      </Translate>
    ),
  },
  powershell: {
    infimaClassName: 'powershell',
    iconComponent: PowerShellIcon,
    label: (
      <Translate
        id="theme.admonition.powershell"
        description="The default label used for the PowerShell admonition (:::powershell)"
      >
        powershell
      </Translate>
    ),
  },
  security: {
    infimaClassName: 'security',
    iconComponent: SecurityIcon,
    label: (
      <Translate
        id="theme.admonition.security"
        description="The default label used for the Security admonition (:::security)">
        security
      </Translate>
    )
  },
  ninja: {
    infimaClassName: 'ninja',
    iconComponent: NinjaIcon,
    label: (
      <Translate
        id="theme.admonition.ninja"
        description="The default label used for the Ninja admonition (:::ninja)">
        ninja
      </Translate>
    )
  },
  release: {
    infimaClassName: 'release',
    iconComponent: ReleaseIcon,
    label: (
      <Translate
        id="theme.admonition.release"
        description="The default label used for the Release admonition (:::release)">
        release
      </Translate>
    )
  }
}
// Legacy aliases, undocumented but kept for retro-compatibility
const aliases = {
  secondary: 'note',
  important: 'info',
  success: 'tip',
  warning: 'danger',
}
function getAdmonitionConfig(unsafeType) {
  const type = aliases[unsafeType] ?? unsafeType
  const config = AdmonitionConfigs[type]
  if (config) {
    return config
  }
  console.warn(`No admonition config found for admonition type "${type}". Using Info as fallback.`)
  return AdmonitionConfigs.info
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children)
  const mdxAdmonitionTitle = items.find(
    (item) => React.isValidElement(item) && item.props?.mdxType === 'mdxAdmonitionTitle',
  )
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>
  return {
    mdxAdmonitionTitle,
    rest,
  }
}
function processAdmonitionProps(props) {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children)
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  }
}
export default function Admonition(props) {
  const { children, type, title, icon: iconProp } = processAdmonitionProps(props)
  const typeConfig = getAdmonitionConfig(type)
  const titleLabel = title ?? typeConfig.label
  const { iconComponent: IconComponent } = typeConfig
  const icon = iconProp ?? <IconComponent />
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(props.type),
        'alert',
        `alert--${typeConfig.infimaClassName}`,
        styles.admonition,
      )}
    >
      <div className={styles.admonitionHeading}>
        <span className={styles.admonitionIcon}>{icon}</span>
        {titleLabel}
      </div>
      <div className={styles.admonitionContent}>{children}</div>
    </div>
  )
}
