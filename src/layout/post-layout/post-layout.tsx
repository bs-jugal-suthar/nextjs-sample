import Link from 'next/link';
import React from 'react'

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  const arr = Array.from({ length: 11 }, (_, index) => index+1);   
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
        <div>
        {
            arr.map((ele)=>{
                return <><Link href={`/posts/${encodeURIComponent(ele)}`}>post : {ele}</Link><br/></>
            })
        }
        </div>
        <div>
               {children}
        </div>
    </div>
  )
}

export default PostLayout