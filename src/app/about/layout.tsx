import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
   <div className='flex flex-row w-screen h-screen'>
    <div className='w-400 h-screen bg-fuchsia-400'>hello</div>
    <div>{children}</div>
   </div>
  )
}

export default Layout