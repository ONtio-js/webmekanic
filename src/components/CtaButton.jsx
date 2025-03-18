import React from 'react'

const CtaButton = ({title,style,onclick}) => {
  return (
    <button onClick={onclick} className={`${style} bg-primary text-white font-medium hover:bg-white hover:text-primary hover:border border-primary`}>{title}</button>
  )
}

export default CtaButton