import { AnchorHTMLAttributes } from 'react'
import { clsx } from 'clsx'

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Anchor = ({ className, ...props }: AnchorProps) => {
  return (
    <a
      className={clsx(
        'rounded-sm text-current underline focus:outline-none focus:ring focus:ring-sky-600 focus:dark:ring-sky-400',
        className,
      )}
      {...props}
    />
  )
}
