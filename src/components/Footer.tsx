import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/5511999999999",
      label: "WhatsApp",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
  ];

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground">
                Desenvolvendo o futuro
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
