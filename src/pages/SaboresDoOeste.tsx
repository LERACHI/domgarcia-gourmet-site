import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import saboresOesteImg from "@/assets/saboresoeste.png";
import thiagoImg from "@/assets/thiago.png";
import prontaImg from "@/assets/pronta.png";
import cremeMilhoImg from "@/assets/creme-milho.png";
import cremePacoquinhaImg from "@/assets/creme-pacoquinha.png";

const SaboresDoOeste = () => {
  return (
    <>
      <Helmet>
        <title>Reportagem Sabores do Oeste | Dom Garcia Pizzaria Gourmet</title>
        <meta
          name="description"
          content="Veja nossa participação no quadro Sabores do Oeste (Rede Massa/SBT) ensinando pizzas juninas de paçoca com suspiro e creme de milho com bacon."
        />
        <meta property="og:title" content="Reportagem Sabores do Oeste" />
        <meta
          property="og:description"
          content="Participação da Dom Garcia no programa Caminhos do Oeste em 2017, com receitas de pizzas juninas."
        />
        <meta property="og:image" content={saboresOesteImg} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1 pt-24 pb-16">
          <section className="gradient-hero py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-4">Reportagens</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  Sabores do Oeste — Rede Massa (SBT)
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Em 2017, participamos do quadro “Sabores do Oeste” do programa Caminhos do Oeste, ensinando duas pizzas juninas.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <Card className="lg:col-span-2 bg-background/60 backdrop-blur">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-3xl font-display">O que rolou na matéria</CardTitle>
                    <CardDescription>
                      Duas receitas especiais para a festa junina: uma pizza doce e uma salgada.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-muted-foreground">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Receitas apresentadas</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Pizza doce: Paçoca com suspiro.</li>
                        <li>Pizza salgada: Creme de milho com bacon.</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Programa</h3>
                      <p>Quadro “Sabores do Oeste”, do Programa Caminhos do Oeste (TV Rede Massa — SBT).</p>
                      <p>Gravado em 2017, em clima de festa junina.</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Assista à reportagem</h3>
                      <p className="text-muted-foreground">Reprodução direta do vídeo no Facebook (pode solicitar login):</p>
                      <div className="aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
                        <iframe
                          title="Reportagem Sabores do Oeste - Dom Garcia"
                          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdomgarciapizzaria%2Fvideos%2F1571856939539248%2F&show_text=0&width=560"
                          width="560"
                          height="315"
                          style={{ border: "none", overflow: "hidden", width: "100%", height: "100%" }}
                          scrolling="no"
                          frameBorder="0"
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
                        src={thiagoImg}
                        alt="Bastidores da reportagem Sabores do Oeste com Thiago Garcia"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Bastidores da gravação</CardTitle>
                      <CardDescription>Trecho do quadro Sabores do Oeste na TV Rede Massa (SBT).</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={prontaImg}
                        alt="Pizza de paçoca com suspiro apresentada na reportagem"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Pizza apresentada</CardTitle>
                      <CardDescription>Versão doce de paçoca com suspiro mostrada na matéria.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cremeMilhoImg}
                        alt="Receita de pizza creme de milho"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Creme de milho</CardTitle>
                      <CardDescription>Receita da pizza salgada exibida no quadro.</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="overflow-hidden border-primary/30">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cremePacoquinhaImg}
                        alt="Receita de pizza paçoquinha"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-display">Pizza paçoquinha</CardTitle>
                      <CardDescription>Ingredientes do sabor doce mostrado na reportagem.</CardDescription>
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

export default SaboresDoOeste;
