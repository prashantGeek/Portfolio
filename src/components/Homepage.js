// src/app/page.js
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white leading-tight tracking-wide">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-lg mt-4 text-white opacity-80">
          I create beautiful and functional websites with a focus on user experience.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Link href="https://github.com/your-username">
            <Button variant="ghost">
              <Github className="w-6 h-6 mr-2" /> GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/your-username">
            <Button variant="ghost">
              <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
            </Button>
          </Link>
          <Link href="mailto:your@email.com">
            <Button variant="ghost">
              <Mail className="w-6 h-6 mr-2" /> Email
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-16 px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I’m a web developer with a passion for creating beautiful and intuitive websites. I have experience in
          front-end technologies, and I’m always learning new ways to improve my craft. I enjoy solving problems and
          making user experiences better.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800">Project One</h3>
              <p className="text-gray-600">A project description goes here.</p>
            </CardContent>
          </Card>
          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800">Project Two</h3>
              <p className="text-gray-600">Another project description here.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

// Card and CardContent Components
export function Card({ children, className }) {
  return (
    <div className={`rounded-lg border p-4 shadow-sm bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
