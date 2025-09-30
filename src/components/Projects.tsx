import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React, Node.js e PostgreSQL. Sistema de pagamentos, gestão de produtos e dashboard administrativo.",
      image: "🛒",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://projeto1.com",
      githubUrl: "https://github.com/user/projeto1"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real, filtros avançados e exportação de relatórios.",
      image: "📊",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Prisma"],
      liveUrl: "https://projeto2.com",
      githubUrl: "https://github.com/user/projeto2"
    },
    {
      title: "App de Tarefas",
      description: "Aplicativo de produtividade com autenticação, sincronização em tempo real e notificações push.",
      image: "✅",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "https://projeto3.com",
      githubUrl: "https://github.com/user/projeto3"
    },
    {
      title: "API REST Completa",
      description: "API robusta com autenticação JWT, documentação Swagger, testes automatizados e deploy via Docker.",
      image: "🔧",
      technologies: ["Node.js", "Express", "MongoDB", "Docker"],
      liveUrl: "https://api.projeto4.com",
      githubUrl: "https://github.com/user/projeto4"
    },
    {
      title: "Landing Page Responsiva",
      description: "Landing page moderna e responsiva para empresa de tecnologia com animações CSS e otimização SEO.",
      image: "🌐",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveUrl: "https://projeto5.com",
      githubUrl: "https://github.com/user/projeto5"
    },
    {
      title: "Chat em Tempo Real",
      description: "Aplicação de chat com salas privadas, histórico de mensagens e integração com Socket.io.",
      image: "💬",
      technologies: ["Vue.js", "Socket.io", "Express", "Redis"],
      liveUrl: "https://projeto6.com",
      githubUrl: "https://github.com/user/projeto6"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Meus Projetos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-glass-border overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="text-6xl mb-4 text-center">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
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
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
