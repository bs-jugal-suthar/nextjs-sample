import { useRouter } from 'next/router'
import React from 'react'

const SlugRouter = () => {
    const {id}=useRouter()?.query;
  return (
    <div>SlugRouter : {id}</div>
  )
}

export default SlugRouter