"use client";

import { motion } from "framer-motion";
import { ScaleIcon as Scales } from "lucide-react";

export function AboutHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Menjembatani Kesenjangan Informasi Hukum di Indonesia
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                LexBotID adalah platform inovatif yang menggunakan kecerdasan
                buatan untuk membantu masyarakat Indonesia memahami
                perundang-undangan dengan lebih mudah dan akurat.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                  <Scales className="h-32 w-32 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="absolute inset-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="h-full w-full"
                >
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                    </defs>
                    <text
                      fontSize="7.5"
                      className="text-gray-800 dark:text-gray-200"
                    >
                      <textPath xlinkHref="#circle" className="fill-current">
                        UU • PP • Permen • Perda • Perppu • Perpres • Perban •
                        Perda
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
