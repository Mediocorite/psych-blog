"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ hasNext, hasPrev, page }: any) {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className={`w-25 bg-crimson-600 cursor-pointer p-4 text-white ${
          !hasPrev ? "cursor-not-allowed bg-opacity-50" : ""
        }`}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`w-25 bg-crimson-600 cursor-pointer p-4 text-white ${
          !hasNext ? "cursor-not-allowed bg-opacity-50" : ""
        }`}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
