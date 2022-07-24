import { IconContext } from 'react-icons'
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa'

export const Links = () => {
  return (
    <div id="links" className="grid grid-flow-col items-center justify-between gap-8">
      <IconContext.Provider value={{ size: '28', color: 'currentColor' }}>
        <a href="https://github.com/benweier" aria-label="GitHub" className="p-2" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://twitter.com/benweier" aria-label="Twitter" className="p-2" title="Twitter">
          <FaTwitter />
        </a>
        <a href="mailto:web@benweier.dev" aria-label="Email" className="p-2" title="Email">
          <FaEnvelope />
        </a>
      </IconContext.Provider>
    </div>
  )
}
