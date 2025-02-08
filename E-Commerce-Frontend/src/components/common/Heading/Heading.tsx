import React from 'react'
type THeading={
    title:string
}

const Heading = ({title}:THeading) => {
  return (
    <div className='flex justify-center items-center text-white font-bold text-3xl h-60 bg-[var(--bg-primary)]'>
        {title}
    </div>
  )
}

export default Heading