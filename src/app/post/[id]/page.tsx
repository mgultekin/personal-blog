import React, { Suspense } from "react";
import PostContent from "./PostContent";
import { posts } from "../../../data/posts";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const id = React.use(Promise.resolve(params.id));
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostContent params={{ id }} />
    </Suspense>
  );
} 