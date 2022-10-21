import clsx from 'clsx'

import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
  asChild?: boolean
  children: ReactNode
}

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black tet-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      { children }
    </Component>
  )
}
