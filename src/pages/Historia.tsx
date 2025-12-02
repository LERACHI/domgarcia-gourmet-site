import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ambienteExternoImg from "@/assets/ambiente-externo.jpg";
import fachadaDiaImg from "@/assets/fachada.png";
import fachadaNoiteImg from "@/assets/fachada-noite.png";
import interiorPizzariaImg from "@/assets/interior-pizzaria.png";

const Historia = () => {
  return (
    <>
      <Helmet>
        <title>Historia Dom Garcia | Tradição e Paixão</title>
        <meta
          name="description"
          content="Do início na calçada até a casa atual: a trajetória da Dom Garcia com massa de 48h, sabores autorais e atendimento acolhedor em Foz."
        />
        <meta property="og:title" content="Historia Dom Garcia" />
        <meta
          property="og:description"
          content="Conheça a evolução da Dom Garcia: origem simples, reforma, ambiente ampliado e a mesma essência artesanal."
        />
        <meta property="og:image" content={fachadaNoiteImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Historia</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Historia da Pizzaria Dom Garcia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Do começo com mesas na rua ao espaço atual, a mesma massa de 48h e a hospitalidade que criaram nossa comunidade de #domgarcialovers.
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
                      src={fachadaNoiteImg}
                      alt="Fachada atual da Dom Garcia à noite"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Da calçada à casa própria</CardTitle>
                    <CardDescription>
                      Crescemos mantendo a essência: massa de longa fermentação, ingredientes selecionados e atendimento de família.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Os primeiros passos</h3>
                      <p>
                        Começamos servindo na calçada, com mesas simples e foco no sabor. A massa de 48h e os recheios generosos conquistaram os primeiros fiéis.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Reforma e expansão</h3>
                      <p>
                        Reformamos o espaço, ampliamos salão e área externa, mas seguimos artesanais: fermentação natural, forno bem calibrado e equipe próxima do cliente.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Hoje</h3>
                      <p>
                        Referência em Foz do Iguaçu, entregamos uma experiência completa: sabores autorais, ambiente acolhedor e atendimento que conhece cada cliente pelo nome.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={ambienteExternoImg}
                        alt="Primeiras noites com mesas externas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Noite inaugural</CardTitle>
                      <CardDescription>Mesas na rua, clima de bairro e fila pelo sabor.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={fachadaDiaImg}
                        alt="Fachada em reforma e expansão"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Reforma e pintura</CardTitle>
                      <CardDescription>Estrutura ampliada para receber mais famílias.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={interiorPizzariaImg}
                        alt="Salão interno lotado"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Casa cheia</CardTitle>
                      <CardDescription>Ambiente acolhedor com serviço atencioso.</CardDescription>
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

export default Historia;
