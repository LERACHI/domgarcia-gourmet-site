import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import suachanceImg from "@/assets/suachance.png";
import pizza1Img from "@/assets/pizza1.png";
import pizza2Img from "@/assets/pizza2.png";
import thiago1Img from "@/assets/thiago1.png";

const SuaChance = () => {
  return (
    <>
      <Helmet>
        <title>Quadro Sua Chance | Dom Garcia Pizzaria Gourmet</title>
        <meta
          name="description"
          content="Veja a reportagem do quadro Sua Chance (RPC/Globo, 2017) sobre a inovação da Dom Garcia com sabores como Salame com Torresmo e Abobrinha."
        />
        <meta property="og:title" content="Quadro Sua Chance — RPC TV (2017)" />
        <meta
          property="og:description"
          content="Reportagem exibida em abril de 2017 mostrando as inovações do cardápio Dom Garcia."
        />
        <meta property="og:image" content={suachanceImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Reportagens</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Quadro Sua Chance — RPC TV (Globo)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Em abril de 2017, a Dom Garcia foi destaque no quadro “Sua Chance”, mostrando como inovamos no cardápio para surpreender Foz do Iguaçu.
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
                      src={suachanceImg}
                      alt="Capa do quadro Sua Chance na RPC TV"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">Inovação no cardápio</CardTitle>
                    <CardDescription>
                      Reportagem produzida e exibida pela RPC TV (Rede Globo) no quadro “Sua Chance”, abril de 2017.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Destaques da matéria</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Como buscamos inovação para nos destacar no mercado gastronômico de Foz do Iguaçu.</li>
                        <li>Criações de sabores diferentes e marcantes, como Salame com Torresmo e Abobrinha.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Assista à reportagem</h3>
                      <p className="text-muted-foreground">Veja direto aqui (pode solicitar login do Globoplay/G1):</p>
                      <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                        <iframe
                          title="Quadro Sua Chance - RPC TV"
                          src="https://g1.globo.com/pr/oeste-sudoeste/videos-meio-dia-parana-foz-do-iguacu/video/quadro-sua-chance-fala-sobre-jovens-empreendedores-5792985.ghtml"
                          width="560"
                          height="315"
                          style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
                          scrolling="no"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={pizza1Img}
                        alt="Pizza apresentada na reportagem Sua Chance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Salame com Torresmo</CardTitle>
                      <CardDescription>Sabor diferenciado que ajudou a destacar a casa na matéria.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={thiago1Img}
                        alt="Thiago Antonio Garcia na reportagem Sua Chance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Thiago Garcia na RPC</CardTitle>
                      <CardDescription>Depoimento sobre inovação e gestão durante a matéria.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={pizza2Img}
                        alt="Pizza de abobrinha apresentada na reportagem Sua Chance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Abobrinha e receitas autorais</CardTitle>
                      <CardDescription>Outra criação evidenciada pela RPC TV.</CardDescription>
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

export default SuaChance;
