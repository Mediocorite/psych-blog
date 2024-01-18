import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

export default async function CardList({ page }: any) {
  const posts: any[] = [];
  const count: number = 0;

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  const paginationProps = {
    page: { page },
    hasPrev: { hasPrev },
    hasNext: { hasNext },
  };

  return (
    <div className="flex-5">
      <h1 className="my-12">Recent Posts</h1>
      <div>{posts?.map((item) => <Card item={item} key={item._id} />)}</div>
      <Pagination {...paginationProps} />
    </div>
  );
}
