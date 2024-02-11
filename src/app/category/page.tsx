import React from "react";

export default function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
const query = searchParams?.query || "";
const currentPage = Number(searchParams?.page) || 1;
  return <div>page</div>;
}
