// src/app/page.js
import { Button } from "@/components/ui/button";
import { GithubIcon, Mail, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 rounded-b-xl shadow-lg px-4">
      <h1 className="text-5xl font-extrabold text-white leading-tight tracking-wide">
        Hi, I'm [Your Name]
      </h1>
      <p className="text-lg mt-4 text-white opacity-90 max-w-xl mx-auto">
        I create beautiful and functional websites with a focus on user experience.
      </p>
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <SocialLink
          href="https://github.com/your-username"
          icon={<GithubIcon className="w-5 h-5 mr-2" />}
          label="GitHub"
        />
        <SocialLink
          href="https://linkedin.com/in/your-username"
          icon={<LinkedinIcon className="w-5 h-5 mr-2" />}
          label="LinkedIn"
        />
        <SocialLink
          href="mailto:your@email.com"
          icon={<Mail className="w-5 h-5 mr-2" />}
          label="Email"
        />
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${label}`}>
      <Button variant="ghost" className="text-white hover:text-white/90">
        {icon}
        {label}
      </Button>
    </Link>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-12 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-white">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        I’m a web developer with a passion for crafting beautiful and intuitive websites. I specialize in front-end
        technologies and continuously explore new tools to improve my craft. I enjoy solving problems and making digital
        experiences better for users.
      </p>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Project One",
      description: "A project description goes here.",
    },
    {
      title: "Project Two",
      description: "Another project description here.",
    },
    // Add more projects if needed
  ];

  return (
    <section className="px-6">
      <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-white">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No projects to show right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

// Reusable Card Components
export function Card({ children, className }) {
  return (
    <div className={`rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}
