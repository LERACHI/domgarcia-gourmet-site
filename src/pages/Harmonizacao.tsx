import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import vinho1Img from "@/assets/vinho1.jpg";
import vinho2Img from "@/assets/vinho2.jpg";

const Harmonizacao = () => {
  return (
    <>
      <Helmet>
        <title>Harmonização de Vinhos | Dom Garcia Pizzaria Gourmet</title>
        <meta
          name="description"
          content="Guia criativo de harmonização: tintos para carnes defumadas, brancos para queijos cremosos e rótulos suaves para pizzas doces."
        />
        <meta property="og:title" content="Harmonização de Vinhos e Pizzas" />
        <meta
          property="og:description"
          content="Sugestões práticas para combinar nossos sabores autorais com vinhos que valorizam cada mordida."
        />
        <meta property="og:image" content={vinho1Img} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Dicas</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Como Harmonizar Vinhos com Nossas Pizzas
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Combinações certeiras para realçar sabores autorais e brindar bons momentos na Dom Garcia.
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
                      src={vinho1Img}
                      alt="Vinho acompanhando as pizzas Dom Garcia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Guia rápido de harmonização</CardTitle>
                    <CardDescription>
                      Roteiro prático para combinar nossos sabores com rótulos que elevam cada fatia.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Tintos versáteis</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Malbec ou Merlot com pizzas de salame, torresmo ou calabresa defumada.</li>
                        <li>Syrah com combinações levemente picantes ou com ervas.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Brancos e rosés</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Chardonnay leve com pizzas cremosas (catupiry, quatro queijos, abobrinha com bechamel).</li>
                        <li>Sauvignon Blanc ou rosé seco com pizzas frescas (rúcula, tomates e queijos suaves).</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Doces e sobremesas</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Moscato ou espumante demi-sec com pizzas doces (chocolate, morango, doce de leite).</li>
                        <li>Porto Ruby com chocolate intenso ou paçoca com suspiro.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Truques rápidos</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Equilibre intensidade: vinho e pizza devem ter peso parecido para nenhum dominar o outro.</li>
                        <li>Temperatura conta: tintos levemente frescos e brancos bem gelados ressaltam aromas e texturas.</li>
                        <li>Gordura x acidez: pizzas mais gordurosas pedem vinhos com boa acidez para limpar o paladar.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={vinho1Img}
                        alt="Taças de vinho tinto com pizza Dom Garcia"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Clima de brinde</CardTitle>
                      <CardDescription>Perfeito para dividir uma pizza autoral com tintos frutados.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={vinho2Img}
                        alt="Pizza doce com vinho tinto em taças"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Sobremesa + vinho</CardTitle>
                      <CardDescription>Harmonização suave para pizzas doces e momentos especiais.</CardDescription>
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

export default Harmonizacao;
