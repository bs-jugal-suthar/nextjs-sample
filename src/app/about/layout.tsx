import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <aside className='bg-gray-600'> 
        {children}
    </aside>
  )
}

export default Layout