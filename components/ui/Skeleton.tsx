import React from 'react'

const Skeleton = () => {
  return (
    <div className='p-2 bg-slate-700 rounded animate-pulse h-44'>
      <div className='h-10 bg-slate-700 rounded animate-pulse w-full'></div>
      <div className='h-2 bg-slate-700 rounded animate-pulse w-full'></div>
      <div className='h-6 bg-slate-700 rounded animate-pulse w-full'></div>
    </div>
  )
}

export default Skeleton