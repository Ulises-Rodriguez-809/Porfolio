import React from 'react'

export const Title = ({title,subTitle, classText}) => {
  return (
    <>
        <span>{title}</span>
        <span className={`${classText}`}>{subTitle}</span>
    </>
  )
}
