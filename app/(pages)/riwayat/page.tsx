import { ChatHistory } from "@/components/chat-history";

export default function RiwayatPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 z-0">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-gray-950 dark:to-transparent z-10"></div>
        </div>
        <div className="relative z-10">
          <div className="container px-4 md:px-6 py-12 md:py-24 max-w-7xl mx-auto">
            <div className="text-center mb-10 space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Riwayat{" "}
                <span className="text-red-600 dark:text-red-400">
                  Percakapan
                </span>
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Lihat dan kelola semua percakapan Anda dengan asisten hukum AI
                kami
              </p>
            </div>
            <ChatHistory />
          </div>
        </div>
      </main>
    </div>
  );
}
