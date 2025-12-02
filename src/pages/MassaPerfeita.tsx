import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import artPerfeitaImg from "@/assets/artperfeita.jpeg";
import art1Img from "@/assets/art1.jpeg";
import art2Img from "@/assets/art2.jpg";

const MassaPerfeita = () => {
  return (
    <>
      <Helmet>
        <title>Massa Artesanal de 48h | Dom Garcia Pizzaria Gourmet</title>
        <meta
          name="description"
          content="Descubra como preparamos nossa massa com fermentacao natural de 48 horas para criar pizzas unicas, leves e saborosas."
        />
        <meta property="og:title" content="A Arte da Massa Perfeita" />
        <meta
          property="og:description"
          content="Fermentacao natural de 48h, manejo gentil e assamento que entrega textura crocante por fora e macia por dentro."
        />
        <meta property="og:image" content={artPerfeitaImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Receitas</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  A Arte da Massa Perfeita
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Fermentacao natural de 48 horas, farinha selecionada e assamento preciso para pizzas leves e cheias de sabor.
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
                      src={artPerfeitaImg}
                      alt="Massa artesanal sendo trabalhada"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Fermentacao natural de 48 horas</CardTitle>
                    <CardDescription>
                      Tempo e tecnica para entregar estrutura, leveza e sabor incomparaveis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Mise en place</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Farinha de alta absorcao e agua fria para controlar a fermentacao lenta.</li>
                        <li>Levain ou poolish maturado por 12h para desenvolver aromas complexos.</li>
                        <li>Autolise inicial para fortalecer gluten e dar extensibilidade a massa.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Fermentar devagar</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>48h de descanso refrigerado: sabor mais profundo e digestibilidade maior.</li>
                        <li>Dobras suaves para criar camadas de ar e textura alveolada.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Modelar e assar</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Modelagem manual, preservando as bolhas de ar para bordas altas e leves.</li>
                        <li>Forno bem precalentado para choque termico: crocancia externa e miolo macio.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Acabamentos que elevam</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Azeite finaliza com brilho e aroma; ervas frescas realcam o frescor.</li>
                        <li>Respeitar o balanceamento de umidade dos ingredientes para nao pesar a massa.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={art1Img}
                        alt="Pizza artesanal saindo do forno"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Bordas vivas</CardTitle>
                      <CardDescription>Fermentacao lenta garante alvéolos e crocancia equilibrada.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={art2Img}
                        alt="Discos de massa fermentada com cobertura"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Prontos para o forno</CardTitle>
                      <CardDescription>Discos descansados, cobertura leve e assamento rapido para manter a leveza.</CardDescription>
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

export default MassaPerfeita;
