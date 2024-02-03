import React from "react";
import coverImage from "@/public/cover.jpg";
import Image from "next/image";
export default function Header() {
  return (
    <div
      className="relative m-0 w-full bg-cover bg-bottom p-0"
      style={{ height: "60vh", maxHeight: "460px" }}
    >
      <Image
        src={coverImage}
        layout="fill"
        objectFit="cover" // This corresponds to the 'bg-cover' class in Tailwind CSS
        objectPosition="bottom" // This corresponds to the 'bg-bottom' class in Tailwind CSS
        alt="Background"
        priority // Optional prop to load this image first (useful for above-the-fold images)
      />
      <div className="container relative mx-auto max-w-4xl break-normal pt-16 text-center md:pt-32">
        {/* Title */}
        <p className="text-3xl font-extrabold text-white md:text-5xl">
          🧠 Jung and Restless 💃
        </p>
        <p className="text-xl text-gray-500 md:text-2xl">
          Deep dive into the realm of psychology
        </p>
      </div>
    </div>
  );
}
