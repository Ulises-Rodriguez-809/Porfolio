import React from 'react'

export const Presentation = ({subTitle,text}) => {
  return (
    <>
      <div className='presentation'>
          <p className='subTitle'>{subTitle}</p>
          <p>{text}</p>
      </div>
      <hr></hr>
    </>
  )
}
