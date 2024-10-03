import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  const [number, setNumber] = useState<number>(0);
  return (
    <div>
      <input
        type="/"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button>
        {" "}
        <Link href={`/blogs/${encodeURIComponent(number)}`}>blog {number}</Link>
      </button>

      <Link href={{pathname:"/blogs/[id]",query:{id:10}}}>click me</Link>
    </div>
  );
};

export default index;
