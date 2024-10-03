
import { useRouter } from 'next/router'
import React from 'react'

const CommonBlog = () => {
    const {id}=useRouter().query;
    .log("ID Is ",id);

  return (
    <div>blog number is : {id}</div>
  )
}

export default CommonBlog