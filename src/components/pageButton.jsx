import React from 'react'

const PageButton = ({children, className, onClick}) => {
  return (
    <>
        <span className={className} onClick={onClick} aria-current="page">{children}</span>  
    </>
  )
}

export default PageButton
