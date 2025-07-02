"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScaleIcon as Scales, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Chatbot", href: "/chatbot" },
    // { name: "Riwayat", href: "/riwayat" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    // {
    //   name: "Software House",
    //   href: "https://gutechdeveloper.site",
    // },
  ];

  // if (!isMounted) return null

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm"
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between lg:justify-center px-4 md:px-6 lg:relative lg:z-0">
        <Link
          href="/"
          className="flex items-center gap-2 lg:absolute lg:left-0"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
            }}
            className="rounded-lg p-1"
          >
            <Scales className="h-6 w-6 text-red-600 dark:text-white" />
          </motion.div>
          <span className="text-xl font-bold">LexBotID</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full absolute right-[15%] md:right-[5%] lg:right-0"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-red-600 dark:hover:text-red-400",
                pathname === item.href
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) =>
                  item.name === "Software House" ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-red-600 dark:hover:text-red-400",
                        pathname === item.href
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-600 dark:text-gray-300"
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-red-600 dark:hover:text-red-400",
                        pathname === item.href
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-600 dark:text-gray-300"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
