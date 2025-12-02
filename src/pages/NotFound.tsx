import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center px-4 pt-20">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            <div className="inline-block gradient-italian h-1 w-24"></div>
            <h1 className="text-9xl font-display font-bold text-primary">404</h1>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Página Não Encontrada
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Ops! Parece que esta página não existe. Que tal explorar nosso delicioso cardápio?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar ao Início
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              asChild
            >
              <Link to="/cardapio">Ver Cardápio</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
