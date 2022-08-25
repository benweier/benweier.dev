import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon'
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import { Anchor } from '@/components/Anchor'
import styles from './styles.module.css'

export const Links = () => {
  return (
    <div id="links" className="grid grid-flow-col items-center justify-between gap-8">
      <Anchor href="https://github.com/benweier" aria-label="GitHub" className={styles.link} title="GitHub">
        <CodeBracketIcon className="h-8 w-8" />
      </Anchor>
      <Anchor href="https://twitter.com/benweier" aria-label="Twitter" className={styles.link} title="Twitter">
        <AtSymbolIcon className="h-8 w-8" />
      </Anchor>
      <Anchor href="mailto:web@benweier.dev" aria-label="Email" className={styles.link} title="Email">
        <EnvelopeIcon className="h-8 w-8" />
      </Anchor>
    </div>
  )
}
