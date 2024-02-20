import categories from "@/public/category.json";
export default function CategoryPipe(categoryValue: string) {
  return categories[categoryValue as keyof typeof categories].label;
}
