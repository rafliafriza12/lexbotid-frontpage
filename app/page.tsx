import { SearchForm } from "@/components/search-form";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <SearchForm />
        <Features />
      </main>
    </div>
  );
}
