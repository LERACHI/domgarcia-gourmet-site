import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e receitas exclusivas",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Ambiente Familiar",
      description: "Espaço confortável com playground para as crianças",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Paixão pelo Sabor",
      description: "Dedicação em cada pizza que preparamos",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Crescimento Contínuo",
      description: "Sempre inovando para melhor atender você",
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
            Nossa <span className="text-primary">História</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma trajetória de sabor, qualidade e dedicação em Foz do Iguaçu
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-card border-border space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Desde 2016 em <span className="text-primary">Foz do Iguaçu</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A <strong className="text-foreground">Dom Garcia Pizzaria Gourmet</strong> nasceu em Foz do Iguaçu (PR) e foi inaugurada no dia 21 de outubro de 2016. Idealizada por <strong className="text-foreground">Thiago Garcia</strong> e batizada em homenagem à sua família materna, a empresa surgiu para levar produtos de qualidade e sabores diferenciados até a mesa do consumidor.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Na Dom Garcia, o cliente pode degustar <strong className="text-primary">sabores exclusivos</strong> criados pelo chef, como <em>Salame com Torresmo</em>, <em>Mineirinha</em> ou <em>Pernil ao Barbecue</em>.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Crescimento e Expansão
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A proposta deu tão certo que, após dois anos de muito trabalho, a pizzaria cresceu e precisou mudar de endereço. Hoje contamos com um <strong className="text-foreground">espaço amplo e confortável</strong> para recepcionar amigos e famílias, com <strong className="text-secondary">playground para as crianças</strong>.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Cardápio Diversificado
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                O menu da Dom Garcia também ampliou e atualmente a empresa trabalha com <strong className="text-foreground">pizzas e esfihas</strong> (com ou sem lactose), <strong className="text-foreground">porções, trios e pratos individuais</strong>.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block gradient-italian h-1 w-24"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Nossos <span className="text-primary">Valores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 bg-background border-border hover:border-primary transition-smooth text-center space-y-4 hover-lift"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
