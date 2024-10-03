import PostLayout from "@/layout/post-layout/post-layout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

const Post = (props:Props) => {
    const {post}=props;
    return (<div>
    <h1>title: {post.title}</h1>
    <p>body : {post.body}</p>
  </div>)
};

export default Post;

type Props = {
  post: {
    title: string;
    body: string;
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const id = params?.id;

  const resData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await resData.json();
  return {
    props: {
      post,
    },
  };
};


Post.getLayout=function getLayout(page:React.ReactNode) {
    return <PostLayout>{page}</PostLayout>
}