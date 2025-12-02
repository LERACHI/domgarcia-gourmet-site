import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Clock, Heart, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroPizza from "@/assets/hero-pizza.jpg";

const Home = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Chef Especializado",
      description: "Sabores exclusivos criados por nosso chef",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Entrega Rápida",
      description: "Delivery ágil para sua comodidade",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Ingredientes Selecionados",
      description: "Qualidade premium em cada pizza",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Ambiente Familiar",
      description: "Espaço confortável com playground",
    },
  ];

  const specialties = [
    {
      name: "Salame com Torresmo",
      description: "Combinação única de sabores premium",
    },
    {
      name: "Mineirinha",
      description: "Sabor exclusivo da casa",
    },
    {
      name: "Pernil ao Barbecue",
      description: "Pernil suculento com molho especial",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroPizza} 
            alt="Pizza artesanal Dom Garcia" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <div className="inline-block gradient-italian h-1 w-32 mb-4"></div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
              Sabor <span className="text-primary">Gourmet</span> em Cada
              Fatia
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Pizzas artesanais com ingredientes selecionados e sabores
              exclusivos em Foz do Iguaçu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-lg font-semibold px-8 py-6 transition-smooth hover:scale-105"
                asChild
              >
                <a
                  href="https://pedido.anota.ai/loja/pizzaria-dom-garcia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Peça Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover-lift text-center space-y-4"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block gradient-italian h-1 w-24"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Sabores <span className="text-primary">Exclusivos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criações especiais do nosso chef que você só encontra aqui
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                className="p-6 bg-background border-2 border-border hover:border-primary transition-smooth text-center space-y-3"
              >
                <h3 className="text-2xl font-display font-semibold text-primary">
                  {specialty.name}
                </h3>
                <p className="text-muted-foreground">{specialty.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Pronto para uma <span className="text-primary">Experiência Gourmet</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Faça seu pedido agora e saboreie a melhor pizza artesanal de Foz do
            Iguaçu
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-xl font-semibold px-12 py-7 transition-smooth hover:scale-105"
            asChild
          >
            <a
              href="https://pedido.anota.ai/loja/pizzaria-dom-garcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer Pedido Agora
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
