import { translations } from "@/data/translations";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  const t = translations.en.notFound;

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-emerald-400 font-mono text-4xl mb-4">
          {t.title}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {t.subtitle}
        </h1>

        <p className="text-gray-400 mb-8 text-lg">
          {t.description}
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-semibold rounded-lg transition-colors"
        >
          <Home className="w-4 h-4 mr-2" />
          {t.goHome}
        </Link>
      </div>
    </main>
  );
}
