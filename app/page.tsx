import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
