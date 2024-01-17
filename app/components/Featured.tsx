import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

const featuredContent = {
  hero: {
    text: "**Hey, Dinaish here!** Join in my adventure in the realm of psychology Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, error?",
  },
};

export default function Featured() {
  return (
    <div className="mt-30">
      <h1 className="text-justify text-4xl font-light lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <Markdown>{featuredContent.hero.text}</Markdown>
      </h1>
    </div>
  );
}
