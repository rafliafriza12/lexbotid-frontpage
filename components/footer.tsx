import Link from "next/link"
import { ScaleIcon as Scales } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Scales className="h-5 w-5 text-red-600 dark:text-red-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 HukumQA. Semua hak dilindungi.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Tentang Kami
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Kebijakan Privasi
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Syarat & Ketentuan
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Kontak
          </Link>
        </nav>
      </div>
    </footer>
  )
}
