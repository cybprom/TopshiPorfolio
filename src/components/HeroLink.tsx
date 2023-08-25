import Link from 'next/link'
import React from 'react'

type Props = {}

const HeroLink = (props: Props) => {
  return (
    <Link href="#projects" > check out my work</Link>
  )
}

export default HeroLink