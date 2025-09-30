import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import PROJETO1 from "../assets/image.png";
import PROJETO2 from "../assets/coffee.png";
import PROJETO3 from "../assets/node.js.png";
import PROJETO4 from "../assets/sistema-de-gestao.png";

const Projects = () => {
  const projects = [
    {
      title: "Drip Store",
      description:
        "Drip Store é uma loja online especializada na venda de sapatos esportivos...",
      image: PROJETO1,
      technologies: ["React", "Styled Components", "Vercel"],
      liveUrl: "https://digital-store-omega.vercel.app",
      githubUrl: "https://github.com/marcelocarvalho1/digital-store",
    },
    {
      title: "Coffee",
      description: "Landing page projetada para uma cafeteria...",
      image: PROJETO2,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://marcelocarvalho1.github.io/page-coffee/",
      githubUrl: "https://github.com/marcelocarvalho1/page-coffee",
    },
    {
      title: "Backend Node.js com Prisma, Bcrypt, Express e JWT",
      description:
        "Backend em Node.js com autenticação segura, Prisma, Bcrypt, Express e JWT. Base sólida para aplicações escaláveis.",
      image: PROJETO3,
      technologies: ["Node.js", "Prisma", "Express", "JWT", "Bcrypt"],
      liveUrl: "https://github.com/marcelocarvalho1/API_NODE_JWT",
      githubUrl: "https://github.com/marcelocarvalho1/API_NODE_JWT",
    },
    {
      title: "Outfit Commerce",
      description:
        "Sistema simples para gerenciamento de vendas, estoque e clientes. React (Vite) no frontend, Node.js no backend e SQLite.",
      image: PROJETO4,
      technologies: ["React", "Vite", "Node.js", "Express", "SQLite"],
      liveUrl: "https://github.com/marcelocarvalho1/sistema-de-gestao",
      githubUrl: "https://github.com/marcelocarvalho1/sistema-de-gestao",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-3xl font-bold text-center mb-12">
            Meus projetos
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border border-glass-border overflow-hidden">
                  <CardHeader className="pb-4 flex-grow">
                    <div className="w-full flex justify-center mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary text-center">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-center">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 mt-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        size="sm"
                        className="flex-1 bg-primary text-primary-foreground"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Projeto
                        </a>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
