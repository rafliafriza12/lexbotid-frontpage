import Link from "next/link";
import { ScaleIcon as Scales } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 LexBotID. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
