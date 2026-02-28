import Header from "@/components/layout/public/Header";
import Hero from "@/components/layout/public/Home/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
      </main>
    </div>
  );
}
