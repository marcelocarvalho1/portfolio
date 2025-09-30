import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  const socials = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/5585921918622",
      label: "WhatsApp",
      color: "#25D366",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/a-marcelo-carvalho/",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaGithub,
      href: "https://github.com/marcelocarvalho1",
      label: "GitHub",
      color: "#181717",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">Marcelo Carvalho</div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.label}
                variant="ghost"
                asChild
                className="transition-none p-0"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon
                    className="h-10 w-10 min-w-[2.5rem] min-h-[1.6rem]"
                    style={{ color: social.color }}
                  />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
