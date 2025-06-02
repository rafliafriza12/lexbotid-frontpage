import { AboutHero } from "@/components/about-hero";
import { AboutMission } from "@/components/about-mission";
import { AboutTechnology } from "@/components/about-technology";
import { AboutFaq } from "@/components/about-faq";

export default function TentangKamiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 z-0">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
        </div>
        <div className="relative z-10">
          <AboutHero />
          <AboutMission />
          <AboutTechnology />
          <AboutFaq />
        </div>
      </main>
    </div>
  );
}
