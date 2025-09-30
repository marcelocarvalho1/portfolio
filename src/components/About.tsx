import { Card } from "@/components/ui/card";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaGit, FaLinux
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiTypescript
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
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "Linux", icon: FaLinux, color: "#0a0a0a" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Sobre <span className="text-primary">Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Desenvolvedor apaixonado por tecnologia
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">
              Tecnologias que <span className="text-accent">domino</span>
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
