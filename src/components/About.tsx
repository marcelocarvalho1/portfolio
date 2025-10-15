import { Card } from "@/components/ui/card";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGit,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const About = () => {
  const technologies = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#f8b90b" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "Linux", icon: FaLinux, color: "#0a0a0a" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre mim
          </h3>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-center mb-16">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                Desenvolvedor apaixonado por tecnologia
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Atuo há mais de 7 anos na área de Tecnologia da Informação,
                  com experiência em suporte técnico, infraestrutura e
                  desenvolvimento de software em empresas do setor de
                  tecnologia.
                </p>

                <p>
                  Atualmente, sou Analista de TI, atuando com desenvolvimento e
                  qualidade de software, participando ativamente da criação,
                  manutenção e testes de aplicações web.
                </p>

                <p>
                  Sou formado em Análise e Desenvolvimento de Sistemas e
                  pós-graduado em Engenharia de Software. No momento, estou
                  cursando o programa Full Cycle, com foco em Arquitetura de
                  Software, Docker, Git, APIs REST e Programação Orientada a
                  Objetos.
                </p>

                <p>
                  Tenho estudado e aplicado tecnologias como HTML, CSS,
                  JavaScript, TypeScript, React, Next.js, Node.js, Express e
                  Tailwind CSS, sempre buscando unir boas práticas, performance
                  e experiência do usuário em cada projeto.
                </p>
              </div>
            </div>

            <div className="relative flex items-start justify-center">
              <img
                src="/marcelo.jpeg"
                alt="Foto de Marcelo Carvalho"
                className="w-64 h-64 md:w-60 md:h-60 object-cover object-[0%_25%] rounded-full border-primary shadow-lg"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
              Tecnologias que domino
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <Card
                    key={tech.name}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-glass-border"
                  >
                    <div className="text-4xl mb-2 flex justify-center">
                      <Icon style={{ color: tech.color }} />
                    </div>
                    <div className="text-sm font-medium">{tech.name}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
