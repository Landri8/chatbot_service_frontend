import React from 'react'

const Template: React.FC<{children: React.ReactNode, classes?: string}> = ({children, classes}) => {
  return (
    <section className={`w-[85%] md:w-11/12 max-w-[1440px] mx-auto ${classes}`}>
        {children}
    </section>
  )
}

export default Template