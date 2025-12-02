import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import novossaboresImg from "@/assets/novossabores.jpeg";
import burrataImg from "@/assets/burrata.jpeg";
import aspargosImg from "@/assets/aspargos.jpeg";
import alcachoImg from "@/assets/alcacho.jpeg";
import floresImg from "@/assets/flores.jpeg";

const SaboresPrimavera = () => {
  return (
    <>
      <Helmet>
        <title>Sabores Exclusivos de Primavera | Dom Garcia</title>
        <meta
          name="description"
          content="Burrata com Parma, aspargos com cogumelos trufados, alcachofra com queijo de cabra e flores com brie: a coleção de primavera da Dom Garcia."
        />
        <meta property="og:title" content="Sabores Exclusivos de Primavera" />
        <meta
          property="og:description"
          content="Quatro criações autorais com ingredientes frescos e finalizações aromáticas."
        />
        <meta property="og:image" content={novossaboresImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Novidades</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Sabores Exclusivos de Primavera
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Ingredientes frescos, finalizações delicadas e combinações que celebram a estação.
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
                      src={novossaboresImg}
                      alt="Seleção de pizzas de primavera Dom Garcia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Coleção de primavera</CardTitle>
                    <CardDescription>
                      Criações autorais com burrata, aspargos trufados, alcachofra com queijo de cabra e flores com brie.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Burrata com Presunto de Parma e Rúcula</h3>
                      <p>
                        Molho de tomate artesanal e muçarela no forno; fora dele, burrata cremosa, Parma de alta qualidade e rúcula selvagem para frescor.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Aspargos com Cogumelos Trufados</h3>
                      <p>
                        Aspargos frescos e mix de cogumelos (shimeji e shitake) salteados, finalizados com azeite trufado e lascas de parmesão.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Alcachofra com Queijo de Cabra e Tomate Cereja</h3>
                      <p>
                        Base de pesto suave, corações de alcachofra marinados, queijo de cabra cremoso e tomates cereja confitados.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">Flores Comestíveis e Queijo Brie</h3>
                      <p>
                        Brie derretido, flores comestíveis frescas e um fio de mel ou geleia de pimenta na finalização para um visual marcante e sabor delicado.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={burrataImg}
                        alt="Pizza de burrata com Parma e rúcula"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Burrata e Parma</CardTitle>
                      <CardDescription>Creme frio sobre massa quente: contraste que conquista.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={alcachoImg}
                        alt="Pizza de alcachofra com queijo de cabra e tomate cereja"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Alcachofra e queijo de cabra</CardTitle>
                      <CardDescription>Equilíbrio entre frescor ácido e cremosidade.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={aspargosImg}
                        alt="Pizza de aspargos com cogumelos trufados"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Aspargos trufados</CardTitle>
                      <CardDescription>Azeite trufado e crocância vegetal em um só lugar.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={floresImg}
                        alt="Pizza com flores comestíveis e brie"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Flores e brie</CardTitle>
                      <CardDescription>Visual primaveril e finalização adocicada.</CardDescription>
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

export default SaboresPrimavera;
