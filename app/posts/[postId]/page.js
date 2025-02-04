import React from "react";

const page = async ({ params }) => {
  const postId = (await params).postId;

  return <>{postId}</>;
};

export default page;
