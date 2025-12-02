import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Menu = () => {
  const categories = [
    {
      title: "Pizzas Gourmet",
      description: "Sabores exclusivos criados pelo nosso chef",
      items: [
        {
          name: "Salame com Torresmo",
          description: "Molho de tomate, mussarela, salame italiano e torresmo crocante",
        },
        {
          name: "Mineirinha",
          description: "Sabor exclusivo da casa com ingredientes especiais",
        },
        {
          name: "Pernil ao Barbecue",
          description: "Pernil suculento, molho barbecue artesanal e cebola caramelizada",
        },
        {
          name: "Margherita Premium",
          description: "Molho de tomate, mussarela de búfala, tomate fresco e manjericão",
        },
      ],
    },
    {
      title: "Esfihas",
      description: "Tradicionais e saborosas, com ou sem lactose",
      items: [
        {
          name: "Esfiha de Carne",
          description: "Carne temperada com especiarias tradicionais",
        },
        {
          name: "Esfiha de Queijo",
          description: "Queijos especiais derretidos",
        },
        {
          name: "Esfiha Vegetariana",
          description: "Vegetais frescos e temperos selecionados",
        },
      ],
    },
    {
      title: "Porções & Acompanhamentos",
      description: "Deliciosas opções para compartilhar",
      items: [
        {
          name: "Porção de Batata Frita",
          description: "Batatas crocantes servidas com molhos especiais",
        },
        {
          name: "Bruschetta",
          description: "Pão italiano com tomates frescos e manjericão",
        },
        {
          name: "Trios Especiais",
          description: "Combinações perfeitas para sua refeição",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 gradient-hero">
        <div className="container mx-auto text-center space-y-6">
          <div className="inline-block gradient-italian h-1 w-24"></div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Nosso <span className="text-primary">Cardápio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabores exclusivos preparados com ingredientes selecionados
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold"
            asChild
          >
            <a
              href="https://pedido.anota.ai/loja/pizzaria-dom-garcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Cardápio Completo <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-4xl font-display font-bold text-foreground">
                  {category.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="p-6 bg-card border-border hover:border-primary transition-smooth hover-lift"
                  >
                    <h3 className="text-2xl font-display font-semibold text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block gradient-italian h-1 w-24"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              <span className="text-primary">Opções Especiais</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-background border-2 border-border">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Sem Lactose
              </h3>
              <p className="text-muted-foreground">
                Opções especiais para quem tem restrições alimentares
              </p>
            </Card>
            <Card className="p-6 bg-background border-2 border-border">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Pratos Individuais
              </h3>
              <p className="text-muted-foreground">
                Porções perfeitas para uma refeição completa
              </p>
            </Card>
            <Card className="p-6 bg-background border-2 border-border">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Delivery
              </h3>
              <p className="text-muted-foreground">
                Receba em casa com qualidade e agilidade
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Pronto para <span className="text-primary">Pedir</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Faça seu pedido agora através do nosso sistema online
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

export default Menu;
