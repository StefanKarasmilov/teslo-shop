import Link from 'next/link'
import { CSSProperties, FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
  underline?: boolean
  style?: CSSProperties
}

export const NextLink: FC<Props> = ({
  children,
  href,
  style,
  underline = false,
}) => (
  <Link
    href={href}
    style={{
      ...style,
      textDecoration: underline ? 'underline' : 'none',
    }}
    className="next-link"
  >
    {children}
  </Link>
)
