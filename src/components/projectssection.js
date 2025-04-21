function ProjectsSection() {
    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
        link: "https://your-portfolio-link.com",
        github: "https://github.com/yourusername/portfolio",
      },
      {
        title: "Task Manager App",
        description: "A full-stack to-do app with authentication and MongoDB backend.",
        link: "https://your-taskapp.com",
        github: "https://github.com/yourusername/task-app",
      },
      {
        title: "Blog Platform",
        description: "A markdown-based blog built with Next.js and MDX.",
        link: "https://your-blog.com",
        github: "https://github.com/yourusername/blog-platform",
      },
    ];
  
    return (
      <section className="px-6 md:px-12 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-blue-600 dark:text-blue-400 px-0">
                      Live
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-blue-600 dark:text-blue-400 px-0">
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  