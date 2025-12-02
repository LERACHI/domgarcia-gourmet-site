import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clickImg from "@/assets/click.jpg";
import thiago2Img from "@/assets/thiago2.png";
import pizzaGourmet1Img from "@/assets/pizza-gourmet-1.png";

const articleUrl = "https://clickfozdoiguacu.com.br/empreendedores-de-foz-do-iguacu-tentam-se-adaptar-a-quarentena/";

const Clickfoz = () => {
  return (
    <>
      <Helmet>
        <title>Reportagem Clickfoz | Dom Garcia Pizzaria Gourmet</title>
        <meta
          name="description"
          content="Notícia do portal Clickfoz (2020) sobre como reforçamos o delivery e protocolos durante a quarentena em Foz do Iguaçu."
        />
        <meta property="og:title" content="Portal Clickfoz: delivery na quarentena" />
        <meta
          property="og:description"
          content="Empreendedores de Foz do Iguaçu se adaptam à quarentena. Veja como a Dom Garcia reforçou o delivery e os cuidados."
        />
        <meta property="og:image" content={clickImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Notícias</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Portal Clickfoz: delivery na quarentena
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Como reforçamos o atendimento e os cuidados no delivery durante a quarentena em Foz do Iguaçu.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <Card className="lg:col-span-2 bg-background/60 backdrop-blur">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={clickImg}
                      alt="Portal Clickfoz"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Adaptação na quarentena</CardTitle>
                    <CardDescription>
                      Reportagem produzida pelo Portal Clickfoz sobre o reforço do delivery e os protocolos de segurança.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <p>
                        Desde 20 de março de 2020, com o decreto municipal nº 27.980, shoppings e comércios fecharam temporariamente. Restaurantes, farmácias,
                        lotéricas e serviços essenciais mantiveram operações com restrições.
                      </p>
                      <p>
                        Para seguir atendendo, reforçamos o delivery, intensificamos a higienização de materiais e produtos e cuidamos do bem-estar da equipe
                        — especialmente dos entregadores, que estão na linha de frente.
                      </p>
                      <p>
                        Ajustamos o horário para 18h às 22h30, garantindo segurança para clientes e colaboradores durante o período de isolamento social.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Leia a matéria completa</h3>
                      <a
                        href={articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth shadow-glow"
                      >
                        Abrir no portal Clickfoz
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={thiago2Img}
                        alt="Thiago Garcia em frente à pizzaria"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Thiago Garcia</CardTitle>
                      <CardDescription>Empresário à frente das adaptações no delivery e equipe.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={pizzaGourmet1Img}
                        alt="Pizza Dom Garcia apresentada no período"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Pizzas em destaque</CardTitle>
                      <CardDescription>Sabor autoral sendo entregue com segurança durante a quarentena.</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Clickfoz;
