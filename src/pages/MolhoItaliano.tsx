import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import molhoImg from "@/assets/molho.jpeg";
import malbecImg from "@/assets/malbec.jpeg";
import chardoImg from "@/assets/chardo.jpeg";
import espumanteImg from "@/assets/espumante.jpeg";
import alvarinhoImg from "@/assets/alvarinho.jpeg";

const MolhoItaliano = () => {
  return (
    <>
      <Helmet>
        <title>Molho de Tomate Italiano Autentico | Dom Garcia</title>
        <meta
          name="description"
          content="Receita de molho de tomate italiano autentico e harmonizacoes criativas com vinhos tintos, brancos e suaves para carnes defumadas, queijos cremosos e pizzas doces."
        />
        <meta property="og:title" content="Molho de Tomate Italiano Autentico" />
        <meta
          property="og:description"
          content="Tintos para carnes defumadas, brancos para queijos cremosos e rotulos suaves para pizzas doces. Saude e bom proveito!"
        />
        <meta property="og:image" content={molhoImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Receitas</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Molho de Tomate Italiano Autentico
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Sugestoes criativas de harmonizacao para carnes defumadas, queijos cremosos e pizzas doces.
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
                      src={molhoImg}
                      alt="Molho de tomate italiano autentico"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Harmonizacoes criativas</CardTitle>
                    <CardDescription>
                      Tintos para carnes defumadas, brancos para queijos cremosos e rotulos suaves para pizzas doces.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Tintos para Carnes Defumadas</h3>
                      <p>
                        A intensidade e o sabor defumado das carnes pedem vinhos tintos com corpo e acidez para equilibrar e limpar o paladar.
                      </p>
                      <p>
                        <strong>Sugestao Classica:</strong> Syrah ou Malbec. Notas de especiarias e taninos presentes suavizam a gordura das carnes.
                      </p>
                      <p>
                        <strong>Sugestao Criativa:</strong> Vinhos Tannat, com estrutura e taninos potentes para enfrentar carnes defumadas e ricas em proteinas.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Brancos para Queijos Cremosos</h3>
                      <p>
                        Queijos como Brie e Camembert combinam com brancos de boa acidez e frescor, que cortam a untuosidade do queijo.
                      </p>
                      <p>
                        <strong>Sugestao Classica:</strong> Chardonnay (sem carvalho) ou Sauvignon Blanc, por frescor ou textura untuosa equilibrada.
                      </p>
                      <p>
                        <strong>Sugestao Criativa:</strong> Arinto de Bucelas ou Alvarinho de Moncao e Melgaco. Mineralidade e frescor realcam sabores amanteigados.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Rotulos Suaves para Pizzas Doces</h3>
                      <p>
                        Pizzas doces pedem vinhos cuja doçura e aroma acompanhem a sobremesa, sem sobrepor os sabores.
                      </p>
                      <p>
                        <strong>Sugestao Classica:</strong> Vinhos de sobremesa ou suaves, como Sweet Red ou Casal Garcia Sweet, ideais para baunilha, caramelo ou frutas.
                      </p>
                      <p>
                        <strong>Sugestao Criativa:</strong> Espumantes Moscatel. Dulçor leve e efervescencia refrescante equilibram recheios doces e gordura.
                      </p>
                    </div>

                    <p className="text-foreground font-semibold">Saude e bom proveito!</p>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={malbecImg}
                        alt="Pizza com vinho tinto"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Tintos e defumados</CardTitle>
                      <CardDescription>Corpo e taninos para equilibrar carnes defumadas.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={chardoImg}
                        alt="Pizza com vinho branco"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Brancos para cremosidade</CardTitle>
                      <CardDescription>Acidez que corta a untuosidade de queijos suaves.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={espumanteImg}
                        alt="Pizza com espumante moscatel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Suaves e espumantes</CardTitle>
                      <CardDescription>Harmonizacao festiva para pizzas doces.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={alvarinhoImg}
                        alt="Pizza com vinho branco mineral"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Mineralidade elegante</CardTitle>
                      <CardDescription>Frescor e minerais que realçam notas amanteigadas.</CardDescription>
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

export default MolhoItaliano;
