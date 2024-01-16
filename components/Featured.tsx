import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <div className="mt-30">
      <h1 className="text-6xl font-light lg:text-5xl xl:text-4xl 2xl:text-3xl">
        <b>Hey, Dinaish here!</b> Discover my research and theories about the
        realm of psychology.
      </h1>
      <div className="lg:gap-50 mt-60 flex flex-col items-center gap-4 lg:flex-row">
        <div className="relative h-96 flex-1">
          <Image
            src="/p1.jpeg"
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 lg:gap-20">
          <h1 className="text-4xl lg:text-3xl xl:text-2xl 2xl:text-xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-2xl font-light text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="rounded-md border px-20 py-16">Read More</button>
        </div>
      </div>
    </div>
  );
}
