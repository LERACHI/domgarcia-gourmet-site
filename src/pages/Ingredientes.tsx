import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ingredientesImg from "@/assets/ingredientes.jpg";
import azeiteImg from "@/assets/azeite.jpeg";
import queijoImg from "@/assets/queijo.jpeg";
import charkImg from "@/assets/chark.jpeg";
import farinhaImg from "@/assets/farinha.jpeg";
import vegetaisImg from "@/assets/vegetais.jpeg";

const Ingredientes = () => {
  return (
    <>
      <Helmet>
        <title>5 Ingredientes Premium | Dom Garcia</title>
        <meta
          name="description"
          content="Conheça os ingredientes premium que elevam nossas pizzas: azeite de qualidade, queijos maturados, carnes selecionadas, vegetais frescos e farinha especial."
        />
        <meta property="og:title" content="5 Ingredientes Premium Dom Garcia" />
        <meta
          property="og:description"
          content="Nossa massa de 48h encontra insumos selecionados para entregar sabor e textura inconfundíveis."
        />
        <meta property="og:image" content={ingredientesImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Novidades</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  5 Ingredientes Premium que Fazem a Diferenca
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Massa de 48h, insumos selecionados e respeito ao ingrediente para entregar pizzas únicas.
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
                      src={ingredientesImg}
                      alt="Ingredientes premium usados nas pizzas Dom Garcia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Seleção que faz diferença</CardTitle>
                    <CardDescription>
                      Cinco pilares que sustentam o sabor Dom Garcia: azeite, queijos, carnes, vegetais frescos e farinha especial.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Azeite e ervas</h3>
                      <p>Usamos azeite de qualidade para finalizar, trazendo brilho, aroma e equilíbrio à massa de 48h.</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Queijos maturados</h3>
                      <p>Queijos selecionados e maturados garantem cremosidade, elasticidade e camadas de sabor.</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Carnes e embutidos</h3>
                      <p>Carnes bem curadas e assadas no ponto trazem umami e textura, sem esconder o perfil da massa.</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Vegetais frescos</h3>
                      <p>Compramos e preparamos vegetais frescos para manter crocância, cor e leveza em cada fatia.</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Farinha especial</h3>
                      <p>Farinha de alta absorção para fermentar devagar, resultando em bordas leves e miolo alveolado.</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={azeiteImg}
                        alt="Azeite finalizando pizza"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Azeite protagonista</CardTitle>
                      <CardDescription>Finalização aromática que eleva massas de longa fermentação.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={queijoImg}
                        alt="Queijos selecionados"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Queijos selecionados</CardTitle>
                      <CardDescription>Maturação controlada para sabor e textura equilibrados.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={charkImg}
                        alt="Carnes e embutidos premium"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Carnes premium</CardTitle>
                      <CardDescription>Curadas e preparadas para somar umami sem pesar a massa.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={vegetaisImg}
                        alt="Vegetais frescos e coloridos"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Vegetais frescos</CardTitle>
                      <CardDescription>Cores, crocância e leveza em cada combinação.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={farinhaImg}
                        alt="Farinha especial para massa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Farinha especial</CardTitle>
                      <CardDescription>Base da nossa massa de 48h: leve, alveolada e saborosa.</CardDescription>
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

export default Ingredientes;
