import React from "react";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

export default function Menu() {
  return (
    <div className="flex-2 mt-15 lg:hidden">
      <h2 className="text-base font-normal text-gray-500">{"What's hot"}</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-base font-normal text-gray-500">Discover by topic</h2>
      <h1 className="text-2xl">Categories</h1>
      <MenuCategories />
      <h2 className="text-base font-normal text-gray-500">
        Chosen by the editor
      </h2>
      <h1 className="text-2xl">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}
