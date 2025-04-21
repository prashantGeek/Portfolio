import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white leading-tight tracking-wide">
          Hi, I'm Prashant
        </h1>
        <p className="text-lg mt-4 text-white opacity-80">
          I create beautiful and functional websites with a focus on user experience.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Link href="https://github.com/prashantGeek">
            <Button variant="ghost">
              <Github className="w-6 h-6 mr-2" /> GitHub
            </Button>
          </Link>
          <Link href="hhttps://www.linkedin.com/in/prashant-tiwari-4676381a0/">
            <Button variant="ghost">
              <Linkedin className="w-6 h-6 mr-2" /> LinkedIn
            </Button>
          </Link>
          <Link href="mailto:pt15052000@gmail.com">
            <Button variant="ghost">
              <Mail className="w-6 h-6 mr-2" /> Email
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
