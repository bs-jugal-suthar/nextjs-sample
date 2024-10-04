import { useRouter } from "next/router";
import React from "react";

const BlogPost = () => {
  const router=useRouter().query
  console.log(router)
  return <div>BlogPost {router.id}</div>;
};

export default BlogPost;

export const getStaticProps = async ({ params }: any) => {
  console.log(`params is ${params}`);
  return {
    props: {
      name: "hello",
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback:false
  };
}
