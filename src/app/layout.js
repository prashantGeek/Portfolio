import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"; // Button import if needed
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your Portfolio</title>
      </head>
      <body className={inter.className}>
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">[Your Name]</h1>
            <div className="flex gap-6">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/projects" className="text-white hover:text-gray-300">
                Projects
              </Link>
              <Link href="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen bg-gray-50">{children}</main>

        <footer className="bg-blue-600 text-white py-4 mt-10">
          <div className="text-center">© 2025 Your Portfolio</div>
        </footer>
      </body>
    </html>
  );
}
