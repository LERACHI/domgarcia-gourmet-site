import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import fideliCardsImg from "@/assets/fideli1.png";
import fideliStampsImg from "@/assets/fideli2.png";

const Fidelity = () => {
  return (
    <>
      <Helmet>
        <title>Cartão Fidelidade | Dom Garcia Pizzaria Gourmet</title>
        <meta
          name="description"
          content="Entenda como funciona o cartão fidelidade Dom Garcia: junte 9 imãs do mesmo tamanho e troque por pizza. Bordas cortesia e regras completas."
        />
        <meta property="og:title" content="Cartão Fidelidade Dom Garcia" />
        <meta
          property="og:description"
          content="Junte 9 imãs do mesmo tamanho (B, G ou GG) e troque por uma pizza. Bordas cortesia e regras completas."
        />
        <meta property="og:image" content={fideliCardsImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">#domgarcialovers</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Cartão Fidelidade Dom Garcia
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Peça, colecione os imãs e troque por pizzas. Bordas de cheddar ou catupiry tradicional são cortesia.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <Card className="bg-background/60 backdrop-blur">
                  <CardHeader className="space-y-2">
                    <Badge className="w-fit">Programa de fidelidade</Badge>
                    <CardTitle className="text-3xl font-display">Como funciona</CardTitle>
                    <CardDescription>
                      Vantagens, regras de troca e boas práticas para aproveitar o cartão fidelidade Dom Garcia.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Vantagens imediatas</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Duas bordas cortesia: cheddar ou catupiry tradicional sem cobrança.</li>
                        <li>Cartão fidelidade entregue no delivery, balcão ou salão.</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Juntando os imãs</h3>
                      <p>
                        Cada pedido vem com um imã colado na tampa, carimbado no verso conforme o tamanho da pizza:
                        Broto (B), Grande (G) ou Gigante (GG).
                      </p>
                      <p>Para trocar, junte 9 imãs com o mesmo carimbo no verso:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>9 imãs DOM GG = 1 pizza gigante.</li>
                        <li>9 imãs DOM G = 1 pizza grande.</li>
                        <li>9 imãs Broto = 1 pizza broto.</li>
                        <li>Se misturar tamanhos (ex.: 5 GG e 4 G), vale o menor tamanho.</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">Onde trocar</h3>
                        <p>Troca válida no delivery, no balcão (take away) ou no salão.</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">Importante</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>A cortesia cobre apenas o valor da pizza do tamanho do carimbo.</li>
                          <li>Adicionais são cobrados: borda catupiry original, doce de leite, chocolate, upgrade de catupiry original, taxa de entrega ou pizza sem lactose.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img src={fideliCardsImg} alt="Imãs coloridos do cartão fidelidade Dom Garcia" className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Os imãs que você recebe</CardTitle>
                      <CardDescription>Guarde 9 do mesmo carimbo no verso para resgatar sua pizza.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img src={fideliStampsImg} alt="Carimbos Broto, G e GG no verso dos imãs" className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Carimbos que definem o tamanho</CardTitle>
                      <CardDescription>DOM B, DOM G ou DOM GG indicam qual pizza você troca.</CardDescription>
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

export default Fidelity;
