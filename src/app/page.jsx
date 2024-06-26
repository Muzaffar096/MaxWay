import Hero from "@/components/Hero/Hero";
import Menu from "@/components/Menu/Menu";
import MenuCategory from "@/components/MenuCategory/MenuCategory";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MenuCategory />
      <Menu />
    </main>
  );
}
