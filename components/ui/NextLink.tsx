import Link from 'next/link'
import { CSSProperties, FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
  underline?: boolean
  prefetch?: boolean
  style?: CSSProperties
}

export const NextLink: FC<Props> = ({
  children,
  href,
  style,
  underline = false,
  prefetch = true,
}) => (
  <Link
    href={href}
    style={{
      ...style,
      textDecoration: underline ? 'underline' : 'none',
    }}
    className="next-link"
    prefetch={prefetch}
  >
    {children}
  </Link>
)
