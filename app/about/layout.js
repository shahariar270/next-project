import Link from 'next/link'
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div>
        <nav>
            <ul className=' mt-10 flex justify-evenly items-center'>
                <li><Link href={'/about/mission'}>mission</Link></li>
                <li><Link href={'/about/vision'}>vision</Link></li>

            </ul>

        </nav>
        {children}
    </div>
  )
}

export default AboutLayout