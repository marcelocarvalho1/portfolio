import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/portfolio.pdf";
    link.download = "portfolio.pdf";
    link.click();
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fundo sólido em azul claro */}
      <div className="absolute inset-0 bg-primary/10"></div>

      {/* Elementos flutuantes removidos gradientes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">
            Olá, sou Marcelo Carvalho
          </h1>

          <p className="text-md md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvedor
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={handleDownloadCV}
              size="sm"
              className="bg-primary text-primary-foreground text-sm px-4 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div>
            <ArrowDown className="h-8 w-8 mx-auto text-muted-foreground animate-pulse-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
