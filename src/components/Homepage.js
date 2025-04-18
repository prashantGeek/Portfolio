import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a web developer who builds beautiful and functional websites.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/your-username">
              <Button variant="ghost"><Github className="w-5 h-5 mr-2" /> GitHub</Button>
            </Link>
            <Link href="https://linkedin.com/in/your-username">
              <Button variant="ghost"><Linkedin className="w-5 h-5 mr-2" /> LinkedIn</Button>
            </Link>
            <Link href="mailto:your@email.com">
              <Button variant="ghost"><Mail className="w-5 h-5 mr-2" /> Email</Button>
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium">Project One</h3>
                <p className="text-gray-600 dark:text-gray-300">Description of the project goes here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-medium">Project Two</h3>
                <p className="text-gray-600 dark:text-gray-300">Another description here.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Write a short bio here. Mention your skills, experience, and what you're passionate about.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">Feel free to reach out via email or social media!</p>
        </section>
      </div>
    </main>
  );
}
